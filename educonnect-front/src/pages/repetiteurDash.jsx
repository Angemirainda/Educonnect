
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faSignOut, faBook, faChalkboardTeacher, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import axios from "../api/axios"; // Assure-toi que cette instance est bien configurée
// import coursList from '../components/CoursList';
// import coursForm from '../components/courForm';

// export default function DashboardRepetiteur() {
//   const [nom, setNom] = useState("");
//   const [matieres, setMatieres] = useState("");
//   const [jours, setJours] = useState("");
//   const [heure, setHeure] = useState("");
//    const [coursList, setCoursList] = useState([]);
//   const [currentCours, setCurrentCours] = useState(null);
 

//   const handleEdit = (cours) => {
//     setEditingCours(cours);
//   };
  
//   const handleDelete = async (id) => {
//     if (window.confirm("Supprimer ce cours ?")) {
//       await deleteCours(id);
//       window.location.reload(); // Ou utilise setState local pour mettre à jour sans reload
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const [heure_debut, heure_fin] = heure.split("-"); // exemple: "10:00-12:00"

//     const data = {
//       name: nom,
//       matieres: matieres.split(",").map(m => m.trim()), // "Maths, Physique" -> ["Maths", "Physique"]
//       jours: jours.split(",").map(j => j.trim()),       // "lundi, mercredi" -> ["lundi", "mercredi"]
//       heure_debut,
//       heure_fin
//     };

//     const token = localStorage.getItem("token");

//     try {
//       const res = await axios.post("http://localhost:8000/api/cours", data, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Ajout du token ici
//         },
//       });

//       if (res.status === 201) {
//         alert("Cours ajouté avec succès !");
//       } else {
//         alert("Erreur: " + JSON.stringify(res.data));
//       }
//     } catch (err) {
//       alert("Erreur réseau: " + err.message);
//     }
//   };

//   const [repetiteur, setRepetiteur] = useState(null); // Pour stocker les infos du user connecté
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userData = localStorage.getItem("user");
//     const token = localStorage.getItem("token");

//     // Si l'utilisateur n'est pas connecté => redirection vers login
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

//       // Nettoyage des infos stockées
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");

//       // Redirection vers la page de login
//       navigate("/repetiteur/login");
//     } catch (err) {
//       console.error(err);
//       alert("Erreur lors de la déconnexion.");
//     }
//   };

//   // Affiche rien tant que les données ne sont pas chargées
//   if (!repetiteur) return null;

//   return (
//     <div>
//       <div className="flex h-full bg-gray-100 font-sans">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white p-4 shadow-md">
//           <h1 className="text-2xl text-center font-bold text-blue-600 mb-6">Educonnect</h1>
//           <nav className="space-y-4">
//             <button className="flex items-center w-full px-3 py-2 text-left text-white bg-blue-600 rounded">
//               <FontAwesomeIcon icon={faBook} className="mr-3" /> Mes cours
//             </button>
//             <button
//               onClick={() => navigate("/repetiteur/creer-profil")}
//               className=" hover:text-white p-2 rounded hover:bg-blue-600 transition"
//             >
//               <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3" />mon profil de répétiteur
//             </button>
//             <button
//               onClick={() => navigate("/repetiteur/creer-profil")}
//               className=" hover:text-white p-2 rounded hover:bg-blue-600 transition"
//             >
//               <FontAwesomeIcon icon={faEnvelope} className="mr-3" />Messagerie
//             </button>
//             <button
//               onClick={handleLogout}
//               className=" hover:text-white p-2 rounded hover:bg-blue-600 transition"
//             >
//               <FontAwesomeIcon icon={faSignOut} className="mr-3" />Se déconnecter
//             </button>
//           </nav>
//         </aside>

//         {/* Main Dashboard */}
//         <main className="flex-1 p-6">
//           <header className="flex justify-between items-center mb-6">
//             <h2 className="text-4xl font-semibold">Dashboard</h2>
//             <h1 className="text-xl font-bold text-center ">
//               Bienvenue, {repetiteur.name}
//             </h1>
//           </header>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//             <div className="bg-white p-4 rounded shadow">
//               <p className="text-gray-500">Total cours</p>
//               <p className="text-2xl font-bold">10</p>
//             </div>
//             <div className="bg-white p-4 rounded shadow">
//               <p className="text-gray-500">Total cours termine</p>
//               <p className="text-2xl font-bold">5</p>
//             </div>
//             <div className="bg-white p-4 rounded shadow">
//               <p className="text-gray-500">total cours en cours</p>
//               <p className="text-2xl font-bold">5</p>
//             </div>
//           </div>

//           <form action="" className=" bg-white space-y-5 p-6 rounded shadow-lg" onSubmit={handleSubmit}>
//             <h1 className="text-xl font-semibold">Ajouter un cours/rdv</h1>
//             <input
//               type="text"
//               placeholder="Nom client..."
//               value={nom}
//               onChange={(e) => setNom(e.target.value)}
//               className="border rounded w-full p-2"
//             />
//             <br />
//             <input
//               type="text"
//               placeholder="Matière..."
//               value={matieres}
//               onChange={(e) => setMatieres(e.target.value)}
//               className="border rounded w-full p-2"
//             />
//             <br />
//             <input
//               type="text"
//               placeholder="Jours..."
//               value={jours}
//               onChange={(e) => setJours(e.target.value)}
//               className="border rounded w-full p-2"
//             />
//             <br />
//             <input
//               type="text"
//               placeholder="Heure..."
//               value={heure}
//               onChange={(e) => setHeure(e.target.value)}
//               className="border rounded w-full p-2"
//             />
//             <button
//               type="submit"
//               className="p-4 rounded text-xl font-semibold bg-blue-500 hover:bg-blue-700 text-white"
//             >
//               Ajouter
//             </button>
//           </form>
//           <div className="max-w-xl mx-auto mt-10 px-4">

