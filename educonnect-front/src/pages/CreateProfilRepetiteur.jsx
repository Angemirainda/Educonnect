

import { useState, useEffect } from "react";
import axios from "../api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { X } from "lucide-react";
import Navbar from "../components/Navbar1";

export default function CreateProfilRepetiteur() {
      const [profil, setProfil] = useState({
          nom: "",
          age: "",
          ville: "",
          description: "",
          disponibilites: [],
          photo: null,
          cours: [],
          niveaux: [],
      });

      const [previewPhoto, setPreviewPhoto] = useState(null);
      const [coursInput, setCoursInput] = useState("");
      const [isLoading, setIsLoading] = useState(true);
      const [isEditMode, setIsEditMode] = useState(false);

      const parseJSONSafely = (data, fallback = []) => {
          try {
              return typeof data === "string" ? JSON.parse(data) : Array.isArray(data) ? data : fallback;
          } catch {
              return fallback;
          }
      };

      useEffect(() => {
            const fetchProfil = async () => {
              try {
                  setIsLoading(true);
                  const response = await axios.get("/repetiteur/profil");

                  if (response.data) {
                      setProfil({
                          nom: response.data.nom || "",
                          age: response.data.age || "",
                          ville: response.data.ville || "",
                          description: response.data.description || "",
                          disponibilites: response.data.disponibilites || [],
                          photo: null,
                          cours: parseJSONSafely(response.data.cours),
                          niveaux: parseJSONSafely(response.data.niveaux),
                      });

                      if (response.data.photo_url) {
                          setPreviewPhoto(response.data.photo_url);
                      }

                      if (response.data.nom) {
                          setIsEditMode(true);
                      }
                  }
              } catch (error) {
                  if (error.response?.status !== 404) {
                      toast.error("Erreur lors du chargement du profil");
                      console.error("Erreur:", error);
                  }
              } finally {
                  setIsLoading(false);
              }
          };

          fetchProfil();
      }, []);

      const handleChange = (e) => {
          setProfil({ ...profil, [e.target.name]: e.target.value });
      };

      const handleDisponibilites = (e) => {
          const { value, checked } = e.target;
          setProfil(prev => ({
              ...prev,
              disponibilites: checked 
                  ? [...prev.disponibilites, value] 
                  : prev.disponibilites.filter(d => d !== value)
          }));
      };

      const handleNiveaux = (e) => {
          const { value, checked } = e.target;
          setProfil(prev => ({
              ...prev,
              niveaux: checked 
                  ? [...prev.niveaux, value] 
                  : prev.niveaux.filter(n => n !== value)
          }));
      };

      const handlePhotoChange = (e) => {
          const file = e.target.files[0];
          if (file) {
              setProfil({ ...profil, photo: file });
              setPreviewPhoto(URL.createObjectURL(file));
          }
      };

      const handleCoursKeyDown = (e) => {
          if (e.key === "Enter" && coursInput.trim()) {
              e.preventDefault();
              if (!profil.cours.includes(coursInput.trim())) {
                  setProfil(prev => ({
                      ...prev,
                      cours: [...prev.cours, coursInput.trim()]
                  }));
              }
              setCoursInput("");
          }
      };

      const removeCours = (coursToRemove) => {
          setProfil(prev => ({
              ...prev,
              cours: prev.cours.filter(c => c !== coursToRemove)
          }));
      };

      const handleSubmit = async (e) => {
          e.preventDefault();

          try {
              const formData = new FormData();

              formData.append("nom", profil.nom);
              formData.append("age", profil.age);
              formData.append("ville", profil.ville);
              formData.append("description", profil.description);

              if (profil.photo) {
                  formData.append("photo", profil.photo);
              } else if (!isEditMode) {
                  throw new Error("Une photo est requise");
              }

              profil.disponibilites.forEach(d => formData.append("disponibilites[]", d));
              profil.cours.forEach(c => formData.append("cours[]", c));
              profil.niveaux.forEach(n => formData.append("niveaux[]", n));

              const url = "/repetiteur/profil";
              const method = isEditMode ? "put" : "post";

              await axios[method](url, formData, {
                  headers: {
                      "Content-Type": "multipart/form-data"
                  }
              });

              toast.success(`Profil ${isEditMode ? 'mis à jour' : 'créé'} avec succès`);

              if (!isEditMode) {
                  setIsEditMode(true);
              }

          } catch (error) {
              if (error.response?.status === 422) {
                  const errors = error.response.data.errors;
                  const messages = Object.values(errors).flat().join("\n");
                  toast.error(messages);
              } else {
                  toast.error(error.response?.data?.message || error.message || "Une erreur est survenue");
              }
          }

          
        
      };
  
      const handleUpdate = async () => {
        const formData = new FormData();
    
        formData.append('nom', profil.nom);
        formData.append('age', profil.age);
        formData.append('ville', profil.ville);
        formData.append('description', profil.description);
        if (profil.photo) formData.append('photo', profil.photo);
    
        profil.cours.forEach(c => formData.append('cours[]', c));
        profil.niveaux.forEach(n => formData.append('niveaux[]', n));
        profil.disponibilites.forEach(d => formData.append('disponibilites[]', d));
    
        try {
            const response = await axios.put('http://localhost:8000/api/repetiteur/profil', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Profil mis à jour avec succès !");
            console.log(response.data);
        } catch (error) {
            console.error("Erreur de mise à jour :", error);
            alert(error?.response?.data?.message || "Erreur lors de la mise à jour");
        }
    };
    
             

    const handleDelete = async () => {
      if (!window.confirm("Es-tu sûr de vouloir supprimer ton profil ? Cette action est irréversible.")) return;
    
      try {
        const response = await axios.delete('http://localhost:8000/api/repetiteur/profil', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
    
        alert('Profil supprimé avec succès !');
        // Redirection ou rafraîchissement
        window.location.href = '/repetiteur/creer-profil'; // ou une autre page
      } catch (error) {
        console.error('Erreur de suppression :', error);
        alert(error?.response?.data?.message || 'Erreur lors de la suppression');
      }
    };

    if (isLoading) {
        return <div className="text-center py-8">Chargement...</div>;
    }

    return (
        <div className="bg-gradient-to-t from-blue-500 via-blue-300 ">
            <Navbar />
            <div className="max-w-6xl py-20 mx-auto p-6 grid md:grid-cols-2 gap-10">
                {/* Formulaire */}
                <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-center mb-4">
                        {isEditMode ? "Modifier mon profil" : "Créer mon profil"}
                    </h2>

                    {/* Photo */}
                    <div>
                        <label className="block text-lg font-medium mb-2">Photo {!isEditMode && "*"}</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            className="w-full  rounded-lg p-2 bg-gray-100"
                            required={!isEditMode}
                        />
                        {previewPhoto && (
                            <div className="mt-2">
                                <img 
                                    src={previewPhoto} 
                                    alt="Preview" 
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                            </div>
                        )}
                    </div>

                    {/* Champs texte */}
                    {/* {["nom", "age", "ville"].map((field) => (
                        <div key={field}>
                            <label className="block font-medium mb-2 capitalize">{field} </label>
                            <input
                                type={field === "age" ? "number" : "text"}
                                name={field}
                                value={field === "age" && profil[field] === "" ? "" : profil[field]}
                                onChange={(e) => {
                                    const value = field === "age" 
                                        ? e.target.value === "" 
                                            ? "" 
                                            : parseInt(e.target.value, 10)
                                        : e.target.value;

                                    handleChange({
                                        target: {
                                            name: e.target.name,
                                            value: value
                                        }
                                    });
                                }}
                                className="input w-full text-lg rounded-lg p-2 bg-gray-100"
                                required
                                min={field === "age" ? 18 : undefined}
                                max={field === "age" ? 50 : undefined}
                            />
                        </div>
                    ))} */}

                    {/* Description */}
                    <div>
                        <label className="block text-lg font-medium mb-2">Description </label>
                        <textarea
                            name="description"
                            value={profil.description}
                            onChange={handleChange}
                            className="textarea w-full rounded-lg p-2 bg-gray-100"
                            rows={4}
                            required
                        />
                    </div>

                    {/* Disponibilités */}
                    <div>
                        <label className="block text-lg font-medium mb-2">Disponibilités (2-3 jours) </label>
                        <div className="flex flex-wrap gap-3">
                            {["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"].map((day) => (
                                <label key={day} className="inline-flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        value={day}
                                        checked={profil.disponibilites.includes(day)}
                                        onChange={handleDisponibilites}
                                        className="rounded"
                                    />
                                    <span className="capitalize">{day}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Cours */}
                    <div>
                        <label className="block  text-lg font-medium mb-2">Cours enseignés </label>
                        <input
                            type="text"
                            value={coursInput}
                            onChange={(e) => setCoursInput(e.target.value)}
                            onKeyDown={handleCoursKeyDown}
                            placeholder="Ajouter une matière (Entrée pour valider)"
                            className="input w-full"
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                            {profil.cours.map((c) => (
                                <span key={c} className="badge bg-green-100 text-green-800">
                                    {c}
                                    <button
                                        type="button"
                                        onClick={() => removeCours(c)}
                                        className="ml-2 text-red-500"
                                    >
                                        <X size={14} />
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Niveaux */}
                    <div>
                        <label className="block text-lg font-medium mb-2">Niveaux enseignés </label>
                        <div className="flex flex-wrap gap-3">
                            {["6e", "5e", "4e", "3e", "2nde", "1re", "terminale"].map((niveau) => (
                                <label key={niveau} className="inline-flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        value={niveau}
                                        checked={profil.niveaux.includes(niveau)}
                                        onChange={handleNiveaux}
                                        className="rounded"
                                    />
                                    <span>{niveau}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <button  onClick={handleUpdate} type="submit" className="btn-primary w-full">
                        {isEditMode ? "Mettre à jour" : "Créer"} mon profil
                    </button>
                    <button onClick={handleDelete} className="btn btn-danger">
                    Supprimer mon profil
                    </button>


                </form>

                {/* Aperçu */}
                           </div>

    </div>
            );
}
