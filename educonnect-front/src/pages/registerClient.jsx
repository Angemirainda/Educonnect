// // import React, { useState } from 'react';
// // import api from '../api/axios';

// // const RegisterPage = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     password_confirmation: '',
// //     role: '', // Par défaut vide → l'utilisateur doit choisir
// //     adresse: ''
// //   });

// //   const [error, setError] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleChange = (e) => {
// //     setFormData({...formData, [e.target.name]: e.target.value});
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!formData.role) {
// //       setError("Veuillez sélectionner un rôle.");
// //       return;
// //     }

// //     try {
// //       const res = await api.post('/register', formData);
// //       setMessage("Inscription réussie !");
// //       localStorage.setItem('token', res.data.token);
// //       setError('');
// //     } catch (err) {
// //       console.error(err);
// //       setError("Erreur lors de l'inscription");
// //     }
// //   };

// //   return (
// //     <div style={{ padding: "2rem" }}>
// //       <h2>Inscription</h2>
// //       {message && <p style={{ color: 'green' }}>{message}</p>}
// //       {error && <p style={{ color: 'red' }}>{error}</p>}

// //       <form onSubmit={handleSubmit}>
// //         <input name="name" placeholder="Nom" onChange={handleChange} required />
// //         <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
// //         <input name="password" placeholder="Mot de passe" type="password" onChange={handleChange} required />
// //         <input name="password_confirmation" placeholder="Confirmation mot de passe" type="password" onChange={handleChange} required />

// //         {/* Select pour le rôle */}
// //         <select name="role" value={formData.role} onChange={handleChange} required>
// //           <option value="">-- Choisir un rôle --</option>
// //           <option value="client">Client</option>
// //           <option value="repetiteur">Répetiteur</option>
// //         </select>

// //         <input name="adresse" placeholder="Adresse" onChange={handleChange} required />

// //         <button type="submit">S'inscrire</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default RegisterPage;

// import React, { useState } from 'react';
// import api from '../api/axios';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     password_confirmation: '',
//     role: '',
//     adresse: ''
//   });

//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.role) {
//       setError("Veuillez sélectionner un rôle.");
//       return;
//     }

//     try {
//       const res = await api.post('/register', formData);
//       setMessage("Inscription réussie !");
//       localStorage.setItem('token', res.data.token);
//       setError('');
//     } catch (err) {
//       console.error(err);
//       setError("Erreur lors de l'inscription");
//     }
//   };

//   return (
//     <div style={{
//       padding: "2rem",
//       maxWidth: "500px",
//       margin: "2rem auto",
//       border: "1px solid #ccc",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       backgroundColor: "#f9f9f9"
//     }}>
//       <h2 style={{
//         textAlign: "center",
//         color: "#333",
//         marginBottom: "1.5rem"
//       }}>Inscription</h2>
//       {message && <p style={{ color: 'green', textAlign: "center" }}>{message}</p>}
//       {error && <p style={{ color: 'red', textAlign: "center" }}>{error}</p>}

//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//         <input
//           name="name"
//           placeholder="Nom"
//           onChange={handleChange}
//           required
//           style={{
//             padding: "0.8rem",
//             fontSize: "1rem",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             outline: "none",
//             transition: "border-color 0.3s",
//           }}
//           onFocus={(e) => e.target.style.borderColor = "#007BFF"}
//           onBlur={(e) => e.target.style.borderColor = "#ccc"}
//         />
//         <input
//           name="email"
//           placeholder="Email"
//           type="email"
//           onChange={handleChange}
//           required
//           style={{
//             padding: "0.8rem",
//             fontSize: "1rem",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             outline: "none",
//             transition: "border-color 0.3s",
//           }}
//           onFocus={(e) => e.target.style.borderColor = "#007BFF"}
//           onBlur={(e) => e.target.style.borderColor = "#ccc"}
//         />
//         <input
//           name="password"
//           placeholder="Mot de passe"
//           type="password"
//           onChange={handleChange}
//           required
//           style={{
//             padding: "0.8rem",
//             fontSize: "1rem",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             outline: "none",
//             transition: "border-color 0.3s",
//           }}
//           onFocus={(e) => e.target.style.borderColor = "#007BFF"}
//           onBlur={(e) => e.target.style.borderColor = "#ccc"}
//         />
//         <input
//           name="password_confirmation"
//           placeholder="Confirmation mot de passe"
//           type="password"
//           onChange={handleChange}
//           required
//           style={{
//             padding: "0.8rem",
//             fontSize: "1rem",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             outline: "none",
//             transition: "border-color 0.3s",
//           }}
//           onFocus={(e) => e.target.style.borderColor = "#007BFF"}
//           onBlur={(e) => e.target.style.borderColor = "#ccc"}
//         />
        
//         <input
//           name="adresse"
//           placeholder="Adresse"
//           onChange={handleChange}
//           required
//           style={{
//             padding: "0.8rem",
//             fontSize: "1rem",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             outline: "none",
//             transition: "border-color 0.3s",
//           }}
//           onFocus={(e) => e.target.style.borderColor = "#007BFF"}
//           onBlur={(e) => e.target.style.borderColor = "#ccc"}
//         />
//         <button
//           type="submit"
//           style={{
//             padding: "0.8rem",
//             fontSize: "1rem",
//             color: "#fff",
//             backgroundColor: "#007BFF",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//             transition: "background-color 0.3s",
//           }}
//           onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
//           onMouseOut={(e) => e.target.style.backgroundColor = "#007BFF"}
//         >
//           S'inscrire
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;
import { useState } from "react";
import axios from "axios";

export default function RegisterClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    adresse: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/client/register", formData);
      alert("Inscription réussie !");
    } catch (error) {
      alert("Erreur : " + error.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-center">Inscription Client</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="input" name="name" onChange={handleChange} placeholder="Nom complet" required />
        <input className="input" name="email" type="email" onChange={handleChange} placeholder="Email" required />
        <input className="input" name="adresse" onChange={handleChange} placeholder="Adresse" required />
        <input className="input" name="password" type="password" onChange={handleChange} placeholder="Mot de passe" required />
        <input className="input" name="password_confirmation" type="password" onChange={handleChange} placeholder="Confirmer le mot de passe" required />
        <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">S'inscrire</button>
      </form>
    </div>
  );
}
