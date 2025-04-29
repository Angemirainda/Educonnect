import { useState } from "react";
import { Link,useNavigate } from "react-router-dom"; // Import du composant Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // Icônes que tu souhaites utiliser
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
  return (
    <div>
      
      <div className=" flex items-center justify-center py-14 bg-cover bg-center"  style={{ backgroundImage: 'url(/image/fond1.jpg)' }}>
      <div className=" gap-5">
     
      <div className="w-110 bg-white  py-5 px-5 rounded shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold  text-center">Inscription</h2>
        <form onSubmit={handleSubmit} className="space-y-4 px-2  ">
          
          <div>
            <label htmlFor="" className="block text-gray-600 font-medium">Nom</label>
           <div className="relative">
        <FontAwesomeIcon 
          icon={faUser} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
        />
        <input
          type="text"
          name="name"
                onChange={handleChange}
                placeholder="Nom et prenom..."
                required
          className=" focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
        />
      </div>
          </div>
          
          <div>
            <label htmlFor="" className="block  text-gray-600 font-medium text-base sm:text-lg font-semibold">Email</label>
            {/* <input
              className="input h-10 w-full rounded border  border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Email..."
              required
            /> */}
            <div className="relative">
        <FontAwesomeIcon 
          icon={faEnvelope} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
        />
        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email..."
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
        />
      </div>

          </div>
          <div>
            <label htmlFor="" className="block  text-gray-600 font-medium text-base sm:text-lg font-semibold">Adresse</label>
            {/* <input
              className="input h-10 w-full rounded border  border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="adresse"
              onChange={handleChange}
              placeholder="Adresse..."
              required
            /> */}
            <div className="relative">
        <FontAwesomeIcon 
          icon={faMapMarkerAlt} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
        />
        <input
          name="adresse"
          onChange={handleChange}
          placeholder="Adresse..."
          required
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
        />
      </div>
          </div>
          <div>
            <label htmlFor="" className="block  text-gray-600 font-medium text-base sm:text-lg font-semibold">Mot de passe</label>
            {/* <input
              className="input h-10 w-full rounded border  border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="password"
              type="password"
              onChange={handleChange}
              placeholder="Mot de passe..."
              required
            /> */}
            <div className="relative">
        <FontAwesomeIcon 
          icon={faLock} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
        />
        <input
           name="password"
           type="password"
           onChange={handleChange}
           placeholder="Mot de passe..."
           required
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
        />
      </div>
          </div>
          <div>
            <label htmlFor="" className="block  text-gray-600 font-medium text-base sm:text-lg font-semibold">Confirmer votre mot de passe</label>
            {/* <input
              className="input h-10 w-full rounded border  border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="password_confirmation"
              type="password"
              onChange={handleChange}
              placeholder="Confirmer le mot de passe..."
              required
            /> */}
             <div className="relative">
        <FontAwesomeIcon 
          icon={faLock} 
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
        />
        <input
           name="password_confirmation"
           type="password"
           onChange={handleChange}
           placeholder="confirmer le mot de passe..."
           required
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
        />
      </div>
          </div>
          <div>
            <button className="w-full bg-blue-500 text-white text-lg sm:text-xl font-semibold py-2 rounded  hover:bg-blue-700">
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
