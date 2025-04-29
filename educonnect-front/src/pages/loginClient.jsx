
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom"; // Import du composant Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // Icônes que tu souhaites utiliser
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
    <div className=" flex items-center justify-center py-14 bg-cover bg-center bg-cover"  style={{ backgroundImage: 'url(/image/fond3.jpg)' }}>
      <div className="w-100  max-w-4xl mx-auto mt-40 p-6 bg-white rounded">
      
      <div className="py-2">
        <h2 className="text-4xl font-bold mb-4 text-center">Connexion </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
         <div className="mx-5">
            <label htmlFor="" className="block text-lg text-gray-500 font-semibold">Email</label>
            
            <div className="relative">
        <FontAwesomeIcon 
          icon={faEnvelope} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
        />
        <input
           name="email"
           onChange={handleChange}
           type="email"
           placeholder="Email..."
           required
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
        />
      </div>
         </div>
          <div className="mx-5">
            <label htmlFor="" className="block text-lg text-gray-500 font-semibold">Mot de passe</label>
             
            <div className="relative">
        <FontAwesomeIcon 
          icon={faLock} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
        />
        <input
         name="password"
         onChange={handleChange}
         type="password"
         placeholder="Mot de passe..."
         required
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded  w-full"
        />
      </div>
          </div>
         <div className="mx-5">
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Se connecter
            </button>
         </div>
        </form>
        <p className="mt-4 text-center">
        Vous n'avez pas encore de compte ?{" "}
        <Link to="/client/register" className="text-blue-600 hover:underline">
          Inscrivez-vous ici
        </Link>
      </p>
      </div>
     
    </div>

    </div>
      );}
