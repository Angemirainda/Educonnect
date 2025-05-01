import { NavLink } from 'react-router-dom';
import { useState } from 'react';



function AdminNavbar() {
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 

  const navItems = [
    { path: '/admin/dashboard', icon: 'fas fa-chart-line', label: 'Dashboard' },
    { path: '/admin/repetiteurs', icon: 'fas fa-user', label: 'repetiteurs' },
    { path: '/admin/clients', icon: 'fas fa-users', label: 'clients' },
    { path: '/admin/messagerie', icon: 'fas fa-message', label: 'messagerie' },
    { path: '/admin/contrats', icon: 'fas fa-comments', label: 'contrats' },
    { path: '/admin/parametres', icon: 'fas fa-comments', label: 'parametres' }
  ];

  return (
    <>
      {/* Navbar fixe en haut */}
      <nav className="fixed top-0 left-0 right-0 bg-white white:bg-gray-800 shadow-md z-50">
        <div className="max-w-full mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md text-gray-600 white:text-gray-300 hover:bg-gray-100 white:hover:bg-gray-700 focus:outline-none"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
              <div className="flex items-center ml-4">
                
                <span className="ml-2 text-lg font-semibold text-gray-900 white:text-white">
                  EDUCONNECT Admin
                </span>
              </div>
            </div>

           
            <div className="flex items-center space-x-4">
              {/* Icône de notification */}
              <button className="p-2 rounded-full text-gray-600 dark:text-dark-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <i className="fas fa-bell text-xl"></i> {/* Icône de notification */}
              </button>

              {/* Image de profil */}
              <img
                src="../../image/Ellipse 6.png" // Remplacez par l'URL de l'image de profil
                alt="Profil"
                className="w-10 h-10 rounded-full object-cover"
              />

              {/* Bouton de déconnexion */}
              <button
                className="flex items-center px-4 py-2 text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-dark-300"
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white white:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
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
                      ? 'bg-primary text-dark hover:bg-blue-100 white:hover:bg-gray-700'
                      : 'text-gray-600 white:text-gray-300 hover:bg-gray-100 white:hover:bg-gray-700'
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
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main content wrapper */}
      <div className={`pt-16 ${isSidebarOpen ? 'lg:ml-64' : ''} transition-all duration-300`}>
        <main className="">
          {/* Le contenu de la page sera injecté ici */}
        </main>
      </div>
    </>
  );
}

export default AdminNavbar;