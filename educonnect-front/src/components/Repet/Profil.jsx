import React, { useState, useRef } from 'react';

const Profil = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "Jean Dupont",
    username: "@prof_maths",
    status: "Active",
    email: "jean.dupont@example.com",
    phone: "+33 6 12 34 56 78",
    address: "15 Rue de l'École, 75005 Paris",
    registrationDate: "03/05/2025",
    emailVerified: "03/05/2025 14:20",
    age: 35,
    lessonPrice: 30,
    description: "Professeur expérimenté en mathématiques avec 10 ans d'expérience. Méthode pédagogique adaptée à chaque élève.",
    availability: "Lundi à Vendredi, 16h-20h\nSamedi, 10h-14h",
    subjects: ["Mathématiques", "Physique", "Chimie"],
    level: "Lycée et Université",
    city: "Paris",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
  });

  const [editData, setEditData] = useState({...userData});
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setEditData(prev => ({ ...prev, photo: event.target.result }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(editData);
    setIsModalOpen(false);
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
          {/* Profile Header with Photo */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative mb-4 md:mb-0 md:mr-6">
                <img 
                  src={userData.photo} 
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
                <h2 className="text-2xl font-bold">{userData.name}</h2>
                <p className="text-blue-100">{userData.username}</p>
                <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20 text-gray-500`}>
                    <i className="fas fa-circle text-green-300 mr-1"></i> {userData.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20 text-gray-500">
                    <i className="fas fa-map-marker-alt mr-1"></i> {userData.city}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-white bg-opacity-20 text-gray-500">
                    <i className="fas fa-euro-sign mr-1"></i> {userData.lessonPrice}/h
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-auto">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 bg-white hover:bg-gray-100 text-blue-600 rounded-md flex items-center transition duration-200 shadow-md"
                >
                  <i className="fas fa-edit mr-2"></i> Modifier Profil
                </button>
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
                    <h4 className="text-sm font-medium text-gray-500">Email :</h4>
                    <p className="mt-1 text-gray-900 flex items-center">
                      <i className="fas fa-envelope mr-2 text-blue-400"></i> {userData.email}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Téléphone :</h4>
                    <p className="mt-1 text-gray-900 flex items-center">
                      <i className="fas fa-phone mr-2 text-blue-400"></i> 
                      {userData.phone || <span className="text-gray-400">Non renseigné</span>}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Adresse :</h4>
                    <p className="mt-1 text-gray-900 flex items-center">
                      <i className="fas fa-home mr-2 text-blue-400"></i> 
                      {userData.address || <span className="text-gray-400">Non renseignée</span>}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Inscrit le :</h4>
                    <p className="mt-1 text-gray-900 flex items-center">
                      <i className="fas fa-calendar-day mr-2 text-blue-400"></i> 
                      {userData.registrationDate} <span className="text-gray-500 text-sm">(2 days ago)</span>
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Email vérifié :</h4>
                    <p className="mt-1 text-gray-900 flex items-center">
                      <i className="fas fa-check-circle mr-2 text-green-400"></i> 
                      {userData.emailVerified ? (
                        <span>{userData.emailVerified}</span>
                      ) : (
                        <span className="text-gray-400">Non vérifié</span>
                      )}
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
                    <p className="mt-1 text-gray-900">{userData.age} ans</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Tarif des cours :</h4>
                    <p className="mt-1 text-gray-900">{userData.lessonPrice} €/h</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Niveau enseigné :</h4>
                    <p className="mt-1 text-gray-900">{userData.level}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Ville :</h4>
                    <p className="mt-1 text-gray-900">{userData.city}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-medium text-gray-500">Matières enseignées :</h4>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {userData.subjects.map((subject, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center">
                          <i className="fas fa-book mr-1"></i> {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-medium text-gray-500">Disponibilités :</h4>
                    <div className="mt-1 p-3 bg-gray-50 rounded-md">
                      {userData.availability.split('\n').map((line, i) => (
                        <p key={i} className="text-gray-900 flex items-start">
                          <i className="fas fa-clock mr-2 mt-1 text-blue-400"></i> {line}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-medium text-gray-500">Description :</h4>
                    <div className="mt-1 p-3 bg-gray-50 rounded-md">
                      <p className="text-gray-900">{userData.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Modifier le profil</h3>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    &times;
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex flex-col items-center">
                      <img 
                        src={editData.photo} 
                        alt="Photo de profil" 
                        className="w-32 h-32 rounded-full border-4 border-blue-100 object-cover mb-4"
                      />
                      <button 
                        type="button"
                        onClick={() => fileInputRef.current.click()}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center"
                      >
                        <i className="fas fa-camera mr-2"></i> Changer la photo
                      </button>
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*"
                      />
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet*</label>
                        <input
                          type="text"
                          name="name"
                          value={editData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom d'utilisateur*</label>
                        <input
                          type="text"
                          name="username"
                          value={editData.username}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                      <input
                        type="email"
                        name="email"
                        value={editData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={editData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ville*</label>
                      <input
                        type="text"
                        name="city"
                        value={editData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Âge</label>
                      <input
                        type="number"
                        name="age"
                        value={editData.age}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tarif des cours (€/h)*</label>
                      <input
                        type="number"
                        name="lessonPrice"
                        value={editData.lessonPrice}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Niveau enseigné*</label>
                      <select
                        name="level"
                        value={editData.level}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="Collège">Collège</option>
                        <option value="Lycée">Lycée</option>
                        <option value="Lycée et Université">Lycée et Université</option>
                        <option value="Université">Université</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Matières enseignées*</label>
                      <input
                        type="text"
                        name="subjects"
                        value={editData.subjects.join(', ')}
                        onChange={(e) => setEditData({...editData, subjects: e.target.value.split(',').map(s => s.trim())})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Séparées par des virgules (ex: Mathématiques, Physique)"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Disponibilités*</label>
                      <textarea
                        name="availability"
                        value={editData.availability}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ex: Lundi à Vendredi, 14h-20h\nSamedi, 10h-14h"
                        required
                      ></textarea>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
                      <textarea
                        name="description"
                        value={editData.description}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      ></textarea>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                      <textarea
                        name="address"
                        value={editData.address}
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center"
                    >
                      <i className="fas fa-save mr-2"></i> Enregistrer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profil;