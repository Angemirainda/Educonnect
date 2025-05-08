
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar1";
// import { toast } from "react-toastify";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
// import axios from "../api/axios"

// const RepetiteurDetail = () => {
//   const { id } = useParams();
//   const [repetiteur, setRepetiteur] = useState(null);
//   const [showModal, setShowModal] = useState(false);
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
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));
//       toast.success(`Bienvenue ${user.name} !`);
//       setShowModal(false); // Fermer la modal après connexion
//       navigate("/client/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.message || "Erreur lors de la connexion");
//     }
//   };

//   useEffect(() => {
//     fetch(`http://127.0.0.1:8000/api/profils-repetiteurs/${id}`)
//       .then((response) => response.json())
//       .then((data) => setRepetiteur(data))
//       .catch((error) => console.error("Erreur lors du chargement :", error));
//   }, [id]);

//   if (!repetiteur) {
//     return <div>Chargement...</div>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-20 mx-auto px-4 py-8">
//         {/* Profile Card */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="relative mb-4 md:mb-0 md:mr-6">
//                 <img
//                   src={repetiteur.photo ? `http://localhost:8000/storage/${repetiteur.photo}` : '/default-avatar.png'}
//                   alt={repetiteur.nom}
//                   className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md object-cover"
//                 />
//               </div>
//               <div className="text-center md:text-left">
//                 <h2 className="text-2xl font-bold">{repetiteur.nom}</h2>
//                 <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
//                   <span className="px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20 text-gray-500">
//                     <i className="fas fa-map-marker-alt mr-1"></i> {repetiteur.ville || 'Ville non renseignée'}
//                   </span>
//                   <span className="px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20 text-gray-500">
//                     <i className="fas fa-money-bill-wave"></i> {repetiteur.prix || '0'} FCFA
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Profile Content */}
//           <div className="p-6">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               {/* Personal Information */}
//               <div className="lg:col-span-1">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
//                   <i className="fas fa-user-circle mr-2 text-blue-500"></i> Informations Personnelles
//                 </h3>
//                 <div className="space-y-4">
//                   <div>
//                     <h4 className="text-sm font-medium text-gray-500">Âge :</h4>
//                     <p className="mt-1 text-gray-900">{repetiteur.age || 'Non renseigné'} ans</p>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-medium text-gray-500">Ville :</h4>
//                     <p className="mt-1 text-gray-900">{repetiteur.ville || 'Non renseignée'}</p>
//                   </div>
//                 </div>

//                  {/* Bouton pour ouvrir la modal */}
//                 <button
//                   onClick={() => setShowModal(true)}
//                   className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition mt-0"
//                 >
//                 Entrez en Contact
//                 </button>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-8">
//             {/* Bouton de fermeture */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
//             >
//               ✕
//             </button>

//             {/* Formulaire */}
//             <div className="py-2">
//               <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
//                 Connexion
//               </h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-lg text-gray-600 font-semibold mb-2"
//                   >
//                     Email
//                   </label>
//                   <div className="relative">
//                     <FontAwesomeIcon
//                       icon={faEnvelope}
//                       className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"
//                     />
//                     <input
//                       name="email"
//                       onChange={handleChange}
//                       type="email"
//                       placeholder="Email..."
//                       required
//                       className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block text-lg text-gray-600 font-semibold mb-2"
//                   >
//                     Mot de passe
//                   </label>
//                   <div className="relative">
//                     <FontAwesomeIcon
//                       icon={faLock}
//                       className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"
//                     />
//                     <input
//                       name="password"
//                       onChange={handleChange}
//                       type="password"
//                       placeholder="Mot de passe..."
//                       required
//                       className="focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-lg">
//                     Se connecter
//                   </button>
//                 </div>
//               </form>
//               <p className="mt-6 text-center text-gray-600">
//                 Vous n'avez pas encore de compte ?{" "}
//                 <Link
//                   to="/client/register"
//                   className="text-blue-600 hover:underline font-semibold"
//                 >
//                   Inscrivez-vous ici
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       )}


               
//               </div>
              

