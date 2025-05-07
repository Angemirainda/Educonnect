// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from '../../api/axios';

// const Dashboard = () => {
//   const [students, setStudents] = useState([]);
//   const [clients, setClients] = useState([]); // Liste des clients
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     matieres: [],
//     jours: [],
//     heure_debut: '',
//     heure_fin: '',
//     id_client: '',
//   });

//   // Déclaration des états pour les statistiques
//   const [totalHeures, setTotalHeures] = useState(0);
//   const [totalEtudiants, setTotalEtudiants] = useState(0);
  

//   useEffect(() => {
//     // Fonction pour récupérer les statistiques depuis l'API
//     const fetchStatistics = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/stat', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });

//         // Si la réponse est correcte, on met à jour les états
//         setTotalHeures(response.data.total_heures);
//         setTotalEtudiants(response.data.total_etudiants);
//         setStudents(response.data.cours);  // Je suppose que tu veux également afficher les cours dans le tableau "students"
//       } catch (error) {
//         console.error('Erreur de récupération des statistiques', error);
//       }
//     };

//     fetchStatistics();
//   }, []); // Le tableau vide signifie que l'effet se déclenche une seule fois à l'initialisation


//   const dropdownRefs = useRef([]);
//    // On crée un état pour stocker les données des statistiques
//   const navigate = useNavigate();

  

//   // Récupérer les cours
 
//  useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get('/cours');
//         setStudents(response.data);
//       } catch (error) {
//         console.error('Erreur de récupération des cours', error);
//       }
//     };
//     fetchCourses();
//   }, []);

  
//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await axios.get('/clients');
//         console.log("Clients récupérés :", response.data);
//         setClients(response.data.clients); 
//       } catch (error) {
//         console.error('Erreur de récupération des clients', error);
//       }
//     };
  
//     fetchClients();
//   }, []);
  

//   // Fermer les dropdowns
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         openDropdown !== null &&
//         dropdownRefs.current[openDropdown] &&
//         !dropdownRefs.current[openDropdown].contains(event.target)
//       ) {
//         setOpenDropdown(null);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [openDropdown]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (
//       !formData.name ||
//       !formData.matieres.length ||
//       !formData.jours.length ||
//       !formData.heure_debut ||
//       !formData.heure_fin ||
//       !formData.id_client
//     ) {
//       alert('Tous les champs obligatoires doivent être remplis.');
//       return;
//     }

//     const formattedData = {
//       ...formData,
//       matieres: formData.matieres,
//       jours: formData.jours,
//     };

//     try {
//       const response = await axios.post('/cours', formattedData);
//       setStudents([...students, response.data]);
//       setFormData({
//         name: '',
//         matieres: [],
//         jours: [],
//         heure_debut: '',
//         heure_fin: '',
//         id_client: '',
//       });
//     } catch (error) {
//       console.error('Erreur d\'ajout du cours', error.response?.data || error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/cours/${id}`);
//       setStudents(students.filter((student) => student.id !== id));
//     } catch (error) {
//       console.error('Erreur de suppression du cours', error);
//     }
//   };

//   const toggleDropdown = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//       <div className="max-w-6xl mx-auto">
//         <header className="mb-8">
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Bienvenue dans votre espace répétiteur</h1>
//         </header>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="flex items-center">
//           <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
//             <i className="fas fa-calendar-alt fa-lg"></i>
//           </div>
//           <div>
//             <p className="text-gray-500 text-sm">Rendez-vous de ce mois</p>
//             <p className="text-2xl font-bold">{students.length}</p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="flex items-center">
//           <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
//             <i className="fas fa-clock fa-lg"></i>
//           </div>
//           <div>
//             <p className="text-gray-500 text-sm">Heures de cours par semaine</p>
//             <p className="text-2xl font-bold">{totalHeures}h</p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="flex items-center">
//           <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
//             <i className="fas fa-users fa-lg"></i>
//           </div>
//           <div>
//             <p className="text-gray-500 text-sm">Nombre Étudiants</p>
//             <p className="text-2xl font-bold">{totalEtudiants}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="bg-white rounded-lg shadow p-6">
//             <h2 className="text-xl font-semibold mb-4 text-gray-800">Ajouter un rendez-vous</h2>

