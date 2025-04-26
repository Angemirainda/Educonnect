
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../api/axios";

// export default function ClientDashboard() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     } else {
//       navigate("/admin/login");
//     }
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       await axios.post(
//         "/admin/logout",
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // Supprimer les données de l'utilisateur et rediriger
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//       navigate("/admin/login");
//     } catch (err) {
//       console.error("Erreur lors de la déconnexion :", err);
//     }
//   };

//   return (
//     <div className="p-6">
//       {user && (
//         <h1 className="text-2xl font-bold">Bienvenue, {user.name} </h1>
//       )}
//       <button
//         onClick={handleLogout}
//         className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700"
//       >
//         Se déconnecter
//       </button>
//     </div>
//   );
// }
import { faUsers, faChalkboardTeacher, faUserGraduate, faComments, faCog, faBook, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="">
        {/* Header */}
        <div className="mb-8">
          
          {/* <h2 className="text-2xl font-semibold text-gray-700 mt-2 ">Tableau de bord Administrateur</h2> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Vue d'ensemble */}
            <div className="bg-white h-full rounded-lg shadow p-4">
              <h1 className="text-3xl font-bold text-blue-500 ">EduConnect</h1>
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <FontAwesomeIcon icon={faChartBar} className="mr-2 text-blue-600" />
                Vue d'ensemble
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center p-2 hover:bg-blue-50 rounded cursor-pointer">
                  <FontAwesomeIcon icon={faUsers} className="mr-2 text-blue-500" />
                  Utilisateurs
                </li>
                <li className="flex items-center p-2 hover:bg-blue-50 rounded cursor-pointer">
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2 text-blue-500" />
                  Répétiteurs
                </li>
                <li className="flex items-center p-2 hover:bg-blue-50 rounded cursor-pointer">
                  <FontAwesomeIcon icon={faChartBar} className="mr-2 text-blue-500" />
                  Statistiques
                </li>
                <li className="flex items-center p-2 hover:bg-blue-50 rounded cursor-pointer">
                  <FontAwesomeIcon icon={faComments} className="mr-2 text-blue-500" />
                  Msgs Clients
                </li>
                <li className="flex items-center p-2 hover:bg-blue-50 rounded cursor-pointer">
                  <FontAwesomeIcon icon={faComments} className="mr-2 text-blue-500" />
                  Msgs Répétiteurs
                </li>
                <li className="flex items-center p-2 hover:bg-blue-50 rounded cursor-pointer">
                  <FontAwesomeIcon icon={faCog} className="mr-2 text-blue-500" />
                  Paramètres
                </li>
              </ul>
            </div>

           
           
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Total Utilisateurs */}
              <div className="bg-white rounded-lg shadow p-6 flex items-center">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <FontAwesomeIcon icon={faUsers} className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <p className="text-gray-500">Total Utilisateurs</p>
                  <p className="text-3xl font-bold text-blue-800">248</p>
                </div>
              </div>

              {/* Répétiteurs actifs */}
              <div className="bg-white rounded-lg shadow p-6 flex items-center">
                <div className="bg-green-100 p-4 rounded-full mr-4">
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="text-green-600 text-2xl" />
                </div>
                <div>
                  <p className="text-gray-500">Répétiteurs actifs</p>
                  <p className="text-3xl font-bold text-green-800">42</p>
                </div>
              </div>

              {/* Clients actifs */}
              <div className="bg-white rounded-lg shadow p-6 flex items-center">
                <div className="bg-purple-100 p-4 rounded-full mr-4">
                  <FontAwesomeIcon icon={faUserGraduate} className="text-purple-600 text-2xl" />
                </div>
                <div>
                  <p className="text-gray-500">Clients actifs</p>
                  <p className="text-3xl font-bold text-purple-800">186</p>
                </div>
              </div>
            </div>

            {/* Cours récents */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-4">Cours récents</h3>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="border-b pb-3 last:border-b-0">
                    <p className="font-medium">Mathématiques - Terminale</p>
                    <p className="text-gray-600">Martin D. & Sophie L</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Cours récents */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-4">Cours récents</h3>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="border-b pb-3 last:border-b-0">
                    <p className="font-medium">Mathématiques - Terminale</p>
                    <p className="text-gray-600">Martin D. & Sophie L</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;