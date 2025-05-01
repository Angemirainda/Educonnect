import React, { useState } from 'react';

const Repetiteurs = () => {
  // Données des répétiteurs
  const [tutors, setTutors] = useState([
    {
      id: 1,
      name: 'Jean Dupont',
      email: 'jean.dupont@example.com',
      registrationDate: '15/03/2023',
      courses: ['Mathématiques', 'Physique'],
      status: 'Actif'
    },
    {
      id: 2,
      name: 'Marie Laurent',
      email: 'marie.laurent@example.com',
      registrationDate: '02/04/2023',
      courses: ['Anglais', 'Français'],
      status: 'Actif'
    },
    {
      id: 2,
      name: 'Marie Laurent',
      email: 'marie.laurent@example.com',
      registrationDate: '02/04/2023',
      courses: ['Anglais', 'Français'],
      status: 'Actif'
    },
    {
      id: 2,
      name: 'Marie Laurent',
      email: 'marie.laurent@example.com',
      registrationDate: '02/04/2023',
      courses: ['Anglais', 'Français'],
      status: 'Actif'
    },
    {
      id: 2,
      name: 'Marie Laurent',
      email: 'marie.laurent@example.com',
      registrationDate: '02/04/2023',
      courses: ['Anglais', 'Français'],
      status: 'Actif'
    },
    {
      id: 2,
      name: 'Marie Laurent',
      email: 'marie.laurent@example.com',
      registrationDate: '02/04/2023',
      courses: ['Anglais', 'Français'],
      status: 'Actif'
    },
    {
      id: 2,
      name: 'Marie Laurent',
      email: 'marie.laurent@example.com',
      registrationDate: '02/04/2023',
      courses: ['Anglais', 'Français'],
      status: 'Actif'
    },
    {
      id: 2,
      name: 'Marie Laurent',
      email: 'marie.laurent@example.com',
      registrationDate: '02/04/2023',
      courses: ['Anglais', 'Français'],
      status: 'Actif'
    },
    {
      id: 2,
      name: 'Marie Laurent',
      email: 'marie.laurent@example.com',
      registrationDate: '02/04/2023',
      courses: ['Anglais', 'Français'],
      status: 'Actif'
    },
    // ... autres données
  ]);

  // États pour la recherche et la modal
  const [searchTerm, setSearchTerm] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [tutorToDelete, setTutorToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  // Filtrer les répétiteurs
  const filteredTutors = tutors.filter(tutor =>
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Gestion du dropdown
  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  // Gestion de la suppression
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      // Simulation d'appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setTutors(tutors.filter(t => t.id !== tutorToDelete.id));
      setIsDeleteModalOpen(false);
    } finally {
      setIsDeleting(false);
    }
  };

  // Badge de statut
  const getStatusBadge = (status) => {
    const baseClasses = "px-2 py-1 text-xs rounded-full";
    switch(status) {
      case 'Actif': return <span className={`${baseClasses} bg-green-100 text-green-800`}>
        <i className="fas fa-check-circle mr-1"></i> Actif
      </span>;
      case 'Inactif': return <span className={`${baseClasses} bg-red-100 text-red-800`}>
        <i className="fas fa-times-circle mr-1"></i> Inactif
      </span>;
      default: return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>{status}</span>;
    }
  };

  return (
    <div className="p-6">
      {/* En-tête */}
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

      {/* Tableau */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Répétiteur</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date d'inscription</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cours</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTutors.map((tutor) => (
                <tr key={tutor.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <i className="fas fa-user text-blue-600"></i>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{tutor.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tutor.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tutor.registrationDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {tutor.courses.map((course, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                          {course}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(tutor.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(tutor.id)}
                        className="p-2 rounded-full hover:bg-gray-200"
                      >
                        <i className="fas fa-ellipsis-v text-gray-500"></i>
                      </button>

                      {openDropdownId === tutor.id && (
                        <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="py-1">
                            <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                              <i className="fas fa-eye mr-2 text-blue-500"></i>
                              Voir
                            </button>
                            <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                              <i className="fas fa-pen mr-2 text-yellow-500"></i>
                              Modifier
                            </button>
                            <button
                              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                              onClick={() => {
                                console.log('Tutor sélectionné :', tutor);
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

      {/* Modal de suppression */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
            <div className="p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <i className="fas fa-exclamation-triangle text-red-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Supprimer {tutorToDelete?.name} ?
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Cette action est irréversible. Voulez-vous vraiment continuer ?
              </p>
              <div className="flex justify-center space-x-3">
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  disabled={isDeleting}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <i className="fas fa-times mr-2"></i>
                  Annuler
                </button>
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className={`px-4 py-2 rounded-md text-sm font-medium text-white transition-colors ${
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

export default Repetiteurs;