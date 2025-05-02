
import React, { useEffect, useState } from 'react';
import api from '../../api/axios';

const Repetiteurs = () => {
  const [tutors, setTutors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [tutorToDelete, setTutorToDelete] = useState(null);
  const [selectedTutor, setSelectedTutor] = useState(null); // ← ajout
  const [isDeleting, setIsDeleting] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    fetchTutors();
  }, []);

  const fetchTutors = async () => {
    try {
      const res = await api.get('/repetiteurs');
      setTutors(res.data.repetiteurs);
    } catch (error) {
      console.error('Erreur de chargement des répétiteurs :', error);
    }
  };

  const handleDelete = async () => {
    if (!tutorToDelete) return;
    setIsDeleting(true);
    try {
      await api.delete(`/repetiteurs/${tutorToDelete.id}`);
      setTutors((prev) => prev.filter((t) => t.id !== tutorToDelete.id));
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Erreur lors de la suppression :', error);
    } finally {
      setIsDeleting(false);
    }
  };

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

  const handleStatusToggle = async (repetiteur) => {
    try {
      const newStatus = !repetiteur.status;
      await api.patch(`/repetiteurs/${repetiteur.id}/status`, { status: newStatus });
      setTutors(prev =>
        prev.map(t => t.id === repetiteur.id ? { ...t, status: newStatus } : t)
      );
      setOpenDropdownId(null);
    } catch (error) {
      console.error('Erreur lors du changement de statut :', error);
    }
  };

  const filteredTutors = tutors.filter((tutor) =>
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status) => {
    const base = "px-2 py-1 text-xs rounded-full";
    return (
      <span className={`${base} ${status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {status ? 'Actif' : 'Inactif'}
      </span>
    );
  };

  const storageUrl = (path) => `${import.meta.env.VITE_API_BASE_URL}/storage/${path}`; // si api est sur localhost:8000

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Gestion des répétiteurs</h1>
      <p className="text-gray-600 mb-6">Gérez les répétiteurs inscrits sur la plateforme</p>

      <div className="mb-6 relative max-w-md">
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3">Répétiteur</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Statut</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTutors.map((tutor) => (
                <tr key={tutor.id}>
                  <td className="px-6 py-4">{tutor.name}</td>
                  <td className="px-6 py-4">{tutor.email}</td>
                  <td className="px-6 py-4">{new Date(tutor.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{getStatusBadge(tutor.status)}</td>
                  <td className="px-6 py-4">
                    <div className="relative">
                      <button onClick={() => toggleDropdown(tutor.id)} className="text-gray-600">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                      {openDropdownId === tutor.id && (
                        <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="py-1">
                            <button
                              onClick={() => {
                                setSelectedTutor(tutor);
                                setOpenDropdownId(null);
                              }}
                              className="flex items-center px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 w-full text-left"
                            >
                              <i className="fas fa-eye mr-2"></i>
                              Voir plus
                            </button>
                            <button
                              onClick={() => handleStatusToggle(tutor)}
                              className="flex items-center px-4 py-2 text-sm text-yellow-600 hover:bg-gray-100 w-full text-left"
                            >
                              <i className="fas fa-sync mr-2"></i>
                              {tutor.status ? 'Désactiver' : 'Activer'}
                            </button>
                            <button
                              onClick={() => {
                                setTutorToDelete(tutor);
                                setIsDeleteModalOpen(true);
                                setOpenDropdownId(null);
                              }}
                              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
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

      {/* Modal Voir Plus */}
      {selectedTutor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Détails du répétiteur</h3>
            <ul className="text-sm space-y-2">
              <li><strong>Nom:</strong> {selectedTutor.name}</li>
              <li><strong>Email:</strong> {selectedTutor.email}</li>
              <li><strong>Téléphone:</strong> {selectedTutor.telephone}</li>
              <li><strong>Adresse:</strong> {selectedTutor.adresse}</li>
              <div className="mt-4 space-y-2">
                <p><strong>CV:</strong> <a href={`http://localhost:8000/storage/${selectedTutor.cv}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Télécharger</a></p>
                <p><strong>Lettre de motivation:</strong> <a href={`http://localhost:8000/storage/${selectedTutor.lettre_motivation}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Télécharger</a></p>
                <p><strong>Relevé du bac:</strong> <a href={`http://localhost:8000/storage/${selectedTutor.releve_bac}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Télécharger</a></p>
                <p><strong>Pièce d'identité:</strong> <a href={`http://localhost:8000/storage/${selectedTutor.piece_identite}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Télécharger</a></p>
              </div>

              {/* <li><strong>CV:</strong> <a href={storageUrl(selectedTutor.cv)} target="_blank" className="text-blue-600 underline">Voir</a></li>
              <li><strong>Lettre de motivation:</strong> <a href={storageUrl(selectedTutor.lettre_motivation)} target="_blank" className="text-blue-600 underline">Voir</a></li>
              <li><strong>Relevé Bac:</strong> <a href={storageUrl(selectedTutor.releve_bac)} target="_blank" className="text-blue-600 underline">Voir</a></li>
              <li><strong>Pièce d'identité:</strong> <a href={storageUrl(selectedTutor.piece_identite)} target="_blank" className="text-blue-600 underline">Voir</a></li> */}
            </ul>
            <div className="mt-4 text-right">
              <button onClick={() => setSelectedTutor(null)} className="px-4 py-2 bg-gray-200 rounded">Fermer</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de confirmation de suppression */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-2">Confirmer la suppression</h3>
            <p className="text-sm mb-4">Supprimer {tutorToDelete?.name} ? Cette action est irréversible.</p>
            <div className="flex justify-end space-x-2">
              <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 text-gray-700 border rounded">
                Annuler
              </button>
              <button onClick={handleDelete} disabled={isDeleting} className="px-4 py-2 bg-red-600 text-white rounded">
                {isDeleting ? 'Suppression...' : 'Confirmer'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Repetiteurs;
