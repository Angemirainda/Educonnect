import React, { useState, useRef, useEffect } from 'react';

const Dashboard = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Sophie Martin', subject: 'Mathématiques', day: 'Lundi 5 mai', time: '14:00' },
    { id: 2, name: 'Thomas Dubois', subject: 'Physique', day: 'Mardi 6 mai', time: '16:30' }
  ]);
  
  const [newAppointment, setNewAppointment] = useState({
    studentName: '',
    subject: ''
  });
  
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef([]);
  
  const subjects = ['Mathématiques', 'Physique', 'Chimie', 'Français', 'Anglais', 'Histoire'];
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment(prev => ({ ...prev, [name]: value }));
  };
  
  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
    setOpenDropdown(null);
  };

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Fermer le dropdown quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown !== null && 
          dropdownRefs.current[openDropdown] && 
          !dropdownRefs.current[openDropdown].contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Bienvenue dans votre espace répétiteur</h1>
          <p className="text-gray-600">Aujourd'hui nous sommes le samedi 3 mai 2025</p>
        </header>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <i className="fas fa-calendar-alt fa-lg"></i>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Rendez-vous cette semaine</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <i className="fas fa-clock fa-lg"></i>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Heures de cours</p>
                <p className="text-2xl font-bold">12h</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                <i className="fas fa-users fa-lg"></i>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Étudiants</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add Appointment */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Ajouter un rendez-vous</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l'étudiant(e)</label>
                <input 
                  type="text" 
                  name="studentName"
                  value={newAppointment.studentName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nom et prénom"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Matière</label>
                <select 
                  name="subject"
                  value={newAppointment.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Sélectionner une matière</option>
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200 flex items-center justify-center">
                <i className="fas fa-plus-circle mr-2"></i> Ajouter le rendez-vous
              </button>
            </div>
          </div>
          
          {/* Appointments List */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Mes rendez-vous</h2>
            
            <div className="space-y-4">
              {students.map(student => (
                <div key={student.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition duration-150">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-600 flex items-center">
                        <i className="fas fa-book mr-2 text-blue-500"></i> {student.subject}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <i className="fas fa-calendar-day mr-2 text-green-500"></i> {student.day} · {student.time}
                      </p>
                    </div>
                    
                    <div className="relative" ref={el => dropdownRefs.current[student.id] = el}>
                      <button 
                        onClick={() => toggleDropdown(student.id)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                      
                      {openDropdown === student.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                          <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                            <i className="fas fa-edit mr-2 text-blue-500"></i> Modifier
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