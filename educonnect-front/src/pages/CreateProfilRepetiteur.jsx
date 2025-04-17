import { useState } from "react";
import axios from "../api/axios"; // Ton instance axios personnalisée
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Composant principal de la page
export default function CreateProfilRepetiteur() {
  // State pour les données du formulaire
  const [profil, setProfil] = useState({
    nom: "",
    age: "",
    ville: "",
    description: "",
    disponibilites: [],
    photo: null,
  });

  // Pour afficher un aperçu de la photo uploadée
  const [previewPhoto, setPreviewPhoto] = useState(null);

  // Handle pour les inputs texte / textarea
  const handleChange = (e) => {
    setProfil({ ...profil, [e.target.name]: e.target.value });
  };

  // Handle pour les checkbox de disponibilités
  const handleDisponibilites = (e) => {
    const { value, checked } = e.target;
    let updated = [...profil.disponibilites];

    // Ajout ou retrait de la valeur selon l'état
    if (checked) {
      updated.push(value);
    } else {
      updated = updated.filter((d) => d !== value);
    }

    setProfil({ ...profil, disponibilites: updated });
  };

  // Handle pour l'image upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfil({ ...profil, photo: file });
      setPreviewPhoto(URL.createObjectURL(file)); // Pour afficher l’image
    }
  };

  // Envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        //creation du profil
      const formData = new FormData();

      // Ajout des données dans formData (car on envoie un fichier)
      formData.append("nom", profil.nom);
      formData.append("age", profil.age);
      formData.append("ville", profil.ville);
      formData.append("description", profil.description);
      if (profil.photo) {
        formData.append("photo", profil.photo);
      }      
    //   formData.append("photo", profil.photo);
    //   profil.disponibilites.forEach((d, i) =>
    //     formData.append(`disponibilites[${i}]`, d)
    profil.disponibilites.forEach((d) =>
        formData.append("disponibilites[]", d)
    );
      // Envoi vers l’API Laravel
      await axios.post("/repetiteur/profil", formData);
    //   await axios.post("/repetiteur/profil", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    alert("Profil créé avec succès !");
    } catch (err) {
    //   toast.error(
    //     err.response?.data?.message || "Erreur lors de la création du profil"
    //   );
    if (err.response?.status === 422) {
        const errors = err.response.data.errors;
        const messages = Object.values(errors).flat().join("\n");
        toast.error(messages);
      } else {
        toast.error(
          err.response?.data?.message || "Erreur lors de la création du profil"
        );
      }
      
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* Formulaire de création */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Créer mon profil
        </h2>

        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="w-full"
          required
        />

        <input
          type="text"
          name="nom"
          value={profil.nom}
          onChange={handleChange}
          placeholder="Nom"
          className="input w-full"
          required
        />

        <input
          type="number"
          name="age"
          value={profil.age}
          onChange={handleChange}
          placeholder="Âge"
          className="input w-full"
          required
        />

        <input
          type="text"
          name="ville"
          value={profil.ville}
          onChange={handleChange}
          placeholder="Ville"
          className="input w-full"
          required
        />

        <textarea
          name="description"
          value={profil.description}
          onChange={handleChange}
          placeholder="Méthode d'enseignement / description"
          className="textarea w-full"
          rows={4}
          required
        />

        <div>
          <p className="font-semibold mb-2">Disponibilités (2 à 3 jours) :</p>
          {["lundi","mardi", "mercredi","jeudi", "vendredi", "samedi",  "Dimanche"].map((day) => (
            <label key={day} className="mr-4 inline-flex items-center space-x-1">
              <input
                type="checkbox"
                value={day}
                checked={profil.disponibilites.includes(day)}
                onChange={handleDisponibilites}
              />
              <span>{day}</span>
            </label>
          ))}
        </div>

        <button className="bg-blue-600 text-white w-full py-2 rounded-xl hover:bg-blue-700">
          Créer mon profil
        </button>
      </form>

      {/* Preview stylisée du profil */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Aperçu du profil</h2>

        <div className="text-center space-y-4">
          {previewPhoto && (
            <img
              src={previewPhoto}
              alt="Preview"
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />
          )}

          <h3 className="text-lg font-semibold">{profil.nom || "Nom"}</h3>
          <p>{profil.age ? `${profil.age} ans` : "Âge"}</p>
          <p className="italic">{profil.ville || "Ville"}</p>

          <p className="text-sm text-gray-700">{profil.description}</p>

          {profil.disponibilites.length > 0 && (
            <div>
              <p className="font-semibold mt-2">Disponible :</p>
              <ul className="flex justify-center flex-wrap gap-2 text-sm">
                {profil.disponibilites.map((day) => (
                  <li key={day} className="bg-blue-100 px-2 py-1 rounded-full">
                    {day}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Soumettre mon profil
          </button>
        </div>
      </div>
    </div>
  );
}
