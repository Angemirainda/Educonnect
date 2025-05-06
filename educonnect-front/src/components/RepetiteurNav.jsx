import { NavLink } from 'react-router-dom';
import { useState } from 'react';


function RepetiteurNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    // { path: '/repetiteur/dashboard', icon: 'fas fa-chart-line', label: 'Dashboard' },
    { path: '/repetiteur/rendez_vous', icon: 'fas fa-users', label: 'Mes rendez vous' },
    { path: '/repetiteur/creer_profil', icon: 'fas fa-user', label: 'Creer mon profil' },
    { path: '/repetiteur/messagerie', icon: 'fas fa-message', label: 'Messagerie' },
    // { path: '/repetiteur/contrats', icon: 'fas fa-comments', label: 'contrats' },
   
  ];

  return (
    <>
      {/* Navbar fixe en haut */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-full mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo et titre à gauche */}
            <div className="flex items-center">
              <img
                src="../../image/logo.png" // Remplacez par l'URL de votre logo
                alt="Logo"
                className="w-8 h-8"
              />
              <span className="ml-3 text-lg font-semibold text-gray-900">
                EDUCONNECT repetiteur
              </span>
            </div>

            {/* Bouton hamburger à droite */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none lg:hidden"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>

              {/* Icône de notification */}
              <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
                <i className="fas fa-bell text-xl"></i>
              </button>

              {/* Image de profil */}
              <img
                src="../../image/Ellipse 6.png" // Remplacez par l'URL de l'image de profil
                alt="Profil"
                className="w-10 h-10 rounded-full object-cover"
              />

              {/* Bouton de déconnexion */}
              <button
                className="flex items-center px-4 py-2 text-sm text-red-600 hover:text-red-800 focus:outline-none"
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 z-40`}
      >
        <nav className="mt-8 px-4">
          <div className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`
                }
              >
                <i className={`${item.icon} w-5`}></i>
                <span className="ml-3">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </aside>

      {/* Overlay pour mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 lg:hidden z-30"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main content wrapper */}
      <div className={`pt-16 ${isSidebarOpen ? 'lg:ml-64' : ''} transition-all duration-300`}>
        <main className="p-1">
          {/* Le contenu de la page sera injecté ici */}
        </main>
      </div>
    </>
  );
}

export default RepetiteurNav;