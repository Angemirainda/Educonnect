

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCheck, faArrowRight,  faStar } from "@fortawesome/free-solid-svg-icons";




const Services = () => {
  const [repetiteurs, setRepetiteurs] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredRepetiteurs, setFilteredRepetiteurs] = useState([]);
  const navigate = useNavigate();
  

  // Récupération automatique des répétiteurs depuis ta base via API
  useEffect(() => {
    axios.get('http://localhost:8000/api/profils-repetiteurs') // Remplace l'URL si besoin
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
    <>
    <div className='bg-white py-4 rounded'>
   
    <div className="px-15">
     
     <h1 className="text-3xl font-bold m-5 text-center">Trouver un répétiteur</h1>

     <div className="flex gap-3 mb-6">
      
      <div className="flex items-center w-full gap-2 p-3 border rounded-lg bg-white">
  <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-xl ml-2" />
  <input
    type="text"
    placeholder="Ex: répétiteur de mathematiques 6e vivant à Douala"
    className="flex-1 w-full border-none outline-none focus:ring-0"
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
  />
</div>
       <button
         className="bg-blue-500 text-white px-6 py-3 rounded"
         onClick={handleSearch}
       >
         Rechercher
       </button>
     </div>
     <div className='flex w-full justify-center'>
     <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
      
      {filteredRepetiteurs.map(rep => (
        <div key={rep.id} className="relative w-80  hover:shadow-lg transition">
          {console.log(rep.photo)}
         
          <img
            src={rep.photo ? `http://localhost:8000/storage/${rep.photo}` : '/default-avatar.png'}
            alt={rep.nom}
            className="w-full h-[300px] object-cover rounded-tl-lg rounded-tr-lg mb-4"
          />
           <div className="absolute top-[260px] left-[100px] flex gap-1 w-full justify-center items-center ">
             <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
             <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
             <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
             <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                           
           </div>
           <p className='font-bold text-blue-500 text-center text-xl'>50.000 fcfa</p>
          <h2 className="text-xl text-center font-semibold">{rep.nom}</h2>
          <p className='text-center'>Âge: {rep.age} ans</p>
          <p className='text-center'>Ville: {rep.ville}</p>
          <div className='flex w-full justify-center'> 
           <button
             onClick={() => handleVoirPlus(rep.id)}
             className="mt-4 w-40 font-semibold text-lg bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 my-5 rounded-full"
           >
             Voir plus
           </button>
          </div>
        </div>
      ))}
    </div>

     </div>

        </div>
 
    </div>
    </>
      );
};

export default Services;
