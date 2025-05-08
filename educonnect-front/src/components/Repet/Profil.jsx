
import React, { useState, useEffect, useRef } from 'react';
import api from '../../api/axios';

const Profil = () => {

  const [userData, setUserData] = useState(null); // Données du profil
  const [editData, setEditData] = useState({
    photo: null,
    nom: '',
    age: '',
    ville: '',
    description: '',
    disponibilites: [],
    cours: [],
    niveaux: [],
    prix: '',
    statut: 'actif',
  }); // Données en cours d'édition
  const [errors, setErrors] = useState({}); // Erreurs de validation
  const fileInputRef = useRef(null);

  // Récupérer le profil du répétiteur connecté
  useEffect(() => {
    fetchProfil();
  }, []);

  const fetchProfil = async () => {
    try {
      const response = await api.get('/repetiteur/profil');
      setUserData(response.data); // Stocker les données du profil
      setEditData(response.data); // Initialiser les données d'édition
    } catch (error) {
      if (error.response?.status === 404) {
        console.warn('Profil non trouvé, prêt pour la création.');
        setUserData(null); // Pas de profil existant
        setEditData({
          photo: null,
          nom: '',
          age: '',
          ville: '',
          description: '',
          disponibilites: [],
          cours: [],
          niveaux: [],
          prix: '',
          statut: 'actif',
        }); // Initialiser un profil vide pour la création
      } else {
        console.error('Erreur lors de la récupération du profil :', error.response?.data || error.message);
      }
    }
  };

  const deleteProfil = async () => {
    try {
      if (window.confirm('Êtes-vous sûr de vouloir supprimer votre profil ?')) {
        await api.delete('/repetiteur/profil'); // Remplacez par l'URL correcte de votre API
        alert('Profil supprimé avec succès');
        setUserData(null); // Réinitialiser les données utilisateur après suppression
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du profil :', error.response?.data || error.message);
      alert('Erreur lors de la suppression du profil');
    }
  };

  const createProfil = async (profilData) => {
    try {
      const formData = new FormData();
      Object.keys(profilData).forEach((key) => {
        if (Array.isArray(profilData[key])) {
          profilData[key].forEach((value) => formData.append(`${key}[]`, value));
        } else {
          formData.append(key, profilData[key]);
        }
      });
  
      console.log('Données envoyées :', Object.fromEntries(formData.entries())); // Ajoutez ceci
  
      const response = await api.post('/repetiteur/profil', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      alert('Profil créé avec succès');
      setUserData(response.data);
      setEditData(response.data);
      setErrors({}); // Réinitialiser les erreurs
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors || {});
      } else {
        console.error('Erreur lors de la création du profil :', error.response?.data || error.message);
        alert('Erreur lors de la création du profil');
      }
    }
  };

  const updateProfil = async (profilData) => {
    try {
      const formData = new FormData();
      Object.keys(profilData).forEach((key) => {
        if (Array.isArray(profilData[key])) {
          profilData[key].forEach((value) => formData.append(`${key}[]`, value));
        } else {
          formData.append(key, profilData[key]);
        }
      });

      const response = await api.put('/repetiteur/profil', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Profil mis à jour avec succès');
      setUserData(response.data);
      setEditData(response.data);
      setErrors({}); // Réinitialiser les erreurs
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors || {});
      } else {
        console.error('Erreur lors de la mise à jour du profil :', error.response?.data || error.message);
        alert('Erreur lors de la mise à jour du profil');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e) => {
    const { name, options } = e.target;
    const values = Array.from(options).filter((option) => option.selected).map((option) => option.value);
    setEditData((prev) => ({ ...prev, [name]: values }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setEditData((prev) => ({ ...prev, photo: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData) {
      await updateProfil(editData); // Modifier le profil existant
    } else {
      await createProfil(editData); // Créer un nouveau profil
    }
    fetchProfil(); // Recharger les données après modification
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Mon Profil Répétiteur</h1>
          <p className="text-gray-600">Gestion de vos informations personnelles et professionnelles</p>
        </header>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative mb-4 md:mb-0 md:mr-6">
                <img
                  src={editData.photo || '/default-profile.png'}  
                  alt="Photo de profil"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md object-cover"
                />
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md"
                >
                  <i className="fas fa-camera"></i>
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold">{userData?.nom || 'Nom non renseigné'}</h2>
                <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20 text-gray-500">
                    <i className="fas fa-map-marker-alt mr-1"></i> {userData?.ville || 'Ville non renseignée'}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20 text-gray-500">
                  <i class="fas fa-money-bill-wave"></i> {userData?.prix || '0'} FCFA
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
                    <h4 className="text-sm font-medium text-gray-500">Adresse :</h4>
                    <p className="mt-1 text-gray-900 flex items-center">
                      <i className="fas fa-home mr-2 text-blue-400"></i> 
                      {userData?.ville|| <span className="text-gray-400">Non renseignée</span>}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Inscrit le :</h4>
                    <p className="mt-1 text-gray-900 flex items-center">
                      <i className="fas fa-calendar-day mr-2 text-blue-400"></i>
                      {userData?.Date || 'Non renseigné'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  <i className="fas fa-briefcase mr-2 text-blue-500"></i> Informations Professionnelles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Âge :</h4>
                    <p className="mt-1 text-gray-900">{userData?.age || 'Non renseigné'} ans</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Tarif des cours :</h4>
                    <p className="mt-1 text-gray-900">{userData?.prix || 'Non renseigné'} FCFA</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Niveau enseigné :</h4>
                    <p className="mt-1 text-gray-900">{userData?.niveaux?.join(', ') || 'Non renseigné'}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Ville :</h4>
                    <p className="mt-1 text-gray-900">{userData?.ville || 'Non renseigné'}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-medium text-gray-500">Matières enseignées :</h4>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {userData?.cours?.map((subject, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center">
                          <i className="fas fa-book mr-1"></i> {subject}
                        </span>
                      )) || <span className="text-gray-400">Non renseigné</span>}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-medium text-gray-500">Disponibilités :</h4>
                    <div className="mt-1 p-3 bg-gray-50 rounded-md">
                      {userData?.disponibilites?.map((line, i) => (
                        <p key={i} className="text-gray-900 flex items-start">
                          <i className="fas fa-clock mr-2 mt-1 text-blue-400"></i> {line}
                        </p>
                      )) || <span className="text-gray-400">Non renseigné</span>}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-medium text-gray-500">Description :</h4>
                    <div className="mt-1 p-3 bg-gray-50 rounded-md">
                      <p className="text-gray-900">{userData?.description || 'Non renseigné'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* Formulaire d'ajout ou de modification */}
         <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{userData ? 'Modifier le profil' : 'Créer un profil'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  name="nom"
                  value={editData.nom || ''}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${errors.nom ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
                {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom[0]}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                <input
                  type="text"
                  name="ville"
                  value={editData.ville || ''}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${errors.ville ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
                {errors.ville && <p className="text-red-500 text-sm mt-1">{errors.ville[0]}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Âge</label>
                <input
                  type="number"
                  name="age"
                  value={editData.age || ''}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age[0]}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tarif des cours (FCFA)</label>
                <input
                  type="number"
                  name="prix"
                  value={editData.prix || ''}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${errors.prix ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
                {errors.prix && <p className="text-red-500 text-sm mt-1">{errors.prix[0]}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Photo</label>
                <input
                  type="file"
                  name="photo"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept="image/*"
                  required
                />
                {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo[0]}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Disponibilités</label>
                <select
                  name="disponibilites"
                  multiple
                  value={editData.disponibilites}
                  onChange={handleArrayChange}
                  className={`w-full px-4 py-2 border ${errors.disponibilites ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                >
                  {['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'].map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                {errors.disponibilites && <p className="text-red-500 text-sm mt-1">{errors.disponibilites[0]}</p>}
              </div>
              <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">Cours</label>
  <div className="space-y-2">
    {editData.cours.map((course, index) => (
      <div key={index} className="flex items-center space-x-2">
        <input
          type="text"
          value={course}
          onChange={(e) => {
            const updatedCours = [...editData.cours];
            updatedCours[index] = e.target.value;
            setEditData((prev) => ({ ...prev, cours: updatedCours }));
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Entrez un cours"
          required
        />
        <button
          type="button"
          onClick={() => {
            const updatedCours = editData.cours.filter((_, i) => i !== index);
            setEditData((prev) => ({ ...prev, cours: updatedCours }));
          }}
          className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Supprimer
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={() => {
        setEditData((prev) => ({ ...prev, cours: [...prev.cours, ''] }));
      }}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Ajouter un cours
      </button>
    </div>
    {errors.cours && <p className="text-red-500 text-sm mt-1">{errors.cours[0]}</p>}
  </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Niveaux</label>
                <select
                  name="niveaux"
                  multiple
                  value={editData.niveaux}
                  onChange={handleArrayChange}
                  className={`w-full px-4 py-2 border ${errors.niveaux ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                >
                  {['6e', '5e', '4e', '3e', '2nde', '1re', 'terminale'].map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
                {errors.niveaux && <p className="text-red-500 text-sm mt-1">{errors.niveaux[0]}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={editData.description || ''}
                  onChange={handleInputChange}
                  rows="4"
                  className={`w-full px-4 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                ></textarea>
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description[0]}</p>}
              </div>
            </div>
           <div className='flex gap-10'>
            <div className="mt-6 flex justify-end space-x-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center"
                >
                  <i className="fas fa-save mr-2"></i> {userData ? 'Modifier' : 'Créer'}
                </button>
              </div>
              <div className="mt-4 md:mt-0 md:ml-auto">
              <button
                onClick={deleteProfil}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md flex items-center transition duration-200 shadow-md"
              >
                <i className="fas fa-trash mr-2"></i> Supprimer le profil
              </button>
            </div>
           </div>
          </form>
        </div>
      </div>
      </div>
  
  );
};

export default Profil;