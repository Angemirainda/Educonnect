// import { useState } from "react";
// import axios from "../api/axios";

// export default function RegisterRepetiteur() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     telephone: "",
//     password: "",
//     password_confirmation: "",
//     adresse: "",
//     cv: null,
//     lettre_motivation: null,
//     releve_bac: null,
//     piece_identite: null,
//   });

//   const handleChange = (e) => {
//     const { name, type, files, value } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: type === "file" ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     for (const key in form) {
//       if (form[key] !== null && form[key] !== undefined) {
//         formData.append(key, form[key]);
//       }
//     }

//     // 🔍 Debug : Affiche les données envoyées
//     for (const pair of formData.entries()) {
//       console.log(`${pair[0]}:`, pair[1]);
//     }

//     try {
//       await axios.post("/repetiteurs/register", formData); // Pas besoin de headers ici
//       alert("Inscription en attente de validation");
//     } catch (err) {
//       console.error("Erreur:", err);
//       alert(err.response?.data?.message || "Erreur d'inscription");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
//       <h2 className="text-xl font-bold mb-4 text-center">Inscription Répétiteur</h2>
//       <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
//         <input className="input" name="name" onChange={handleChange} placeholder="Nom complet" required />
//         <input className="input" name="email" type="email" onChange={handleChange} placeholder="Email" required />
//         <input className="input" name="telephone" onChange={handleChange} placeholder="Téléphone" required />
//         <input className="input" name="adresse" onChange={handleChange} placeholder="Adresse" required />
//         <input className="input" name="password" type="password" onChange={handleChange} placeholder="Mot de passe" required />
//         <input className="input" name="password_confirmation" type="password" onChange={handleChange} placeholder="Confirmer le mot de passe" required />

//         <label className="block text-sm font-medium">CV</label>
//         <input type="file" name="cv" onChange={handleChange} required />

//         <label className="block text-sm font-medium">Lettre de motivation</label>
//         <input type="file" name="lettre_motivation" onChange={handleChange} required />

//         <label className="block text-sm font-medium">Relevé du Bac</label>
//         <input type="file" name="releve_bac" onChange={handleChange} required />

//         <label className="block text-sm font-medium">Pièce d'identité</label>
//         <input type="file" name="piece_identite" onChange={handleChange} required />

//         <button className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
//           S'inscrire
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom"; // Import du composant Link
import {  useNavigate } from "react-router-dom";
import axios from "../api/axios";

export default function RegisterRepetiteur() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    telephone: "",
    password: "",
    password_confirmation: "",
    adresse: "",
    cv: null,
    lettre_motivation: null,
    releve_bac: null,
    piece_identite: null,
  });

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in form) {
      if (form[key] !== null && form[key] !== undefined) {
        formData.append(key, form[key]);
      }
    }

    try {
      await axios.post("/repetiteurs/register", formData);
      alert("Inscription en attente de validation");
    } catch (err) {
      console.error("Erreur:", err);
      alert(err.response?.data?.message || "Erreur d'inscription");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-center">Inscription Répétiteur</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input className="input" name="name" onChange={handleChange} placeholder="Nom complet" required />
        <input className="input" name="email" type="email" onChange={handleChange} placeholder="Email" required />
        <input className="input" name="telephone" onChange={handleChange} placeholder="Téléphone" required />
        <input className="input" name="adresse" onChange={handleChange} placeholder="Adresse" required />
        <input className="input" name="password" type="password" onChange={handleChange} placeholder="Mot de passe" required />
        <input className="input" name="password_confirmation" type="password" onChange={handleChange} placeholder="Confirmer le mot de passe" required />

        <label className="block text-sm font-medium">CV</label>
        <input type="file" name="cv" onChange={handleChange} required />

        <label className="block text-sm font-medium">Lettre de motivation</label>
        <input type="file" name="lettre_motivation" onChange={handleChange} required />

        <label className="block text-sm font-medium">Relevé du Bac</label>
        <input type="file" name="releve_bac" onChange={handleChange} required />

        <label className="block text-sm font-medium">Pièce d'identité</label>
        <input type="file" name="piece_identite" onChange={handleChange} required />

        <button className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
          S'inscrire
        </button>
      </form>
      <p className="mt-4 text-center">
        Vous avez déjà un compte ?{" "}
        <Link to="/client/login" className="text-blue-600 hover:underline">
          Connectez-vous ici
        </Link>
      </p>
    </div>
  );
}