//             <form onSubmit={handleSubmit}>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Nom du cours</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Nom du cours"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Étudiant</label>
//                   <select
//                     value={formData.id_client}
//                     onChange={(e) => setFormData({ ...formData, id_client: e.target.value })}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="">-- Sélectionner un étudiant --</option>
//                     {clients.map((client) => (
//                       <option key={client.id} value={client.id}>
//                         {client.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Matière</label>
//                   <input
//                     type="text"
//                     name="matieres"
//                     value={formData.matieres.join(', ')}
//                     onChange={(e) => setFormData({ ...formData, matieres: e.target.value.split(',').map(m => m.trim()) })}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Ex: chimie, français"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Jour(s)</label>
//                   <input
//                     type="text"
//                     name="jours"
//                     value={formData.jours.join(', ')}
//                     onChange={(e) => setFormData({ ...formData, jours: e.target.value.split(',').map(j => j.trim()) })}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Ex: lundi, mardi"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Heure de début</label>
//                   <input
//                     type="text"
//                     name="heure_debut"
//                     value={formData.heure_debut}
//                     onChange={(e) => setFormData({ ...formData, heure_debut: e.target.value })}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Ex: 12:30"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Heure de fin</label>
//                   <input
//                     type="text"
//                     name="heure_fin"
//                     value={formData.heure_fin}
//                     onChange={(e) => setFormData({ ...formData, heure_fin: e.target.value })}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="Ex: 14:30"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200 flex items-center justify-center"
//                 >
//                   <i className="fas fa-plus-circle mr-2"></i> Ajouter le rendez-vous
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Affichage des rendez-vous */}
//           <div className="bg-white rounded-lg shadow p-6">
//             <h2 className="text-xl font-semibold mb-4 text-gray-800">Mes rendez-vous</h2>
//             <div className="space-y-4">
//               {students.map(student => (
//                 <div key={student.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition duration-150">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="font-medium text-gray-900">{student.name}</h3>
//                       <p className="text-sm text-gray-600"><i className="fas fa-book mr-2 text-blue-500"></i>{JSON.parse(student.matieres).join(', ')}</p>
//                       <p className="text-sm text-gray-600"><i className="fas fa-calendar-day mr-2 text-green-500"></i>{JSON.parse(student.jours).join(', ')} </p>
//                       <p className="text-sm text-gray-600"> <i className="fas fa-clock fa-lg mr-2 text-purple-500 "></i> {student.heure_debut} - {student.heure_fin}</p>
//                     </div>
//                     <div className="relative" ref={el => dropdownRefs.current[student.id] = el}>
//                       <button onClick={() => toggleDropdown(student.id)} className="text-gray-500 hover:text-gray-700">
//                         <i className="fas fa-ellipsis-v"></i>
//                       </button>
//                       {openDropdown === student.id && (
//                         <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
//                           <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
//                             <i className="fas fa-edit mr-2 text-blue-500"></i> Modifier
//                           </button>
//                           <button
//                             onClick={() => handleDelete(student.id)}
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                           >
//                             <i className="fas fa-trash-alt mr-2 text-red-500"></i> Supprimer
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [clients, setClients] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    matieres: [],
    jours: [],
    heure_debut: '',
    heure_fin: '',
    id_client: '',
  });
  const [editCourse, setEditCourse] = useState(null); // État pour le cours en cours de modification
  const dropdownRefs = useRef([]);
  const navigate = useNavigate();

  // États pour les statistiques
  const [totalHeures, setTotalHeures] = useState(0);
  const [totalEtudiants, setTotalEtudiants] = useState(0);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/stat', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        setTotalHeures(response.data.total_heures);
        setTotalEtudiants(response.data.total_etudiants);
        setStudents(response.data.cours);
      } catch (error) {
        console.error('Erreur de récupération des statistiques', error);
      }
    };

    fetchStatistics();
  }, []);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('/clients');
        setClients(response.data.clients);
      } catch (error) {
        console.error('Erreur de récupération des clients', error);
      }
    };

    fetchClients();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.matieres.length ||
      !formData.jours.length ||
      !formData.heure_debut ||
      !formData.heure_fin ||
      !formData.id_client
    ) {
      alert('Tous les champs obligatoires doivent être remplis.');
      return;
    }

    const formattedData = {
      ...formData,
      matieres: formData.matieres,
      jours: formData.jours,
    };

    try {
      if (editCourse) {
        // Modification d'un cours existant
        const response = await axios.put(`/cours/${editCourse.id}`, formattedData);
        setStudents(
          students.map((student) =>
            student.id === editCourse.id ? response.data : student
          )
        );
        setEditCourse(null); // Réinitialiser l'état d'édition
      } else {
        // Ajout d'un nouveau cours
        const response = await axios.post('/cours', formattedData);
        setStudents([...students, response.data]);
      }

      setFormData({
        name: '',
        matieres: [],
        jours: [],
        heure_debut: '',
        heure_fin: '',
        id_client: '',
      });
    } catch (error) {
      console.error('Erreur d\'ajout ou de modification du cours', error.response?.data || error);
    }
  };

  const handleEdit = (course) => {
    setEditCourse(course);
    setFormData({
      name: course.name,
      matieres: JSON.parse(course.matieres),
      jours: JSON.parse(course.jours),
      heure_debut: course.heure_debut,
      heure_fin: course.heure_fin,
      id_client: course.id_client,
    });
  };

  const handleChangeStatus = async (id, newStatus) => {
    try {
      const response = await axios.patch(`/cours/${id}/statut`, { statut: newStatus });
      setStudents(
        students.map((student) =>
          student.id === id ? { ...student, statut: response.data.statut } : student
        )
      );
    } catch (error) {
      console.error('Erreur de mise à jour du statut', error.response?.data || error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/cours/${id}`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error('Erreur de suppression du cours', error);
    }
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Bienvenue dans votre espace répétiteur</h1>
        </header>

        {/* Cartes pour les statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <i className="fas fa-calendar-alt fa-lg"></i>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Rendez-vous de ce mois</p>
                <p className="text-2xl font-bold">{students.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <i className="fas fa-clock fa-lg"></i>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Heures de cours par semaine</p>
                <p className="text-2xl font-bold">{totalHeures}h</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                <i className="fas fa-users fa-lg"></i>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Nombre Étudiants</p>
                <p className="text-2xl font-bold">{totalEtudiants}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire pour ajouter ou modifier un cours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {editCourse ? 'Modifier un cours' : 'Ajouter un rendez-vous'}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom du cours</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nom du cours"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Étudiant</label>
                  <select
                    value={formData.id_client}
                    onChange={(e) => setFormData({ ...formData, id_client: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">-- Sélectionner un étudiant --</option>
                    {clients.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Matière</label>
                  <input
                    type="text"
                    name="matieres"
                    value={formData.matieres.join(', ')}
                    onChange={(e) => setFormData({ ...formData, matieres: e.target.value.split(',').map(m => m.trim()) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ex: chimie, français"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jour(s)</label>
                  <input
                    type="text"
                    name="jours"
                    value={formData.jours.join(', ')}
                    onChange={(e) => setFormData({ ...formData, jours: e.target.value.split(',').map(j => j.trim()) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ex: lundi, mardi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Heure de début</label>
                  <input
                    type="text"
                    name="heure_debut"
                    value={formData.heure_debut}
                    onChange={(e) => setFormData({ ...formData, heure_debut: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ex: 12:30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Heure de fin</label>
                  <input
                    type="text"
                    name="heure_fin"
                    value={formData.heure_fin}
                    onChange={(e) => setFormData({ ...formData, heure_fin: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ex: 14:30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200 flex items-center justify-center"
                >
                  <i className="fas fa-plus-circle mr-2"></i> {editCourse ? 'Modifier le cours' : 'Ajouter le rendez-vous'}
                </button>
              </div>
            </form>
          </div>

          {/* Liste des rendez-vous */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Mes rendez-vous</h2>
            <div className="space-y-4">
              {students.map((student) => (
                <div key={student.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition duration-150">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-600"><i className="fas fa-book mr-2 text-blue-500"></i>{JSON.parse(student.matieres).join(', ')}</p>
                      <p className="text-sm text-gray-600"><i className="fas fa-calendar-day mr-2 text-green-500"></i>{JSON.parse(student.jours).join(', ')}</p>
                      <p className="text-sm text-gray-600"><i className="fas fa-clock fa-lg mr-2 text-purple-500"></i>{student.heure_debut} - {student.heure_fin}</p>
                      <p className="text-sm text-gray-600"><i className="fas fa-info-circle mr-2 text-yellow-500"></i>Statut : {student.statut || 'Non défini'}</p>
                    </div>
                    <div className="relative" ref={(el) => (dropdownRefs.current[student.id] = el)}>
                      <button onClick={() => toggleDropdown(student.id)} className="text-gray-500 hover:text-gray-700">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                      {openDropdown === student.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                          <button
                            onClick={() => handleEdit(student)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <i className="fas fa-edit mr-2 text-blue-500"></i> Modifier
                          </button>
                          <button
                            onClick={() => handleChangeStatus(student.id, student.statut === 'en_cours' ? 'termine' : 'en_cours')}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <i className="fas fa-sync-alt mr-2 text-green-500"></i> Changer statut
                          </button>
                          <button
                            onClick={() => handleDelete(student.id)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <i className="fas fa-trash-alt mr-2 text-red-500"></i> Supprimer
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;