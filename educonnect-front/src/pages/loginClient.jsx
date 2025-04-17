// import { useState } from "react";
// import axios from "../api/axios";

// export default function LoginClient() {
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/client/login", form);
//       alert("Connexion réussie !");
//       console.log(res.data.token); // à stocker dans localStorage ou context
//     } catch (err) {
//       alert(err.response?.data?.message || "Erreur lors de la connexion");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
//       <h2 className="text-xl font-bold mb-4 text-center">Connexion Client</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input className="input" name="email" onChange={handleChange} type="email" placeholder="Email" required />
//         <input className="input" name="password" onChange={handleChange} type="password" placeholder="Mot de passe" required />
//         <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">Se connecter</button>
//       </form>
//     </div>
//   );
// }


import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom"; // Import du composant Link
import axios from "../api/axios";

export default function LoginClient() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/client/login", form);

      const { token, user } = res.data;

      //  stocker dans localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // alert(`Bienvenue ${user.name} !`);
      toast.success(`Bienvenue ${user.name} !`);

      // redirection vers le dashboard
      navigate("/client/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Erreur lors de la connexion");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-center">Connexion Client</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="input"
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="input"
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Mot de passe"
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
          Se connecter
        </button>
      </form>
      <p className="mt-4 text-center">
        Vous n'avez pas encore de compte ?{" "}
        <Link to="/client/register" className="text-blue-600 hover:underline">
          Inscrivez-vous ici
        </Link>
      </p>
    </div>
  );
}
