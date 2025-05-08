// import { useState } from "react";
// import { Link,useNavigate } from "react-router-dom"; // Import du composant Link
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faEnvelope, faLock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // Icônes que tu souhaites utiliser
// import axios from "axios";

// export default function RegisterClient() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     password_confirmation: "",
//     adresse: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };


//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8000/api/client/register", formData);

//       const { token, user } = res.data;

//       // Sauvegarder token + user dans le localStorage
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));

//       // Rediriger vers le dashboard
//       navigate("/client/dashboard");
//     } catch (error) {
//       alert("Erreur : " + error.response.data.message);
//     }
//   };
//   return (
//     <div>
      
//       <div className=" flex items-center justify-center py-14 bg-cover bg-center"  style={{ backgroundImage: 'url(/image/inscription2.jpg)' }}>
//       <div className=" gap-5">
     
//       <div className="w-110 bg-white  py-5 px-5 rounded shadow-lg">
//         <h2 className="text-3xl sm:text-4xl font-bold  text-center">Inscription</h2>
//         <form onSubmit={handleSubmit} className="space-y-4 px-2  ">
          
//           <div>
//             <label htmlFor="" className="block text-gray-600 font-medium">Nom</label>
//            <div className="relative">
//         <FontAwesomeIcon 
//           icon={faUser} 
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
//         />
//         <input
//           type="text"
//           name="name"
//                 onChange={handleChange}
//                 placeholder="Nom et prenom..."
//                 required
//           className=" focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
//         />
//       </div>
//           </div>
          
//           <div>
//             <label htmlFor="" className="block  text-gray-600 font-medium text-base sm:text-lg font-semibold">Email</label>
//             {/* <input
//               className="input h-10 w-full rounded border  border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               name="email"
//               type="email"
//               onChange={handleChange}
//               placeholder="Email..."
//               required
//             /> */}
//             <div className="relative">
//         <FontAwesomeIcon 
//           icon={faEnvelope} 
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
//         />
//         <input
//           name="email"
//           type="email"
//           onChange={handleChange}
//           placeholder="Email..."
//           className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
//         />
//       </div>

//           </div>
//           <div>
//             <label htmlFor="" className="block  text-gray-600 font-medium text-base sm:text-lg font-semibold">Adresse</label>
//             {/* <input
//               className="input h-10 w-full rounded border  border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               name="adresse"
//               onChange={handleChange}
//               placeholder="Adresse..."
//               required
//             /> */}
//             <div className="relative">
//         <FontAwesomeIcon 
//           icon={faMapMarkerAlt} 
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
//         />
//         <input
//           name="adresse"
//           onChange={handleChange}
//           placeholder="Adresse..."
//           required
//           className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
//         />
//       </div>
//           </div>
//           <div>
//             <label htmlFor="" className="block  text-gray-600 font-medium text-base sm:text-lg font-semibold">Mot de passe</label>
//             {/* <input
//               className="input h-10 w-full rounded border  border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               name="password"
//               type="password"
//               onChange={handleChange}
//               placeholder="Mot de passe..."
//               required
//             /> */}
//             <div className="relative">
//         <FontAwesomeIcon 
//           icon={faLock} 
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
//         />
//         <input
//            name="password"
//            type="password"
//            onChange={handleChange}
//            placeholder="Mot de passe..."
//            required
//           className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
//         />
//       </div>
//           </div>
//           <div>
//             <label htmlFor="" className="block  text-gray-600 font-medium text-base sm:text-lg font-semibold">Confirmer votre mot de passe</label>
//             {/* <input
//               className="input h-10 w-full rounded border  border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               name="password_confirmation"
//               type="password"
//               onChange={handleChange}
//               placeholder="Confirmer le mot de passe..."
//               required
//             /> */}
//              <div className="relative">
//         <FontAwesomeIcon 
//           icon={faLock} 
//           className="focus:outline-none focus:ring-2 focus:ring-blue-500 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
//         />
//         <input
//            name="password_confirmation"
//            type="password"
//            onChange={handleChange}
//            placeholder="confirmer le mot de passe..."
//            required
//           className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded w-full"
//         />
//       </div>
//           </div>
//           <div>
//             <button className="w-full bg-blue-500 text-white text-lg sm:text-xl font-semibold py-2 rounded  hover:bg-blue-700">
//               S'inscrire
//             </button>
//           </div>
//         </form>
//         <p className="mt-4 text-center text-sm sm:text-base">
//           Vous avez déjà un compte ?{" "}
//           <Link to="/client/login" className="text-blue-600 hover:text-blue-700 hover:underline">
//             Connectez-vous ici
//           </Link>
//         </p>
//       </div>
//     </div>
//       </div>
//     </div>
//   );
  
// }

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function RegisterClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    adresse: "",
  });

  useEffect(() => {
    const bubblesContainer = document.querySelector('.bubbles');
    if (bubblesContainer) {
      for (let i = 0; i < 15; i++) {
        createBubble(bubblesContainer);
      }
    }
  }, []);

  const createBubble = (container) => {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 50 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = `${Math.random() * 100}%`;
    bubble.style.opacity = Math.random() * 0.5 + 0.1;
    const animationDuration = Math.random() * 20 + 10;
    bubble.style.animation = `float ${animationDuration}s infinite ease-in-out`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(bubble);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/client/register", formData);
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/clt/dashboard");
    } catch (error) {
      alert("Erreur : " + error.response.data.message);
    }
  };

  return (
    <div className=" bg-white relative min-h-screen flex overflow-hidden ">
      {/* Bulles animées en arrière-plan */}
      <div className="bubbles absolute top-0 left-0 w-full h-full pointer-events-none"></div>
      
      
      
      {/* Formulaire à droite avec hauteur réduite */}
      <div className="w-full md:w-1/2 flex items-start py-8 justify-center p-4">
        <div className="relative z-10 w-full max-w-md bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Inscription</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nom */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Nom complet</label>
              <div className="relative">
                <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Nom et prénom..."
                  required
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            {/* Email */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Email</label>
              <div className="relative">
                <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  placeholder="Email..."
                  required
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            {/* Adresse */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Adresse</label>
              <div className="relative">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                <input
                  name="adresse"
                  onChange={handleChange}
                  placeholder="Adresse..."
                  required
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            {/* Mot de passe */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Mot de passe</label>
              <div className="relative">
                <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                <input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  placeholder="Mot de passe..."
                  required
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            {/* Confirmation mot de passe */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Confirmer le mot de passe</label>
              <div className="relative">
                <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                <input
                  name="password_confirmation"
                  type="password"
                  onChange={handleChange}
                  placeholder="Confirmer le mot de passe..."
                  required
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 mt-4">
              S'inscrire
            </button>
          </form>
          
          <p className="mt-4 text-center text-gray-600 text-sm">
            Vous avez déjà un compte ?{" "}
            <Link to="/client/login" className="text-blue-600 hover:underline">
              Connectez-vous ici
            </Link>
          </p>
        </div>
      </div>
      {/* Image à gauche */}
      <div 
        className="hidden md:block md:w-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/image/inscription2.jpg)' }}
      ></div>
      {/* Styles pour les bulles */}
      <style>{`
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: rgba(173, 216, 230, 0.4);
          box-shadow: 0 0 10px rgba(135, 206, 250, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.5);
          transform: translateZ(0);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(-10px) translateX(-10px); }
        }
      `}</style>
    </div>
  );
}