"use client";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useNavigate } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios"; // Assure-toi que cette instance est bien configurée
import { faUser,faSignOut, faBook, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";


export default function Sidebar() {
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


  


  // return (
  //   <aside className="w-64 bg-white p-4 shadow-md">
  //       <h1 className="text-xl text-center font-bold text-blue-600 mb-6">EduConnect</h1>
  //       <nav className="space-y-4 ">
  //         <button className="flex items-center w-full px-3 py-2 text-left text-white bg-blue-600 rounded">
  //           <FontAwesomeIcon icon={faUser} className="mr-3" /> Generale
  //         </button>
  //         <button
  //           onClick={() => navigate("/repetiteur/creer-profil")}
  //           className=" hover:text-white p-2 rounded hover:bg-blue-600 transition"
  //           >
  //            <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3" />mon profil de répétiteur
  //         </button>
  //         <button
  //           onClick={handleLogout}
  //           className=" hover:text-white p-2 rounded hover:bg-blue-600 transition"
  //         >
  //             <FontAwesomeIcon icon={faSignOut} className="mr-3" />Se déconnecter
  //       </button>
  //         <button className="flex items-center w-full px-3 py-2 text-left hover:bg-gray-100 rounded">
  //           <FontAwesomeIcon icon={faBook} className="mr-3" /> Cours
  //         </button>
  //       </nav>
  //     </aside>  );
    }


