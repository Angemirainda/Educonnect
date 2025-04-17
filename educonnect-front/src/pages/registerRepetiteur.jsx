
// // import React, { useState } from 'react';
// // import api from '../api/axios'; // on utilise notre config axios

// // const CandidaturePage = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     telephone: '',
// //   });

// //   const [files, setFiles] = useState({
// //     cv: null,
// //     lettre_motivation: null,
// //     releve_bac: null,
// //     piece_identite: null,
// //   });

// //   const [message, setMessage] = useState('');

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleFileChange = (e) => {
// //     setFiles({ ...files, [e.target.name]: e.target.files[0] });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const data = new FormData();

// //     Object.entries(formData).forEach(([key, value]) => {
// //       data.append(key, value);
// //     });

// //     Object.entries(files).forEach(([key, file]) => {
// //       if (file) data.append(key, file);
// //     });

// //     try {
// //       await api.post('/candidature', data);
// //       setMessage("Candidature envoyée avec succès !");
// //     } catch (error) {
// //       console.error('Erreur Axios :', error);

// //       if (error.response && error.response.status === 422) {
// //         setMessage("Erreur de validation : " + JSON.stringify(error.response.data.errors));
// //       } else if (error.response && error.response.data.message) {
// //         setMessage("Erreur : " + error.response.data.message);
// //       } else {
// //         setMessage("Erreur inconnue : " + error.message);
// //       }
// //     }
// //   };

// //   return (
// //     <div style={{
// //       padding: "2rem",
// //       maxWidth: "600px",
// //       margin: "2rem auto",
// //       border: "1px solid #ccc",
// //       borderRadius: "8px",
// //       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// //       backgroundColor: "#f9f9f9"
// //     }}>
// //       <h2 style={{
// //         textAlign: "center",
// //         color: "#333",
// //         marginBottom: "1.5rem"
// //       }}>Formulaire de candidature</h2>
// //       {message && <p style={{
// //         color: message.includes("succès") ? "green" : "red",
// //         textAlign: "center"
// //       }}>{message}</p>}

// //       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
// //         <input
// //           name="name"
// //           placeholder="Nom"
// //           onChange={handleChange}
// //           required
// //           style={{
// //             padding: "0.8rem",
// //             fontSize: "1rem",
// //             border: "1px solid #ccc",
// //             borderRadius: "4px",
// //             outline: "none",
// //             transition: "border-color 0.3s",
// //           }}
// //           onFocus={(e) => e.target.style.borderColor = "#007BFF"}
// //           onBlur={(e) => e.target.style.borderColor = "#ccc"}
// //         />
// //         <input
// //           name="email"
// //           type="email"
// //           placeholder="Email"
// //           onChange={handleChange}
// //           required
// //           style={{
// //             padding: "0.8rem",
// //             fontSize: "1rem",
// //             border: "1px solid #ccc",
// //             borderRadius: "4px",
// //             outline: "none",
// //             transition: "border-color 0.3s",
// //           }}
// //           onFocus={(e) => e.target.style.borderColor = "#007BFF"}
// //           onBlur={(e) => e.target.style.borderColor = "#ccc"}
// //         />
// //         <input
// //           name="telephone"
// //           placeholder="Téléphone"
// //           onChange={handleChange}
// //           required
// //           style={{
// //             padding: "0.8rem",
// //             fontSize: "1rem",
// //             border: "1px solid #ccc",
// //             borderRadius: "4px",
// //             outline: "none",
// //             transition: "border-color 0.3s",
// //           }}
// //           onFocus={(e) => e.target.style.borderColor = "#007BFF"}
// //           onBlur={(e) => e.target.style.borderColor = "#ccc"}
// //         />
// //         <input
// //           type="file"
// //           name="cv"
// //           onChange={handleFileChange}
// //           required
// //           style={{
// //             padding: "0.5rem",
// //             fontSize: "1rem",
// //             border: "1px solid #ccc",
// //             borderRadius: "4px",
// //             outline: "none",
// //           }}
// //         />
// //         <input
// //           type="file"
// //           name="lettre_motivation"
// //           onChange={handleFileChange}
// //           required
// //           style={{
// //             padding: "0.5rem",
// //             fontSize: "1rem",
// //             border: "1px solid #ccc",
// //             borderRadius: "4px",
// //             outline: "none",
// //           }}
// //         />
// //         <input
// //           type="file"
// //           name="releve_bac"
// //           onChange={handleFileChange}
// //           required
// //           style={{
// //             padding: "0.5rem",
// //             fontSize: "1rem",
// //             border: "1px solid #ccc",
// //             borderRadius: "4px",
// //             outline: "none",
// //           }}
// //         />
// //         <input
// //           type="file"
// //           name="piece_identite"
// //           onChange={handleFileChange}
// //           required
// //           style={{
// //             padding: "0.5rem",
// //             fontSize: "1rem",
// //             border: "1px solid #ccc",
// //             borderRadius: "4px",
// //             outline: "none",
// //           }}
// //         />
// //         <button
// //           type="submit"
// //           style={{
// //             padding: "0.8rem",
// //             fontSize: "1rem",
// //             color: "#fff",
// //             backgroundColor: "#007BFF",
// //             border: "none",
// //             borderRadius: "4px",
// //             cursor: "pointer",
// //             transition: "background-color 0.3s",
// //           }}
// //           onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
// //           onMouseOut={(e) => e.target.style.backgroundColor = "#007BFF"}
// //         >
// //           Soumettre
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default CandidaturePage;

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
//     setForm({
//       ...form,
//       [name]: type === "file" ? files[0] : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.keys(form).forEach((key) => {
//       formData.append(key, form[key]);
//     });

//     try {
//       await axios.post("/repetiteurs/register", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert("Inscription en attente de validation");
//     } catch (err) {
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

//         <label className="block text-sm">CV</label>
//         <input type="file" name="cv" onChange={handleChange} required />

//         <label className="block text-sm">Lettre de motivation</label>
//         <input type="file" name="lettre_motivation" onChange={handleChange} required />

//         <label className="block text-sm">Relevé du Bac</label>
//         <input type="file" name="releve_bac" onChange={handleChange} required />

//         <label className="block text-sm">Pièce d'identité</label>
//         <input type="file" name="piece_identite" onChange={handleChange} required />

//         <button className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">S'inscrire</button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
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

    // 🔍 Debug : Affiche les données envoyées
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    try {
      await axios.post("/repetiteurs/register", formData); // Pas besoin de headers ici
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
    </div>
  );
}

