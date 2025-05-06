// import React, { useState, useEffect } from 'react';

// const Creer_profil = () => {
//   const [clients, setClients] = useState([
//     {
//       id: 1,
//       name: 'Alexandre Martin',
//       email: 'alexandre.martin@example.com',
//       address: '12 Rue des Lilas, Paris',
//       registrationDate: '15/02/2023',
//     },
//     {
//       id: 2,
//       name: 'Élodie Dubois',
//       email: 'elodie.dubois@example.com',
//       address: '25 Avenue Victor Hugo, Lyon',
//       registrationDate: '22/03/2023',
//     },
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedClient, setSelectedClient] = useState(null);
//   const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [clientToDelete, setClientToDelete] = useState(null);
//   const [openDropdownId, setOpenDropdownId] = useState(null);

//   const toggleDropdown = (id) => {
//     setOpenDropdownId(openDropdownId === id ? null : id);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.relative')) {
//         setOpenDropdownId(null);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const filteredClients = clients.filter(
//     (client) =>
//       client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       client.address.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const showClientDetails = (client) => {
//     setSelectedClient(client);
//     setIsDetailModalOpen(true);
//   };

//   const showDeleteModal = (client) => {
//     setClientToDelete(client);
//     setIsDeleteModalOpen(true);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-2">Gestion des clients</h1>
//       <p className="text-gray-600 mb-6">Gérez les clients inscrits sur la plateforme</p>

//       <div className="mb-6 relative max-w-md">
//         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//           <i className="fas fa-search text-gray-400"></i>
//         </div>
//         <input
//           type="text"
//           className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           placeholder="Rechercher..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adresse</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date d'inscription</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredClients.map((client) => (
//                 <tr key={client.id} className="hover:bg-gray-50">
//                  <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
//                         <i className="fas fa-user text-blue-600"></i>
//                       </div>
//                       <div className="ml-4">
//                         <div className="text-sm font-medium text-gray-900">{client.name}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.email}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.address}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.registrationDate}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                     <div className="relative">
//                       <button
//                         onClick={() => toggleDropdown(client.id)}
//                         className="p-2 rounded-full hover:bg-gray-200"
//                       >
//                         <i className="fas fa-ellipsis-v text-gray-500"></i>
//                       </button>

