// // src/pages/Services.jsx

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Services = () => {
//   const [repetiteurs, setRepetiteurs] = useState([]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/repetiteurs")
//       .then((response) => response.json())
//       .then((data) => setRepetiteurs(data))
//       .catch((error) => console.error("Erreur lors du chargement :", error));
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Nos Répétiteurs</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {repetiteurs.map((rep) => (
//           <div key={rep.id} className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
//             <img
//               src={rep.photo}
//               alt={rep.nom}
//               className="w-32 h-32 rounded-full object-cover mb-4"
//             />
//             <h2 className="text-xl font-semibold">{rep.nom}</h2>
//             <p className="text-gray-500">{rep.age} ans</p>
//             <p className="text-gray-500">{rep.ville}</p>
//             <Link
//               to={`/repetiteur/${rep.id}`}
//               className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
//             >
//               Voir plus
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [repetiteurs, setRepetiteurs] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredRepetiteurs, setFilteredRepetiteurs] = useState([]);
  const navigate = useNavigate();

  // Récupération automatique des répétiteurs depuis ta base via API
  useEffect(() => {
    axios.get('http://localhost:8000/api/repetiteurs') // Remplace l'URL si besoin
      .then(response => {
        setRepetiteurs(response.data);
        setFilteredRepetiteurs(response.data); // Par défaut, afficher tous les répétiteurs
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des répétiteurs:', error);
      });
  }, []);

  // Fonction pour analyser la phrase et extraire matière, niveau, ville
  const parseSearchInput = (input) => {
    const keywords = input.toLowerCase();

    // Exemple de listes à reconnaître automatiquement
    const matieres = ['maths', 'francais', 'physique', 'chimie', 'anglais', 'svt', 'informatique'];
    const niveaux = ['6e', '5e', '4e', '3e', '2nd', '1er', 'terminale'];
    const villes = ['douala', 'yaoundé', 'bafoussam', 'kribi', 'limbe', 'garoua'];

    let matiereTrouvee = matieres.find(m => keywords.includes(m));
    let niveauTrouve = niveaux.find(n => keywords.includes(n));
    let villeTrouvee = villes.find(v => keywords.includes(v));

    return { matiere: matiereTrouvee, niveau: niveauTrouve, ville: villeTrouvee };
  };

  // Fonction de recherche intelligente
  const handleSearch = () => {
    const { matiere, niveau, ville } = parseSearchInput(searchInput);
  
    if (!matiere && !niveau && !ville) {
      setFilteredRepetiteurs(repetiteurs);
      return;
    }
  
    const results = repetiteurs.map(rep => {
      let score = 0;
      if (matiere && Array.isArray(rep.cours) && rep.cours.join(' ').toLowerCase().includes(matiere)) score += 1;
      if (niveau && typeof rep.niveaux === 'string' && rep.niveaux.toLowerCase().includes(niveau)) score += 1;
      if (ville && typeof rep.ville === 'string' && rep.ville.toLowerCase().includes(ville)) score += 1;
      return { ...rep, score };
    });
  
    const sortedResults = results
      .filter(rep => rep.score > 0)
      .sort((a, b) => b.score - a.score);
  
    setFilteredRepetiteurs(sortedResults);
  };
  
  

  // Redirection vers la page profil
  const handleVoirPlus = (id) => {
    navigate(`/profil/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trouver un répétiteur</h1>

      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Ex: répétiteur de maths 6e vivant à Douala"
          className="flex-1 p-3 border rounded-l-lg"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-r-lg"
          onClick={handleSearch}
        >
          Rechercher
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepetiteurs.map(rep => (
          <div key={rep.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <img
              src={rep.photoUrl || '/default-avatar.png'} // Mettre une image par défaut
              alt={rep.nom}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{rep.nom}</h2>
            <p>Âge: {rep.age} ans</p>
            <p>Ville: {rep.ville}</p>
            <button
              onClick={() => handleVoirPlus(rep.id)}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Voir plus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
