// import { useState } from "react";
// import axios from "../api/axios";

// export default function LoginRepetiteur() {
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/repetiteurs/login", form);
//       alert("Connexion réussie !");
//       console.log(res.data.token); // stocke dans localStorage au besoin
//     } catch (err) {
//       if (err.response?.status === 403) {
//         alert("Votre compte est en attente de validation.");
//       } else {
//         alert(err.response?.data?.message || "Erreur lors de la connexion");
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
//       <h2 className="text-xl font-bold mb-4 text-center">Connexion Répétiteur</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input className="input" name="email" type="email" onChange={handleChange} placeholder="Email" required />
//         <input className="input" name="password" type="password" onChange={handleChange} placeholder="Mot de passe" required />
//         <button className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700">Se connecter</button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../api/axios";

export default function LoginRepetiteur() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/repetiteurs/login", form);

      const { token, repetiteur } = res.data;

      // Stocker le token et les infos du répétiteur
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(repetiteur));

    //   alert(`Bienvenue ${repetiteur.name} !`);
      navigate("/repetiteur/dashboard");

    } catch (err) {
      if (err.response?.status === 403) {
        alert("Votre compte est en attente de validation.");
      } else {
        alert(err.response?.data?.message || "Erreur lors de la connexion");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-center">Connexion Répétiteur</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="input"
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          className="input"
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Mot de passe"
          required
        />
        <button className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700">
          Se connecter
        </button>
      </form>
      <p className="mt-4 text-center">
        Vous n'avez pas encore de compte ?{" "}
        <Link to="/repetiteur/register" className="text-indigo-600 hover:underline">
          Inscrivez-vous ici
        </Link>
      </p>
    </div>
  );
}
