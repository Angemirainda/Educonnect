// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../api/axios"; // assure-toi que ton instance axios utilise bien le bon baseURL

// export default function DashboardRepetiteur() {
//   const [repetiteur, setRepetiteur] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userData = localStorage.getItem("user");
//     const token = localStorage.getItem("token");

//     if (!userData || !token) {
//       navigate("/repetiteur/login");
//       return;
//     }

//     setRepetiteur(JSON.parse(userData));
//   }, [navigate]);

//   const handleLogout = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       await axios.post(
//         "/repetiteurs/logout",
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       navigate("/repetiteur/login");
//     } catch (err) {
//       console.error(err);
//       alert("Erreur lors de la déconnexion.");
//     }
//   };

//   if (!repetiteur) return null;

//   return (
//     <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg">
//       <h1 className="text-3xl font-bold text-center mb-6">
//         Bienvenue, {repetiteur.name} 👋
//       </h1>

//       <div className="mt-6 text-center">
//         <button
//           onClick={handleLogout}
//           className="bg-red-600 text-white px-5 py-2 rounded-xl hover:bg-red-700"
//         >
//           Se déconnecter
//         </button>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios"; // Assure-toi que cette instance est bien configurée

export default function DashboardRepetiteur() {
  const [repetiteur, setRepetiteur] = useState(null); // Pour stocker les infos du user connecté
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    // Si l'utilisateur n'est pas connecté => redirection vers login
    if (!userData || !token) {
      navigate("/repetiteur/login");
      return;
    }

    setRepetiteur(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "/repetiteurs/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Nettoyage des infos stockées
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Redirection vers la page de login
      navigate("/repetiteur/login");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la déconnexion.");
    }
  };

  // Affiche rien tant que les données ne sont pas chargées
  if (!repetiteur) return null;

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Bienvenue, {repetiteur.name} 👋
      </h1>

      <div className="mt-8 flex flex-col items-center gap-4">
        {/*  Bouton vers la page de création de profil */}
        <button
          onClick={() => navigate("/repetiteur/creer-profil")}
          className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
        >
          Créer mon profil de répétiteur
        </button>

        {/*  Bouton de déconnexion */}
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