//               {/* Professional Information */}
//               <div className="lg:col-span-2">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
//                   <i className="fas fa-briefcase mr-2 text-blue-500"></i> Informations Professionnelles
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <h4 className="text-sm font-medium text-gray-500">Tarif des cours :</h4>
//                     <p className="mt-1 text-gray-900">{repetiteur.prix || 'Non renseigné'} FCFA</p>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-medium text-gray-500">Niveau enseigné :</h4>
//                     <p className="mt-1 text-gray-900">{repetiteur.niveaux?.join(', ') || 'Non renseigné'}</p>
//                   </div>
//                   <div className="md:col-span-2">
//                     <h4 className="text-sm font-medium text-gray-500">Matières enseignées :</h4>
//                     <div className="mt-1 flex flex-wrap gap-2">
//                       {repetiteur.cours?.map((subject, index) => (
//                         <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center">
//                           <i className="fas fa-book mr-1"></i> {subject}
//                         </span>
//                       )) || <span className="text-gray-400">Non renseigné</span>}
//                     </div>
//                   </div>
//                   <div className="md:col-span-2">
//                     <h4 className="text-sm font-medium text-gray-500">Disponibilités :</h4>
//                     <div className="mt-1 p-3 rounded-md">
//                       {repetiteur.disponibilites?.map((line, i) => (
//                         <p key={i} className="text-gray-900 flex items-start">
//                           <i className="fas fa-clock mr-2 mt-1 text-blue-400"></i> {line}
//                         </p>
//                       )) || <span className="text-gray-400">Non renseigné</span>}
//                     </div>
//                   </div>
//                   <div className="md:col-span-2">
//                     <h4 className="text-sm font-medium text-gray-500">Description :</h4>
//                     <div className="mt-1 p-3  rounded-md">
//                       <p className="text-gray-900">{repetiteur.description || 'Non renseigné'}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RepetiteurDetail;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar1";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import LoginModalButton from "../components/modalLogin";
import axios from "../api/axios"

const RepetiteurDetail = () => {
  const { id } = useParams();
  const [repetiteur, setRepetiteur] = useState(null);
 
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
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success(`Bienvenue ${user.name} !`);
      setShowModal(false); // Fermer la modal après connexion
      navigate("/client/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Erreur lors de la connexion");
    }
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/profils-repetiteurs/${id}`)
      .then((response) => response.json())
      .then((data) => setRepetiteur(data))
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, [id]);

  if (!repetiteur) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mt-20 mx-auto px-4 py-8">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative mb-4 md:mb-0 md:mr-6">
                <img
                  src={repetiteur.photo ? `http://localhost:8000/storage/${repetiteur.photo}` : '/default-avatar.png'}
                  alt={repetiteur.nom}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold">{repetiteur.nom}</h2>
                <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20 text-gray-500">
                    <i className="fas fa-map-marker-alt mr-1"></i> {repetiteur.ville || 'Ville non renseignée'}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20 text-gray-500">
                    <i className="fas fa-money-bill-wave"></i> {repetiteur.prix || '0'} FCFA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Personal Information */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  <i className="fas fa-user-circle mr-2 text-blue-500"></i> Informations Personnelles
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Âge :</h4>
                    <p className="mt-1 text-gray-900">{repetiteur.age || 'Non renseigné'} ans</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Ville :</h4>
                    <p className="mt-1 text-gray-900">{repetiteur.ville || 'Non renseignée'}</p>
                  </div>
                </div>
                <LoginModalButton />
               
              </div>
              

              {/* Professional Information */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  <i className="fas fa-briefcase mr-2 text-blue-500"></i> Informations Professionnelles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Tarif des cours :</h4>
                    <p className="mt-1 text-gray-900">{repetiteur.prix || 'Non renseigné'} FCFA</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Niveau enseigné :</h4>
                    <p className="mt-1 text-gray-900">{repetiteur.niveaux?.join(', ') || 'Non renseigné'}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-medium text-gray-500">Matières enseignées :</h4>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {repetiteur.cours?.map((subject, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center">
                          <i className="fas fa-book mr-1"></i> {subject}
                        </span>
                      )) || <span className="text-gray-400">Non renseigné</span>}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-medium text-gray-500">Disponibilités :</h4>
                    <div className="mt-1 p-3 rounded-md">
                      {repetiteur.disponibilites?.map((line, i) => (
                        <p key={i} className="text-gray-900 flex items-start">
                          <i className="fas fa-clock mr-2 mt-1 text-blue-400"></i> {line}
                        </p>
                      )) || <span className="text-gray-400">Non renseigné</span>}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-medium text-gray-500">Description :</h4>
                    <div className="mt-1 p-3  rounded-md">
                      <p className="text-gray-900">{repetiteur.description || 'Non renseigné'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepetiteurDetail;

