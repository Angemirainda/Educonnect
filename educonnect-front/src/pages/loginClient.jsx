
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { Link, useNavigate } from "react-router-dom"; // Import du composant Link
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faEnvelope, faLock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // Icônes que tu souhaites utiliser
// import axios from "../api/axios";

// export default function LoginClient() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/client/login", form);

//       const { token, user } = res.data;

//       //  stocker dans localStorage
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));

//       // alert(`Bienvenue ${user.name} !`);
//       toast.success(`Bienvenue ${user.name} !`);

//       // redirection vers le dashboard
//       navigate("/client/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.message || "Erreur lors de la connexion");
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url(/image/insciption1.jpg)' }}>
//       {/* Conteneur des bulles */}
//       <div className="bubbles absolute top-0 left-0 w-full h-full pointer-events-none"></div>
      
//       {/* Formulaire */}
//       <div className="relative z-10 w-full max-w-md mx-4">
//         <div className="bg-white rounded-lg shadow-xl p-8">
//           <div className="py-2">
//             <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Connexion</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="email" className="block text-lg text-gray-600 font-semibold mb-2">Email</label>
//                 <div className="relative">
//                   <FontAwesomeIcon 
//                     icon={faEnvelope} 
//                     className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"
//                   />
//                   <input
//                     name="email"
//                     onChange={handleChange}
//                     type="email"
//                     placeholder="Email..."
//                     required
//                     className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="password" className="block text-lg text-gray-600 font-semibold mb-2">Mot de passe</label>
//                 <div className="relative">
//                   <FontAwesomeIcon 
//                     icon={faLock} 
//                     className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"
//                   />
//                   <input
//                     name="password"
//                     onChange={handleChange}
//                     type="password"
//                     placeholder="Mot de passe..."
//                     required
//                     className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-lg">
//                   Se connecter
//                 </button>
//               </div>
//             </form>
//             <p className="mt-6 text-center text-gray-600">
//               Vous n'avez pas encore de compte ?{" "}
//               <Link to="/client/register" className="text-blue-600 hover:underline font-semibold">
//                 Inscrivez-vous ici
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Styles pour les bulles */}
//       <style >{`
//         .bubble {
//           position: absolute;
//           border-radius: 50%;
//           background: rgba(173, 216, 230, 0.4);
//           box-shadow: 
//             0 0 10px rgba(135, 206, 250, 0.6),
//             inset 0 0 15px rgba(255, 255, 255, 0.5);
//           transform: translateZ(0);
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0) translateX(0);
//           }
//           25% {
//             transform: translateY(-20px) translateX(10px);
//           }
//           50% {
//             transform: translateY(0) translateX(20px);
//           }
//           75% {
//             transform: translateY(-10px) translateX(-10px);
//           }
//         }
//       `}</style>
//     </div>

//          );}


import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "../api/axios";

export default function LoginClient() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    // Création des bulles
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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/client/login", form);
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success(`Bienvenue ${user.name} !`);
      navigate("/client/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Erreur lors de la connexion");
    }
  };

  return (
    <div className="relative min-h-screen flex overflow-hidden bg-gray-100">
      {/* Conteneur des bulles */}
      <div className="bubbles absolute top-0 left-0 w-full h-full pointer-events-none"></div>
      
      {/* Fond d'écran décalé à droite */}
      <div 
        className="hidden md:block md:w-1/2 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/image/insciption1.jpg)',
          marginLeft: 'auto' // Pour le décaler à droite
        }}
      ></div>
      
      {/* Formulaire à gauche */}
      <div className="w-full bg-white md:w-1/2 flex items-center justify-center p-4">
        <div className="relative z-10 w-full max-w-md">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="py-2">
              <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Connexion</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-lg text-gray-600 font-semibold mb-2">Email</label>
                  <div className="relative">
                    <FontAwesomeIcon 
                      icon={faEnvelope} 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"
                    />
                    <input
                      name="email"
                      onChange={handleChange}
                      type="email"
                      placeholder="Email..."
                      required
                      className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-lg text-gray-600 font-semibold mb-2">Mot de passe</label>
                  <div className="relative">
                    <FontAwesomeIcon 
                      icon={faLock} 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"
                    />
                    <input
                      name="password"
                      onChange={handleChange}
                      type="password"
                      placeholder="Mot de passe..."
                      required
                      className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full"
                    />
                  </div>
                </div>
                <div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-lg">
                    Se connecter
                  </button>
                </div>
              </form>
              <p className="mt-6 text-center text-gray-600">
                Vous n'avez pas encore de compte ?{" "}
                <Link to="/client/register" className="text-blue-600 hover:underline font-semibold">
                  Inscrivez-vous ici
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Styles pour les bulles */}
      <style>{`
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: rgba(173, 216, 230, 0.4);
          box-shadow: 
            0 0 10px rgba(135, 206, 250, 0.6),
            inset 0 0 15px rgba(255, 255, 255, 0.5);
          transform: translateZ(0);
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(-10px) translateX(-10px);
          }
        }
      `}</style>
    </div>
  );
}