


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../api/axios'; 

const Profils = () => {
  const [tutors, setTutors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [tutorToDelete, setTutorToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);


  // Charger les données depuis l'API
  useEffect(() => {
    axios.get('http://localhost:8000/api/profils-repetiteurs')// Adapte si ton endpoint est différent
      .then(response => {
        console.log('Données récupérées :', response.data); // Afficher la réponse complète dans la console
        setTutors(response.data); // Assurez-vous que la structure de la réponse est correcte
      })
      .catch(error => {
        console.error('Erreur lors du chargement des profils :', error);
      });
  }, []);
useEffect(() => {
      const handleClickOutside = (event) => {
        if (!event.target.closest('.relative')) {
          setOpenDropdownId(null);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);

  const filteredTutors = tutors.filter(tutor =>
    tutor.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.ville.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const filteredTutors = Array.isArray(tutors)
  // ? tutors.filter(tutor =>
  //     tutor.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     tutor.ville.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  // : [];
 


  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleDelete = async () => {
    if (!tutorToDelete) return;

    setIsDeleting(true);
    try {
      await axios.delete(`/api/profils-repetiteurs/${tutorToDelete.id}`);
      setTutors(tutors.filter(t => t.id !== tutorToDelete.id));
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Erreur lors de la suppression :', error);
    } finally {
      setIsDeleting(false);
    }
  };

  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 text-xs rounded-full";
    switch(status) {
      case 'Actif': return <span className={`${baseClasses} bg-green-100 text-green-800`}><i className="fas fa-check-circle mr-1"></i> Actif</span>;
      case 'Inactif': return <span className={`${baseClasses} bg-red-100 text-red-800`}><i className="fas fa-times-circle mr-1"></i> Inactif</span>;
      default: return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>{status}</span>;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Gestion des répétiteurs</h1>
      <p className="text-gray-600 mb-6">Gérez les répétiteurs inscrits sur la plateforme</p>

      {/* Barre de recherche */}
      <div className="mb-6 relative max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className="fas fa-search text-gray-400"></i>
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tableau des répétiteurs */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Répétiteur</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Adresse</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cours</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Niveaux</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTutors.map((tutor) => (
                <tr key={tutor.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                        {tutor.photo ? (
                          <img src={`http://localhost:8000/storage/${tutor.photo}`} alt="profil" className="h-10 w-10 object-cover" />
                        ) : (
                          <i className="fas fa-user text-gray-500"></i>
                        )} 
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{tutor.nom}</div>
                        <div className="text-sm text-gray-500">Âge: {tutor.age}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{tutor.ville}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {(tutor.cours || []).map((c, i) => (
                      <span key={i} className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded mr-1 mb-1">{c}</span>
                    ))}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {(tutor.niveaux || []).map((n, i) => (
                      <span key={i} className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded mr-1 mb-1">{n}</span>
                    ))}
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge('Actif')}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <div className="relative">
                      <button onClick={() => toggleDropdown(tutor.id)} className="p-2 rounded-full hover:bg-gray-200">
                        <i className="fas fa-ellipsis-v text-gray-500"></i>
                      </button>
                      {openDropdownId === tutor.id && (
                        <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="py-1">
                            {/* <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                              <i className="fas fa-eye mr-2 text-blue-500"></i>
                              Voir
                            </button> */}
                            {isViewModalOpen && selectedTutor && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Détails du profil</h2>
        <button onClick={() => setIsViewModalOpen(false)}>
          <i className="fas fa-times text-gray-600"></i>
        </button>
      </div>

      <div className="space-y-4 text-sm text-gray-700">
        <p><strong>Nom :</strong> {selectedTutor.nom}</p>
        <p><strong>Âge :</strong> {selectedTutor.age}</p>
        <p><strong>Ville :</strong> {selectedTutor.ville}</p>
        <p><strong>Description :</strong> {selectedTutor.description}</p>
        <p><strong>Prix :</strong> {selectedTutor.prix} FCFA</p>

        <p><strong>Disponibilités :</strong> {(selectedTutor.disponibilites || []).join(', ')}</p>
        <p><strong>Cours :</strong> {(selectedTutor.cours || []).join(', ')}</p>
        <p><strong>Niveaux :</strong> {(selectedTutor.niveaux || []).join(', ')}</p>
        <p><strong>Statut :</strong> {selectedTutor.statut}</p>
      </div>

      <div className="mt-6 text-right">
        <button
          onClick={() => setIsViewModalOpen(false)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Fermer
        </button>
      </div>
    </div>
  </div>
)}

                            <button
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                              onClick={() => {
                                setSelectedTutor(tutor);
                                setIsViewModalOpen(true);
                                setOpenDropdownId(null);
                              }}
                            >
                              <i className="fas fa-eye mr-2 text-blue-500"></i>
                              Voir
                            </button>

                            <button className="flex items-center px-4 py-2 text-sm text-yellow-600 hover:bg-gray-100 w-full text-left">
                              <i className="fas fa-sync mr-2"></i>
                              Désactiver
                            </button>
                            <button
                              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                              onClick={() => {
                                setTutorToDelete(tutor);
                                setIsDeleteModalOpen(true);
                                setOpenDropdownId(null);
                              }}
                            >
                              <i className="fas fa-trash mr-2"></i>
                              Supprimer
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal suppression */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
            <div className="p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <i className="fas fa-exclamation-triangle text-red-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Supprimer {tutorToDelete?.nom} ?
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Cette action est irréversible. Voulez-vous vraiment continuer ?
              </p>
              <div className="flex justify-center space-x-3">
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  disabled={isDeleting}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <i className="fas fa-times mr-2"></i>
                  Annuler
                </button>
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className={`px-4 py-2 rounded-md text-sm font-medium text-white ${
                    isDeleting ? 'bg-red-300' : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {isDeleting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Suppression...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-trash mr-2"></i>
                      Confirmer
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profils;
