import { useState } from "react";
import { Link,useNavigate } from "react-router-dom"; // Import du composant Link
import Navbar from "../components/Navbar1";
import EduConnectCustomLogo from "../components/LogoEdu";
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:8000/api/client/register", formData);
  //     alert("Inscription réussie !");
  //   } catch (error) {
  //     alert("Erreur : " + error.response.data.message);
  //   }
  // };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/client/register", formData);

      const { token, user } = res.data;

      // Sauvegarder token + user dans le localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Rediriger vers le dashboard
      navigate("/client/dashboard");
    } catch (error) {
      alert("Erreur : " + error.response.data.message);
    }
  };

  // return (
  //   <div className=" flex max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
  //     <div>
  //       <img src="/image/4944106.jpg" alt="" className="h-full w-130" />
  //     </div>
  //    <div className="py-2">
  //     <h2 className="text-4xl font-bold mb-4 text-center">Inscription</h2>
  //       <form onSubmit={handleSubmit} className="space-y-4">
  //        <div className="mx-5">
  //           <label htmlFor="" className="block text-lg font-semibold">Nom</label>
  //           <input
  //             className="input h-10 w-full rounded-lg bg-gray-100 px-3"
  //             name="name"
  //             onChange={handleChange}
  //             placeholder="Nom et prenom..."
  //             required
  //           />
  //        </div>
  //         <div className="mx-5">            
  //           <label htmlFor="" className="block text-lg font-semibold">Email</label>
  //           <input
  //             className="input h-10 w-full rounded-lg bg-gray-100 px-3"
  //             name="email"
  //             type="email"
  //             onChange={handleChange}
  //             placeholder="Email..."
  //             required
  //           />
  //         </div>
  //          <div className="mx-5">
  //           <label htmlFor="" className="block text-lg font-semibold">Adresse</label>
  //             <input
  //             className="input h-10 w-full rounded-lg bg-gray-100 px-3"
  //             name="adresse"
  //             onChange={handleChange}
  //             placeholder="Adresse..."
  //             required
  //             />
  //          </div>
  //          <div className="mx-5">
  //           <label htmlFor="" className="block text-lg font-semibold">Mot de passe</label>
  //             <input
  //             className="input h-10 w-full rounded-lg bg-gray-100 px-3"
  //             name="password"
  //             type="password"
  //             onChange={handleChange}
  //             placeholder="Mot de passe..."
  //             required
  //             />
  //          </div>
  //          <div className="mx-5">
  //             <label htmlFor="" className="block text-lg font-semibold">Confirmer votre mot de passe</label>
  //             <input
  //             className="input h-10 w-full rounded-lg bg-gray-100 px-3"
  //             name="password_confirmation"
  //             type="password"
  //             onChange={handleChange}
  //             placeholder="Confirmer le mot de passe..."
  //             required
  //             />
  //          </div>
  //          <div  className="mx-5" >
  //           <button className="w-full bg-blue-500 text-white text-xl font-semibold py-2 rounded-xl hover:bg-blue-700">
  //             S'inscrire
  //           </button>
  //          </div>
  //       </form>
  //       <p className="mt-4 text-center">
  //         Vous avez déjà un compte ?{" "}
  //         <Link to="/client/login" className="text-blue-600 hover:text-blue-700 hover:underline">
  //           Connectez-vous ici
  //         </Link>
  //       </p>
  //    </div>
  //   </div>
  // );
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center py-14 bg-gray-100">
      <div className="flex flex-col lg:flex-row max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl gap-5">
      <div className=" lg:w-1/2 flex items-center justify-center">
        <img src="/image/4944106.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="w-full lg:w-1/2 py-2">
        <h2 className="text-3xl sm:text-4xl font-bold  text-center">Inscription</h2>
        <form onSubmit={handleSubmit} className="space-y-4 px-2 sm:px-5">
          
          <div>
            <label htmlFor="" className="block text-base sm:text-lg font-semibold">Nom</label>
            <input
              className="input h-10 w-full rounded-lg bg-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="name"
              onChange={handleChange}
              placeholder="Nom et prenom..."
              required
            />
          </div>
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
            <label htmlFor="" className="block text-base sm:text-lg font-semibold">Adresse</label>
            <input
              className="input h-10 w-full rounded-lg bg-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="adresse"
              onChange={handleChange}
              placeholder="Adresse..."
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
            <label htmlFor="" className="block text-base sm:text-lg font-semibold">Confirmer votre mot de passe</label>
            <input
              className="input h-10 w-full rounded-lg bg-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="password_confirmation"
              type="password"
              onChange={handleChange}
              placeholder="Confirmer le mot de passe..."
              required
            />
          </div>
          <div>
            <button className="w-full bg-blue-500 text-white text-lg sm:text-xl font-semibold py-2 rounded-xl hover:bg-blue-700">
              S'inscrire
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm sm:text-base">
          Vous avez déjà un compte ?{" "}
          <Link to="/client/login" className="text-blue-600 hover:text-blue-700 hover:underline">
            Connectez-vous ici
          </Link>
        </p>
      </div>
    </div>
      </div>
    </div>
  );
  
}
