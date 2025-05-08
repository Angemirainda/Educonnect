

import { useState, useRef, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cours, setCours] = useState([]); // État pour stocker les cours
  const [repetiteursActifs, setRepetiteursActifs] = useState(0); // État pour les répétiteurs actifs
  const dropdownRef = useRef(null);

  // Charger les cours associés au client
  useEffect(() => {
    const fetchCours = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/client/cours", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assurez-vous que le token est stocké
          },
        });
        setCours(response.data); // Mettre à jour l'état avec les cours récupérés
      } catch (error) {
        console.error("Erreur lors du chargement des cours :", error);
      }
    };

    fetchCours();
  }, []);

  // Charger les statistiques
  useEffect(() => {
    const fetchStatistiques = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/dashboard/statistiques", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assurez-vous que le token est stocké
          },
        });
        setRepetiteursActifs(response.data.repetiteurs_actifs); // Mettre à jour l'état avec les répétiteurs actifs
      } catch (error) {
        console.error("Erreur lors du chargement des statistiques :", error);
      }
    };

    fetchStatistiques();
  }, []);

  // Fermer le dropdown quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Accueil</h1>
        <p className="text-gray-600 mt-1">Bienvenue sur votre tableau de bord.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1: Nombre de rendez-vous */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Rendez-vous</p>
              <h2 className="text-3xl font-bold text-indigo-600 mt-1">{cours.length}</h2>
            </div>
            <div className="bg-indigo-100 p-3 rounded-full">
              <i className="fa fa-calendar text-indigo-600 text-xl"></i>
            </div>
          </div>
        </div>

        {/* Card 2: Répétiteurs disponibles */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Répétiteurs disponibles</p>
              <h2 className="text-3xl font-bold text-green-600 mt-1">{repetiteursActifs}</h2>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="fa fa-users text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        {/* Card 3: Messages non lus */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Messages non lus</p>
              <h2 className="text-3xl font-bold text-blue-600 mt-1">2</h2>
              <p className="text-gray-500 text-sm mt-2 flex items-center">
                <i className="fa fa-file-text mr-1 text-red-600"></i>
                Factures en attente: <span className="font-medium ml-1">1</span>
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="fas fa-message text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Section des prochains rendez-vous */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Mes prochains rendez-vous</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Répétiteur
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Matières
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Heure
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
               
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
  {cours.map((coursItem) => (
    <tr key={coursItem.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
            <i className="fa fa-user text-indigo-600"></i>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {coursItem.repetiteur?.name || "N/A"}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {JSON.parse(coursItem.matieres).join(", ")}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {coursItem.heure_debut} - {coursItem.heure_fin}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {coursItem.statut || "À venir"}
        </span>
      </td>
    </tr>
  ))}
</tbody>
       
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;