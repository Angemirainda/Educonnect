// src/pages/RepetiteurDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar1";

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
    <>
    <div>
      <Navbar />
    <div className="container mt-20  mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl ">
      <div className="flex w-full justify-between px-40  gap-20 px-4">
        <div className="mt-25  ">
            <h1 className="text-6xl font-bold text-center">{repetiteur.nom}</h1>
            <p className="text-center text-3xl mt-8">{repetiteur.age} ans - {repetiteur.ville}</p>
            <div className="w-full flex justify-center mt-8">
              <button className="p-5 bg-blue-500 hover:bg-blue-700 font-semibold text-white text-2xl rounded">Entrer en contact</button>
            </div>
        
        </div>
        <div className="">
          <img
            src={repetiteur.photo ? `http://localhost:8000/storage/${repetiteur.photo}` : '/default-avatar.png'}
            alt={repetiteur.nom}
            className="w-100 h-100 rounded object-cover mx-auto "
          />
       </div>

      </div>
        <div className="px-3">
          <h2 className="text-3xl font-bold m-10 text-center">A PROPOS DE MOI</h2>
          <div>
          <div className="flex gap-10 rounded-xl hover:shadow-lg ">
            <img src="/image/hero1.jpg" alt="" className="w-330 h-110 " />
           <div>
            <p className="mt-8 text-2xl px-5">{repetiteur.description}</p>
            <div className="px-5 mt-40 w-full flex justify-end">
              <button className=" p-5 bg-blue-500 hover:bg-blue-700 font-bold text-white text-lg rounded">Entrer en contact</button>
            </div>
           </div>
          </div>
          </div>
         
        </div>

        <div className="mt-8">
          <h2 className="text-3xl text-center font-bold mb-2">Cours</h2>
         <div>
          <img src="/image/" alt="" />
          <ul className=" lilist-discst-inside text-gray-700">
            {repetiteur.cours.map((cours, index) => (
              <li key={index}>{cours}</li>
            ))}
          </ul>
         </div>
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

    </div>
    </>
      );
};

export default RepetiteurDetail;
