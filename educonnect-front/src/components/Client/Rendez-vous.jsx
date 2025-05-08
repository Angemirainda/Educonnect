import { useState, useRef, useEffect } from 'react';

const RendezVous = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const dropdownRefs = useRef([]);

  // Données des rendez-vous
  const appointments = {
    upcoming: [
      {
        id: 1,
        tutor: 'M. Dupont',
        subject: 'Mathématiques',
        date: '10 Mai 2025',
        time: '14:00 - 15:30',
        status: 'À venir',
        statusColor: 'bg-blue-100 text-blue-800'
      },
      {
        id: 2,
        tutor: 'Mme Laurent',
        subject: 'Physique',
        date: '12 Mai 2025',
        time: '10:00 - 11:30',
        status: 'À venir',
        statusColor: 'bg-blue-100 text-blue-800'
      },
      {
        id: 3,
        tutor: 'M. Martin',
        subject: 'Anglais',
        date: '15 Mai 2025',
        time: '16:00 - 17:00',
        status: 'À venir',
        statusColor: 'bg-blue-100 text-blue-800'
      }
    ],
    past: [
      {
        id: 4,
        tutor: 'Mme Dubois',
        subject: 'Chimie',
        date: '3 Mai 2025',
        time: '09:00 - 10:30',
        status: 'Terminé',
        statusColor: 'bg-gray-100 text-gray-800'
      }
    ],
    all: []
  };

  // Combiner tous les rendez-vous pour l'onglet "Tous"
  appointments.all = [...appointments.upcoming, ...appointments.past];

  // Fermer les dropdowns quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRefs.current.some(ref => ref && ref.contains(event.target))) {
        setIsDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (id) => {
    setIsDropdownOpen(isDropdownOpen === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Mes Rendez-vous</h1>
      </header>

      {/* Onglets de navigation */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'upcoming' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            À venir
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'past' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Passés
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'all' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Tous
          </button>
        </nav>
      </div>

      {/* Tableau des rendez-vous */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Répétiteur</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matière</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heure</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments[activeTab].length > 0 ? (
                appointments[activeTab].map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                          <i className="fa fa-user text-indigo-600"></i>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{appointment.tutor}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{appointment.subject}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{appointment.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{appointment.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${appointment.statusColor}`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div 
                        className="relative" 
                        ref={el => dropdownRefs.current[appointment.id] = el}
                      >
                        <button 
                          onClick={() => toggleDropdown(appointment.id)}
                          className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                          <i className="fa fa-ellipsis-v"></i>
                        </button>
                        
                        {isDropdownOpen === appointment.id && (
                          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                            <div className="py-1" role="menu" aria-orientation="vertical">
                              <button 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                role="menuitem"
                              >
                                <i className="fa fa-eye mr-2"></i> Détails
                              </button>
                              {appointment.status === 'À venir' && (
                                <button 
                                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                                  role="menuitem"
                                >
                                  <i className="fa fa-times mr-2"></i> Annuler
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    Aucun rendez-vous {activeTab === 'upcoming' ? 'à venir' : 'passé'} trouvé
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RendezVous;