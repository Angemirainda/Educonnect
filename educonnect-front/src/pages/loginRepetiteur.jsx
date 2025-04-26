

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar1";
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

  // return (
  //   <div className="flex gap-5 max-w-4xl mx-auto mt-40 p-6 bg-white shadow-lg rounded-xl">
  //     <div>
  //       <img src="/image/4957136.jpg" alt="" className="w-100 h-100" />
  //     </div>
  //     <div className=" py-5">
  //       <h2 className="text-4xl font-bold mb-4 text-center">Connexion </h2>
  //       <form onSubmit={handleSubmit} className="space-y-4">
  //        <div className="mx-5">
  //        <label htmlFor="" className="block text-lg font-semibold">Email</label>
  //         <input
  //           className="input h-10 w-full rounded-lg bg-gray-100 px-3"
  //           name="email"
  //           type="email"
  //           onChange={handleChange}
  //           placeholder="Email..."
  //           required
  //         /> 
  //        </div>
  //        <div className="mx-5"> 
  //        <label htmlFor="" className="block text-lg font-semibold">Mot de passe</label>
  //         <input
  //           className="input h-10 w-full rounded-lg bg-gray-100 px-3"
  //           name="password"
  //           type="password" 
  //           onChange={handleChange}
  //           placeholder="Mot de passe..."
  //           required
  //         />
  //        </div>
  //        <div className="mx-5">
  //         <button className="w-full bg-blue-500 text-white text-xl font-semibold py-2 rounded-xl hover:bg-blue-700">
  //             Se connecter
  //           </button>
  //        </div>
  //       </form>
  //       <p className="mt-4 text-center">
  //         Vous n'avez pas encore de compte ?{" "}
  //         <Link to="/repetiteur/register" className="text-blue-500 hover:text-blue-700 hover:underline">
  //           Inscrivez-vous ici
  //         </Link>
  //       </p>
  //     </div>
  //   </div>
    
  // );  

  return (
   <div>
    <Navbar/>
        <div className="min-h-screen  flex items-center justify-center bg-gray-100">
       <div className="flex flex-col lg:flex-row gap-5 max-w-4xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-xl">
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img src="/image/4957136.jpg" alt="" className="w-full h-auto object-cover rounded-xl" />
      </div>
      <div className="w-full lg:w-1/2 py-5">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Connexion</h2>
        <form onSubmit={handleSubmit} className="space-y-4 px-2 sm:px-5">
          <div>
            <label htmlFor="" className="block text-base sm:text-lg font-semibold">Email</label>
            <input
              className="input h-10 w-full rounded-lg bg-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Email..."
              required
            />
          </div>
          <div>
            <label htmlFor="" className="block text-base sm:text-lg font-semibold">Mot de passe</label>
            <input
              className="input h-10 w-full rounded-lg bg-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="password"
              type="password"
              onChange={handleChange}
              placeholder="Mot de passe..."
              required
            />
          </div>
          <div>
            <button className="w-full bg-blue-500 text-white text-lg sm:text-xl font-semibold py-2 rounded-xl hover:bg-blue-700">
              Se connecter
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm sm:text-base">
          Vous n'avez pas encore de compte ?{" "}
          <Link to="/repetiteur/register" className="text-blue-500 hover:text-blue-700 hover:underline">
            Inscrivez-vous ici
          </Link>
        </p>
      </div>
    </div>
   </div>
   </div>
  );
  
}
