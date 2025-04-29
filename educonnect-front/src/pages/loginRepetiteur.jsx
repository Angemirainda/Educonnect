

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faEnvelope, faLock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import { motion } from "framer-motion";



// import axios from "../api/axios";

// export default function LoginRepetiteur() {
  
//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/repetiteurs/login", form);

//       const { token, repetiteur } = res.data;

//       // Stocker le token et les infos du répétiteur
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(repetiteur));

//     //   alert(`Bienvenue ${repetiteur.name} !`);
//       navigate("/repetiteur/dashboard");

//     } catch (err) {
//       if (err.response?.status === 403) {
//         alert("Votre compte est en attente de validation.");
//       } else {
//         alert(err.response?.data?.message || "Erreur lors de la connexion");
//       }
//     }
//   };

//   return (
//    <div>
//         <div className="min-h-screen  flex items-center justify-center" style={{ backgroundImage: 'url(/image/fond3.jpg)' }}>
//        <div className="flex flex-col lg:flex-row gap-5 max-w-4xl mx-auto mt-20 p-6 bg-white rounded">
     
//       <div className="w-full py-5">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Connexion</h2>
//         <form onSubmit={handleSubmit} className="space-y-4 px-2 sm:px-5">
//           <div>
//             <label htmlFor="" className="block text-base text-gray-500 sm:text-lg font-semibold">Email</label>
//             {/* <input
//               className="input h-10 w-full rounded-lg bg-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               name="email"
//               type="email"
//               onChange={handleChange}
//               placeholder="Email..."
//               required
//             /> */}
//             <div className="relative">
//         <FontAwesomeIcon 
//           icon={faUser} 
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
//         />
//         <input
//           name="email"
//           type="email"
//           onChange={handleChange}
//           placeholder="Email..."
//           required
//           className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
//         />
//       </div>
//           </div>
//           <div>
//             <label htmlFor="" className="block text-gray-500 sm:text-lg font-semibold">Mot de passe</label>
//             {/* <input
//               className="input h-10 w-full rounded-lg bg-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               name="password"
//               type="password"
//               onChange={handleChange}
//               placeholder="Mot de passe..."
//               required
//             /> */}
//              <div className="relative">
//         <FontAwesomeIcon 
//           icon={faLock} 
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
//         />
//         <input
//           name="password"
//           type="password"
//           onChange={handleChange}
//           placeholder="Mot de passe..."
//           required
//           className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
//         />
//       </div>
//           </div>
//           <div>
//             <button className="w-full bg-blue-500 text-white text-lg sm:text-xl font-semibold py-2 rounded hover:bg-blue-700">
//               Se connecter
//             </button>
//           </div>
//         </form>
//         <p className="mt-4 text-center text-sm sm:text-base">
//           Vous n'avez pas encore de compte ?{" "}
//           <Link to="/repetiteur/register" className="text-blue-500 hover:text-blue-700 hover:underline">
//             Inscrivez-vous ici
//           </Link>
//         </p>
//       </div>
//     </div>
//    </div>
//    </div>
//   );
  
// }

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "../api/axios";

export default function LoginRepetiteur() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

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
    <div>
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundImage: "url(/image/fond3.jpg)" }}
      >
        <div className="flex flex-col lg:flex-row gap-5 max-w-4xl mx-auto mt-20 p-6 bg-white rounded">
          <div className="w-full py-5">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Connexion</h2>
            <form onSubmit={handleSubmit} className="space-y-4 px-2 sm:px-5">
              <div>
                <label htmlFor="" className="block text-base text-gray-500 sm:text-lg font-semibold">
                  Email
                </label>
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
                  />
                  <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="Email..."
                    required
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="block text-gray-500 sm:text-lg font-semibold">
                  Mot de passe
                </label>
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
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
                  />
                </div>
              </div>
              <div>
                <button className="w-full bg-blue-500 text-white text-lg sm:text-xl font-semibold py-2 rounded hover:bg-blue-700">
                  Se connecter
                </button>
              </div>
            </form>
            <p className="mt-4 text-center text-sm sm:text-base">
              Vous n'avez pas encore de compte ?{" "}
              <Link
                to="/repetiteur/register"
                className="text-blue-500 hover:text-blue-700 hover:underline"
              >
                Inscrivez-vous ici
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