//           {/* <TaskForm onSubmit={handleCreateOrUpdate} currentTask={editingTask} />

//           <div className="mt-6">
//             <TaskList
//               tasks={tasks}
//               onToggle={handleToggle}
//               onDelete={handleDelete}
//               onEdit={handleEdit}
//             />
//           </div> */}
// </div>
//         </main>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOut,
  faBook,
  faChalkboardTeacher,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import axios from "../api/axios";
import CoursForm from "../components/CoursForm";
import CoursList from "../components/CoursList";

export default function DashboardRepetiteur() {
  const [repetiteur, setRepetiteur] = useState(null);
  const [coursList, setCoursList] = useState([]);
  const [currentCours, setCurrentCours] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!userData || !token) {
      navigate("/repetiteur/login");
      return;
    }

    setRepetiteur(JSON.parse(userData));
    fetchCours();
  }, [navigate]);

  const fetchCours = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get("http://localhost:8000/api/cours", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCoursList(res.data);
    } catch (err) {
      console.error("Erreur chargement cours", err);
    }
  };

  const handleSubmitCours = async (data) => {
    const token = localStorage.getItem("token");

    try {
      if (currentCours) {
        await axios.patch(`http://localhost:8000/api/cours/${currentCours.id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post("http://localhost:8000/api/cours", data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      fetchCours();
      setCurrentCours(null);
    } catch (err) {
      console.error("Erreur lors de l'ajout/modif du cours", err);
    }
  };

  const handleDeleteCours = async (id) => {
    const token = localStorage.getItem("token");

    if (window.confirm("Supprimer ce cours ?")) {
      try {
        await axios.delete(`http://localhost:8000/api/cours/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCoursList((prev) => prev.filter((c) => c.id !== id));
      } catch (err) {
        console.error("Erreur suppression cours", err);
      }
    }
  };

  const handleToggleCours = async (id) => {
    console.log("Toggle cours appelé pour l'id :", id);
    const token = localStorage.getItem("token");
  
    // On vérifie si le cours est terminé ou non et on envoie le bon statut
    const coursToUpdate = coursList.find(cours => cours.id === id);
    const newStatut = coursToUpdate.statut === 'Termine' ? 'en_cours' : 'termine';
    console.log("Envoi PATCH avec statut :", newStatut);
    // const newStatut = coursToUpdate.completed ? 'en_cours' : 'termine';  // Change 'completed' to 'statut' if you have a "statut" field
  
    try {
      const response = await axios.patch(`http://localhost:8000/api/cours/${id}/statut`, { statut: newStatut }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Réponse du PATCH:", response.data);
      fetchCours();  // Rechargement de la liste des cours
    } catch (err) {
      // console.error("Erreur mise à jour statut cours", err);
      console.error("Erreur mise à jour statut cours :", err?.response || err.message || err);
    }
  };
  
  
  
  

  const handleEditCours = (cours) => {
    setCurrentCours(cours);
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "/repetiteurs/logout",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/repetiteur/login");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la déconnexion.");
    }
  };

  if (!repetiteur) return null;

  return (
    <div>
      <div className="flex h-full bg-gray-100 font-sans">
        <aside className="w-64 bg-white p-4 shadow-md">
          <h1 className="text-2xl text-center font-bold text-blue-600 mb-6">Educonnect</h1>
          <nav className="space-y-4">
            <button className="flex items-center w-full px-3 py-2 text-left text-white bg-blue-600 rounded">
              <FontAwesomeIcon icon={faBook} className="mr-3" /> Mes cours
            </button>
            <button
              onClick={() => navigate("/repetiteur/creer-profil")}
              className="hover:text-white p-2 rounded hover:bg-blue-600 transition"
            >
              <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3" /> Mon profil de répétiteur
            </button>
            <button
              onClick={() => navigate("/repetiteur/creer-profil")}
              className="hover:text-white p-2 rounded hover:bg-blue-600 transition"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-3" /> Messagerie
            </button>
            <button
              onClick={handleLogout}
              className="hover:text-white p-2 rounded hover:bg-blue-600 transition"
            >
              <FontAwesomeIcon icon={faSignOut} className="mr-3" /> Se déconnecter
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <header className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-semibold">Dashboard</h2>
            <h1 className="text-xl font-bold text-center">Bienvenue, {repetiteur.name}</h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-500">Total cours</p>
              <p className="text-2xl font-bold">{coursList.length}</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-500">Cours terminés</p>
              <p className="text-2xl font-bold">
                {coursList.filter(c => c.statut === 'termine').length}
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-500">Cours en cours</p>
              <p className="text-2xl font-bold">
                {coursList.filter(c => c.statut !== 'en').length}
              </p>
            </div>
          </div>

          <div className="bg-white space-y-5 p-6 rounded shadow-lg">
            <CoursForm currentCours={currentCours} onSubmit={handleSubmitCours} />
          </div>

          <div className="max-w-xl mx-auto mt-10 px-4">
            <CoursList
              coursList={coursList}
              onToggle={handleToggleCours}
              onDelete={handleDeleteCours}
              onEdit={handleEditCours}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