//                       {openDropdownId === client.id && (
//                         <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
//                           <div className="py-1">
//                             <button
//                               onClick={() => showClientDetails(client)}
//                               className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                             >
//                               <i className="fas fa-eye mr-2 text-blue-500"></i>
//                               Voir détails
//                             </button>
//                             <button
//                               onClick={() => showDeleteModal(client)}
//                               className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
//                             >
//                               <i className="fas fa-trash mr-2"></i>
//                               Supprimer
//                             </button>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {isDetailModalOpen && selectedClient && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-4">
//                 <h3 className="text-lg font-medium text-gray-900">Détails du client</h3>
//                 <button
//                   onClick={() => setIsDetailModalOpen(false)}
//                   className="text-gray-400 hover:text-gray-500"
//                 >
//                   <i className="fas fa-times"></i>
//                 </button>
//               </div>
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Nom complet</h4>
//                   <p className="mt-1 text-sm text-gray-900">{selectedClient.name}</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Email</h4>
//                   <p className="mt-1 text-sm text-gray-900">{selectedClient.email}</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Adresse</h4>
//                   <p className="mt-1 text-sm text-gray-900">{selectedClient.address}</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Date d'inscription</h4>
//                   <p className="mt-1 text-sm text-gray-900">{selectedClient.registrationDate}</p>
//                 </div>
//               </div>
//               <div className="mt-6 flex justify-end">
//                 <button
//                   onClick={() => setIsDetailModalOpen(false)}
//                   className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
//                 >
//                   Fermer
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {isDeleteModalOpen && clientToDelete && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
//             <div className="p-6 text-center">
//               <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
//                 <i className="fas fa-exclamation-triangle text-red-600 text-xl"></i>
//               </div>
//               <h3 className="text-lg font-medium text-gray-900 mb-2">
//                 Supprimer {clientToDelete.name} ?
//               </h3>
//               <p className="text-sm text-gray-500 mb-6">
//                 Cette action est irréversible. Voulez-vous vraiment continuer ?
//               </p>
//               <div className="flex justify-center space-x-3">
//                 <button
//                   onClick={() => setIsDeleteModalOpen(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
//                 >
//                   Annuler
//                 </button>
//                 <button
//                   onClick={() => {
//                     setClients(clients.filter((c) => c.id !== clientToDelete.id));
//                     setIsDeleteModalOpen(false);
//                   }}
//                   className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700"
//                 >
//                   Confirmer
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Creer_profil;




// import { useState, useEffect } from "react";
// import axios from "../../api/axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { X } from "lucide-react";


// export default function Creer_profil() {
//       const [profil, setProfil] = useState({
//           nom: "",
//           age: "",
//           ville: "",
//           description: "",
//           disponibilites: [],
//           photo: null,
//           cours: [],
//           niveaux: [],
//       });

//       const [previewPhoto, setPreviewPhoto] = useState(null);
//       const [coursInput, setCoursInput] = useState("");
//       const [isLoading, setIsLoading] = useState(true);
//       const [isEditMode, setIsEditMode] = useState(false);

//       const parseJSONSafely = (data, fallback = []) => {
//           try {
//               return typeof data === "string" ? JSON.parse(data) : Array.isArray(data) ? data : fallback;
//           } catch {
//               return fallback;
//           }
//       };

//       useEffect(() => {
//             const fetchProfil = async () => {
//               try {
//                   setIsLoading(true);
//                   const response = await axios.get("http://localhost:8000/api/repetiteur/profil");
                 
//                   if (response.data) {
//                       setProfil({
//                           nom: response.data.nom || "",
//                           age: response.data.age || "",
//                           ville: response.data.ville || "",
//                           description: response.data.description || "",
//                           disponibilites: response.data.disponibilites || [],
//                           photo: null,
//                           cours: parseJSONSafely(response.data.cours),
//                           niveaux: parseJSONSafely(response.data.niveaux),
//                       });

//                       if (response.data.photo_url) {
//                           setPreviewPhoto(response.data.photo_url);
//                       }

//                       if (response.data.nom) {
//                           setIsEditMode(true);
//                       }
//                   }
//               } catch (error) {
//                   if (error.response?.status !== 404) {
//                       toast.error("Erreur lors du chargement du profil");
//                       console.error("Erreur:", error);
//                   }
//               } finally {
//                   setIsLoading(false);
//               }
//           };

//           fetchProfil();
//       }, []);

//       const handleChange = (e) => {
//           setProfil({ ...profil, [e.target.name]: e.target.value });
//       };

//       const handleDisponibilites = (e) => {
//           const { value, checked } = e.target;
//           setProfil(prev => ({
//               ...prev,
//               disponibilites: checked 
//                   ? [...prev.disponibilites, value] 
//                   : prev.disponibilites.filter(d => d !== value)
//           }));
//       };

//       const handleNiveaux = (e) => {
//           const { value, checked } = e.target;
//           setProfil(prev => ({
//               ...prev,
//               niveaux: checked 
//                   ? [...prev.niveaux, value] 
//                   : prev.niveaux.filter(n => n !== value)
//           }));
//       };

//       const handlePhotoChange = (e) => {
//           const file = e.target.files[0];
//           if (file) {
//               setProfil({ ...profil, photo: file });
//               setPreviewPhoto(URL.createObjectURL(file));
//           }
//       };

//       const handleCoursKeyDown = (e) => {
//           if (e.key === "Enter" && coursInput.trim()) {
//               e.preventDefault();
//               if (!profil.cours.includes(coursInput.trim())) {
//                   setProfil(prev => ({
//                       ...prev,
//                       cours: [...prev.cours, coursInput.trim()]
//                   }));
//               }
//               setCoursInput("");
//           }
//       };

//       const removeCours = (coursToRemove) => {
//           setProfil(prev => ({
//               ...prev,
//               cours: prev.cours.filter(c => c !== coursToRemove)
//           }));
//       };

//       const handleSubmit = async (e) => {
//           e.preventDefault();

//           try {
//               const formData = new FormData();

//               formData.append("nom", profil.nom);
//               formData.append("age", profil.age);
//               formData.append("ville", profil.ville);
//               formData.append("description", profil.description);

//               if (profil.photo) {
//                   formData.append("photo", profil.photo);
//               } else if (!isEditMode) {
//                   throw new Error("Une photo est requise");
//               }

//               profil.disponibilites.forEach(d => formData.append("disponibilites[]", d));
//               profil.cours.forEach(c => formData.append("cours[]", c));
//               profil.niveaux.forEach(n => formData.append("niveaux[]", n));

//               const url = "/repetiteur/profil";
//               const method = isEditMode ? "put" : "post";

//               await axios[method](url, formData, {
//                   headers: {
//                       "Content-Type": "multipart/form-data"
//                   }
//               });

//               toast.success(`Profil ${isEditMode ? 'mis à jour' : 'créé'} avec succès`);

//               if (!isEditMode) {
//                   setIsEditMode(true);
//               }

//           } catch (error) {
//               if (error.response?.status === 422) {
//                   const errors = error.response.data.errors;
//                   const messages = Object.values(errors).flat().join("\n");
//                   toast.error(messages);
//               } else {
//                   toast.error(error.response?.data?.message || error.message || "Une erreur est survenue");
//               }
//           }

          
        
//       };
  
//       const handleUpdate = async () => {
//         const formData = new FormData();
    
//         formData.append('nom', profil.nom);
//         formData.append('age', profil.age);
//         formData.append('ville', profil.ville);
//         formData.append('description', profil.description);
//         if (profil.photo) formData.append('photo', profil.photo);
    
//         profil.cours.forEach(c => formData.append('cours[]', c));
//         profil.niveaux.forEach(n => formData.append('niveaux[]', n));
//         profil.disponibilites.forEach(d => formData.append('disponibilites[]', d));
    
//         try {
//             const response = await axios.put('http://localhost:8000/api/repetiteur/profil', formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                 },
//             });
//             alert("Profil mis à jour avec succès !");
//             console.log(response.data);
//         } catch (error) {
//             console.error("Erreur de mise à jour :", error);
//             alert(error?.response?.data?.message || "Erreur lors de la mise à jour");
//         }
//     };
    
             

//     const handleDelete = async () => {
//       if (!window.confirm("Es-tu sûr de vouloir supprimer ton profil ? Cette action est irréversible.")) return;
    
//       try {
//         const response = await axios.delete('http://localhost:8000/api/repetiteur/profil', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
    
//         alert('Profil supprimé avec succès !');
//         // Redirection ou rafraîchissement
//         window.location.href = '/repetiteur/creer-profil'; // ou une autre page
//       } catch (error) {
//         console.error('Erreur de suppression :', error);
//         alert(error?.response?.data?.message || 'Erreur lors de la suppression');
//       }
//     };

//     if (isLoading) {
//         return <div className="text-center py-8">Chargement...</div>;
//     }

//     return (
//         <div className="bg-gradient-to-t from-blue-500 via-blue-300 ">
          
//             <div className="max-w-6xl py-20 mx-auto p-6 grid md:grid-cols-2 gap-10">
//                 {/* Formulaire */}
//                 <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 space-y-4">
//                     <h2 className="text-2xl font-bold text-center mb-4">
//                         {isEditMode ? "Modifier mon profil" : "Créer mon profil"}
//                     </h2>

//                     {/* Photo */}
//                     <div>
//                         <label className="block text-lg font-medium mb-2">Photo {!isEditMode && "*"}</label>
//                         <input
//                             type="file"
//                             accept="image/*"
//                             onChange={handlePhotoChange}
//                             className="w-full  rounded-lg p-2 bg-gray-100"
//                             required={!isEditMode}
//                         />
//                         {previewPhoto && (
//                             <div className="mt-2">
//                                 <img 
//                                     src={previewPhoto} 
//                                     alt="Preview" 
//                                     className="w-20 h-20 rounded-full object-cover"
//                                 />
//                             </div>
//                         )}
//                     </div>

//                     {/* Champs texte */}
//                     {["nom", "age", "ville"].map((field) => (
//                         <div key={field}>
//                             <label className="block font-medium mb-2 capitalize">{field} </label>
//                             <input
//                                 type={field === "age" ? "number" : "text"}
//                                 name={field}
//                                 value={field === "age" && profil[field] === "" ? "" : profil[field]}
//                                 onChange={(e) => {
//                                     const value = field === "age" 
//                                         ? e.target.value === "" 
//                                             ? "" 
//                                             : parseInt(e.target.value, 10)
//                                         : e.target.value;

//                                     handleChange({
//                                         target: {
//                                             name: e.target.name,
//                                             value: value
//                                         }
//                                     });
//                                 }}
//                                 className="input w-full text-lg rounded-lg p-2 bg-gray-100"
//                                 required
//                                 min={field === "age" ? 18 : undefined}
//                                 max={field === "age" ? 50 : undefined}
//                             />
//                         </div>
//                     ))}

//                     {/* Description */}
//                     <div>
//                         <label className="block text-lg font-medium mb-2">Description </label>
//                         <textarea
//                             name="description"
//                             value={profil.description}
//                             onChange={handleChange}
//                             className="textarea w-full rounded-lg p-2 bg-gray-100"
//                             rows={4}
//                             required
//                         />
//                     </div>

//                     {/* Disponibilités */}
//                     <div>
//                         <label className="block text-lg font-medium mb-2">Disponibilités (2-3 jours) </label>
//                         <div className="flex flex-wrap gap-3">
//                             {["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"].map((day) => (
//                                 <label key={day} className="inline-flex items-center space-x-2">
//                                     <input
//                                         type="checkbox"
//                                         value={day}
//                                         checked={profil.disponibilites.includes(day)}
//                                         onChange={handleDisponibilites}
//                                         className="rounded"
//                                     />
//                                     <span className="capitalize">{day}</span>
//                                 </label>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Cours */}
//                     <div>
//                         <label className="block  text-lg font-medium mb-2">Cours enseignés </label>
//                         <input
//                             type="text"
//                             value={coursInput}
//                             onChange={(e) => setCoursInput(e.target.value)}
//                             onKeyDown={handleCoursKeyDown}
//                             placeholder="Ajouter une matière (Entrée pour valider)"
//                             className="input w-full"
//                         />
//                         <div className="flex flex-wrap gap-2 mt-2">
//                             {profil.cours.map((c) => (
//                                 <span key={c} className="badge bg-green-100 text-green-800">
//                                     {c}
//                                     <button
//                                         type="button"
//                                         onClick={() => removeCours(c)}
//                                         className="ml-2 text-red-500"
//                                     >
//                                         <X size={14} />
//                                     </button>
//                                 </span>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Niveaux */}
//                     <div>
//                         <label className="block text-lg font-medium mb-2">Niveaux enseignés </label>
//                         <div className="flex flex-wrap gap-3">
//                             {["6e", "5e", "4e", "3e", "2nde", "1re", "terminale"].map((niveau) => (
//                                 <label key={niveau} className="inline-flex items-center space-x-2">
//                                     <input
//                                         type="checkbox"
//                                         value={niveau}
//                                         checked={profil.niveaux.includes(niveau)}
//                                         onChange={handleNiveaux}
//                                         className="rounded"
//                                     />
//                                     <span>{niveau}</span>
//                                 </label>
//                             ))}
//                         </div>
//                     </div>

//                     <button  onClick={handleUpdate} type="submit" className="btn-primary w-full">
//                         {isEditMode ? "Mettre à jour" : "Créer"} mon profil
//                     </button>
//                     <button onClick={handleDelete} className="btn btn-danger">
//                     Supprimer mon profil
//                     </button>


//                 </form>

               
//             </div>

//     </div>
//             );
// }

// {/* <div className="flex justify-between px-10 ">
// <div className="mt-8">
//     <h3 className="text-3xl text-blue-600  font-bold">{profil.nom || "Nom non renseigné"}</h3>
//     <p className="text-2xl font-semibold">{profil.age ? `${profil.age} ans` : "Âge non renseigné"}</p>
//     <p className="text-2xl font-semibold">{profil.ville || "Ville non renseignée"}</p>
// </div>
// {previewPhoto ? (
//         <img src={previewPhoto} alt="Preview" className="w-50 h-50 object-cover" />
//     ) : (
//         <div className="w-50 h-50 mx-auto bg-gray-200 flex items-center justify-center">
//             <span className="text-gray-500">Pas de photo</span>
//         </div>
//     )}
// </div>
// <p className="font-bold text-2xl py-4">A PROPOS DE MOI</p>
// <div className="flex items-center mt-4 rounded-xl shadow-lg px-2">
// <img src="/image/3959384.jpg" alt="" className="w-70 h-70" />
// <p className="text-sm">
// {profil.description || "Aucune description fournie"}
// </p>
// </div>


// // {/* Disponibilités */}
// // {profil.disponibilites.length > 0 ? (
// // <div className="text-left  px-10">
// //     <p className="font-semibold">Disponibilités :</p>
// //     <ul className="list-disc pl-5">
// //         {profil.disponibilites.map((day) => (
// //             <li key={day} className="capitalize">{day}</li>
// //         ))}
// //     </ul>
// // </div>
// // ) : (
// // <p className="text-gray-500">Aucune disponibilité renseignée</p>
// // )}

// // {/* Cours */}
// // {profil.cours.length > 0 ? (
// // <div className="text-left  px-10">
// //     <p className="font-semibold">Cours enseignés :</p>
// //     <ul className="list-disc pl-5">
// //         {profil.cours.map((cours) => (
// //             <li key={cours}>{cours}</li>
// //         ))}
// //     </ul>
// // </div>
// // ) : (
// // <p className="text-gray-500">Aucun cours renseigné</p>
// // )}

// // {/* Niveaux */}
// // {profil.niveaux.length > 0 ? (
// // <div className="text-left  px-10">
// //     <p className="font-semibold">Niveaux enseignés :</p>
// //     <ul className="list-disc pl-5">
// //         {profil.niveaux.map((niveau) => (
// //             <li key={niveau}>{niveau}</li>
// //         ))}
// //     </ul>
// // </div>
// // ) : (
// // <p className="text-gray-500">Aucun niveau renseigné</p>
// // )} */}

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProfilForm({ mode = "create", profilData = null }) {
  const [form, setForm] = useState({
    photo: null,
    nom: "",
    age: "",
    ville: "",
    description: "",
    disponibilites: [],
    cours: [],
    niveaux: [],
    prix: "",
    statut: "actif",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (mode === "edit" && profilData) {
      setForm({
        ...profilData,
        photo: null, // reset file input
      });
    }
  }, [mode, profilData]);

  const joursDisponibles = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche",
  ];

  const niveauxDisponibles = [
    "6e",
    "5e",
    "4e",
    "3e",
    "2nde",
    "1re",
    "terminale",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({
      ...prev,
      photo: e.target.files[0],
    }));
  };

  const handleCheckboxChange = (e, name) => {
    const { value, checked } = e.target;
    setForm((prev) => {
      let updated = [...prev[name]];
      if (checked) {
        updated.push(value);
      } else {
        updated = updated.filter((item) => item !== value);
      }
      return {
        ...prev,
        [name]: updated,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrors({});

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item, index) =>
          formData.append(`${key}[${index}]`, item)
        );
      } else if (value !== null) {
        formData.append(key, value);
      }
    });

    try {
      const token = localStorage.getItem("token"); // assuming auth is handled

      const response =
        mode === "create"
          ? await axios.post("/api/repetiteur/profil", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
            })
          : await axios.post("/api/repetiteur/profil", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
            });

      setMessage(response.data.message);
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setErrors(err.response.data.errors);
      } else {
        setMessage("Une erreur est survenue");
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">
        {mode === "edit" ? "Modifier" : "Créer"} le Profil
      </h2>

      {message && <div className="mb-4 text-green-600">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block"
        />
        {errors.photo && <p className="text-red-500">{errors.photo[0]}</p>}

        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={form.nom}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.nom && <p className="text-red-500">{errors.nom[0]}</p>}

        <input
          type="number"
          name="age"
          placeholder="Âge"
          value={form.age}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.age && <p className="text-red-500">{errors.age[0]}</p>}

        <input
          type="text"
          name="ville"
          placeholder="Ville"
          value={form.ville}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.ville && <p className="text-red-500">{errors.ville[0]}</p>}

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description[0]}</p>
        )}

        <fieldset>
          <legend className="font-semibold">Disponibilités</legend>
          <div className="flex flex-wrap gap-2">
            {joursDisponibles.map((jour) => (
              <label key={jour} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={jour}
                  checked={form.disponibilites.includes(jour)}
                  onChange={(e) => handleCheckboxChange(e, "disponibilites")}
                />
                {jour}
              </label>
            ))}
          </div>
        </fieldset>
        {errors.disponibilites && (
          <p className="text-red-500">{errors.disponibilites[0]}</p>
        )}

        <input
          type="text"
          placeholder="Cours (séparés par virgule)"
          value={form.cours.join(",")}
          onChange={(e) =>
            setForm({ ...form, cours: e.target.value.split(",") })
          }
          className="w-full border p-2 rounded"
        />
        {errors.cours && <p className="text-red-500">{errors.cours[0]}</p>}

        <fieldset>
          <legend className="font-semibold">Niveaux</legend>
          <div className="flex flex-wrap gap-2">
            {niveauxDisponibles.map((niv) => (
              <label key={niv} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={niv}
                  checked={form.niveaux.includes(niv)}
                  onChange={(e) => handleCheckboxChange(e, "niveaux")}
                />
                {niv}
              </label>
            ))}
          </div>
        </fieldset>
        {errors.niveaux && (
          <p className="text-red-500">{errors.niveaux[0]}</p>
        )}

        <input
          type="number"
          name="prix"
          placeholder="Prix"
          value={form.prix}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.prix && <p className="text-red-500">{errors.prix[0]}</p>}

        <select
          name="statut"
          value={form.statut}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="actif">Actif</option>
          <option value="inactif">Inactif</option>
        </select>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {mode === "edit" ? "Mettre à jour" : "Créer"}
        </button>
      </form>
    </div>
  );
}
