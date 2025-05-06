// import React, { useState, useEffect } from 'react';

// const Rendez_vous = () => {
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

// export default Rendez_vous;

// import React, { useEffect, useState } from 'react';
// import api from '../../api/axios'; // adapte si ton fichier axios.js est ailleurs
// import CoursForm from '../../components/CoursForm'; // adapte si besoin

// const Rendez_vous = () => {
//   const [cours, setCours] = useState([]);
//   const [search, setSearch] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     fetchCours();
//   }, []);

//   const fetchCours = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await api.get('/cours', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setCours(res.data);
//     } catch (err) {
//       console.error('Erreur chargement des cours', err);
//     }
//   };

//   const handleSubmit = async (data) => {
//     setIsSubmitting(true);
//     try {
//       const token = localStorage.getItem("token");
//       await api.post('/cours', data, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       fetchCours();
//       setIsModalOpen(false);
//     } catch (err) {
//       console.error("Erreur d'ajout", err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // const filteredCours = cours.filter((c) =>
//   //   c.matiere.toLowerCase().includes(search.toLowerCase())
//   // );
//   const filteredCours = cours.filter((c) =>
//     (c.matiere || '').toLowerCase().includes(search.toLowerCase())
//   );
  

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Mes Rendez-vous</h1>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           + Ajouter un rendez-vous
//         </button>
//       </div>

//       <input
//         type="text"
//         placeholder="Rechercher une matière..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="w-full max-w-md mb-4 p-2 border rounded shadow-sm"
//       />

//       <div className="bg-white rounded shadow overflow-auto">
//         <table className="min-w-full divide-y divide-gray-200 text-sm">
//           <thead className="bg-gray-50 text-gray-500">
//             <tr>
//             <th className="p-3 text-left">Apprenant</th>
//               <th className="p-3 text-left">Matière</th>
//               <th className="p-3 text-left">Jour</th>
//               <th className="p-3 text-left">Heure</th>
//               <th className="p-3 text-left">Statut</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {filteredCours.map((c) => (
//               <tr key={c.id} className="hover:bg-gray-50">
//                  <td className="p-3">{c.name}</td>
//                 <td className="p-3">{c.matieres}</td>
//                 <td className="p-3">{c.jours}</td>
//                 <td className="p-3">{c.heure_debut}-{c.heure_fin}</td>
//                 <td className="p-3">
//                   {c.statut === 'termine' ? (
//                     <span className="text-green-600 font-semibold">Terminé</span>
//                   ) : (
//                     <span className="text-yellow-600 font-semibold">En cours</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal ajout cours */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center p-4">
//           <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
//             <div className="flex justify-between items-center px-6 py-4 border-b">
//               <h2 className="text-xl font-bold">Nouveau Rendez-vous</h2>
//               <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
//                 ✖
//               </button>
//             </div>
//             <div className="p-6">
//               <CoursForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rendez_vous;



import React, { useEffect, useState } from 'react';
import api from '../../api/axios'; // adapte si ton fichier axios.js est ailleurs
import CoursForm from '../../components/CoursForm';
import axios from 'axios';

const Rendez_vous = () => {
  const [cours, setCours] = useState([]);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentCours, setCurrentCours] = useState(null);

  useEffect(() => {
    fetchCours();
  }, []);

  const fetchCours = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get('/cours', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCours(res.data);
    } catch (err) {
      console.error('Erreur chargement des cours', err);
    }
  };

  const handleSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem("token");
      if (currentCours) {
        await axios.patch(`http://localhost:8000/api/cours/${currentCours.id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post("http://localhost:8000/api/cours", data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      fetchCours();
      setCurrentCours(null);
      setIsModalOpen(false);
    } catch (err) {
      console.error("Erreur d'ajout/modif", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteCours = async (id) => {
    const token = localStorage.getItem("token");
    if (window.confirm("Supprimer ce cours ?")) {
      try {
        await axios.delete(`http://localhost:8000/api/cours/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchCours();
      } catch (err) {
        console.error("Erreur suppression cours", err);
      }
    }
  };

    const handleToggleCours = async (id) => {
      console.log("Toggle cours appelé pour l'id :", id);
      const token = localStorage.getItem("token");
    
      // On vérifie si le cours est terminé ou non et on envoie le bon statut
      const coursToUpdate = coursList.find(cours => cours.id === id);
      const newStatut = coursToUpdate.statut === 'Termine' ? 'en_cours' : 'termine';
      console.log("Envoi PATCH avec statut :", newStatut);
      // const newStatut = coursToUpdate.completed ? 'en_cours' : 'termine';  // Change 'completed' to 'statut' if you have a "statut" field
    
      try {
        const response = await axios.patch(`http://localhost:8000/api/cours/${id}/statut`, { statut: newStatut }, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Réponse du PATCH:", response.data);
        fetchCours();  // Rechargement de la liste des cours
      } catch (err) {
        // console.error("Erreur mise à jour statut cours", err);
        console.error("Erreur mise à jour statut cours :", err?.response || err.message || err);
      }
    };

  // const handleToggleCours = async (id) => {
  //   const token = localStorage.getItem("token");
  //   const coursToUpdate = cours.find(c => c.id === id);
  //   const newStatut = coursToUpdate.statut === 'termine' ? 'en_cours' : 'termine';

  //   try {
  //     await axios.patch(`http://localhost:8000/api/cours/${id}/statut`, { statut: newStatut }, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     fetchCours();
  //   } catch (err) {
  //     console.error("Erreur mise à jour statut cours", err);
  //   }
  // };

  const handleEditCours = (cours) => {
    setCurrentCours(cours);
    setIsModalOpen(true);
  };

  const filteredCours = cours.filter((c) =>
    (c.matiere || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Mes Rendez-vous</h1>
        <button
          onClick={() => {
            setCurrentCours(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Ajouter un rendez-vous
        </button>
      </div>

      <input
        type="text"
        placeholder="Rechercher une matière..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mb-4 p-2 border rounded shadow-sm"
      />

      <div className="bg-white rounded shadow overflow-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="p-3 text-left">Apprenant</th>
              <th className="p-3 text-left">Matière</th>
              <th className="p-3 text-left">Jour</th>
              <th className="p-3 text-left">Heure</th>
              <th className="p-3 text-left">Statut</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredCours.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.matieres}</td>
                <td className="p-3">{c.jours}</td>
                <td className="p-3">{c.heure_debut} - {c.heure_fin}</td>
                <td className="p-3">ajouter statut</td>
                <td className="p-3 relative">
                  <details className="relative">
                    <summary className="cursor-pointer text-blue-600 hover:underline">
                      Actions
                    </summary>
                    <div className="absolute z-10 bg-white shadow-md rounded border mt-1 w-40">
                      <button
                        onClick={() => handleToggleCours(c.id)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Modifier statut
                      </button>
                      <button
                        onClick={() => handleEditCours(c)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDeleteCours(c.id)}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                      >
                        Supprimer
                      </button>
                    </div>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal ajout/modif cours */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h2 className="text-xl font-bold">
                {currentCours ? "Modifier le Rendez-vous" : "Nouveau Rendez-vous"}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                ✖
              </button>
            </div>
            <div className="p-6">
              <CoursForm onSubmit={handleSubmit} isSubmitting={isSubmitting} defaultData={currentCours} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rendez_vous;
