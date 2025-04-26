// src/pages/RepetiteurDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RepetiteurDetail = () => {
  const { id } = useParams();
  const [repetiteur, setRepetiteur] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/repetiteurs/${id}`)
      .then((response) => response.json())
      .then((data) => setRepetiteur(data))
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, [id]);

  if (!repetiteur) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <img
          src={repetiteur.photo}
          alt={repetiteur.nom}
          className="w-40 h-40 rounded-full object-cover mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold text-center">{repetiteur.nom}</h1>
        <p className="text-center text-gray-600">{repetiteur.age} ans - {repetiteur.ville}</p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{repetiteur.description}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Cours</h2>
          <ul className="list-disc list-inside text-gray-700">
            {repetiteur.cours.map((cours, index) => (
              <li key={index}>{cours}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Niveaux</h2>
          <ul className="list-disc list-inside text-gray-700">
            {repetiteur.niveaux.map((niveau, index) => (
              <li key={index}>{niveau}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Disponibilités</h2>
          <ul className="list-disc list-inside text-gray-700">
            {repetiteur.disponibilites.map((disp, index) => (
              <li key={index}>{disp}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RepetiteurDetail;
