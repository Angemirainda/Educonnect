

"use client";
import * as React from "react";
import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // état pour gérer l'ouverture du menu hamburger

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // dès qu'on scrolle de 20px ou plus
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={` flex fixed  top-0 z-50 w-full px-15 items-center py-5 transition-all duration-300 ${
          isScrolled ? "bg-blue-500/50 backdrop-blur-md shadow-md" : ""
        } max-sm:flex-col max-sm:items-start`}
      >
       

        {/* Menu pour grands écrans */}
        <nav className=" w-full justify-between flex">
         <div className="flex gap-2">
          <img src="/image/1.png" alt="logoEduconnect" className="w-20 rounded-full object-cover -mt-4" />
          <h1 className={`text-4xl font-bold ${isScrolled ? "text-white" : "text-blue-500"}`}>
            Educonnect
          </h1>
         </div>
          <div className=" flex gap-5 mt-2">
            <a
                href="/home"
                className={`text-lg font-semibold ${isScrolled ? "text-white hover:text-blue-700" : "text-black hover:text-blue-700"}`}
              >
                <p>Accueil</p>
              </a>
              <a
                href="repetiteur/register"
                className={`text-lg font-semibold ${isScrolled ? "text-white hover:text-blue-700" : "text-black hover:text-blue-700"}`}
              >
              <p> Donner cours</p>
              </a>
              <a
                href="#"
                className={`text-lg font-semibold ${isScrolled ? "text-white hover:text-blue-700" : "text-black hover:text-blue-700"}`}
              >
              <p> Contact</p>
              </a>
            </div>
            <div className="flex gap-5">
              <a href="/client/login" className={`text-lg font-semibold ${isScrolled ? "text-white" : "text-black"}`}>
                <p className="text-white  text-center p-2 rounded bg-blue-500 hover:bg-blue-600 cursor-pointer -mt-2">Connexion</p>
              </a>
              <a href="/client/register" className={`text-lg font-semibold ${isScrolled ? "text-white" : "text-black"}`}>
                <p className="hover:text-white  text-center p-1.5 rounded border border-blue-500 border-[2.5px] hover:bg-blue-500 cursor-pointer -mt-2">Inscription</p>
              </a>
            </div>
            
        </nav>

        {/* Menu hamburger pour petits écrans */}
        <div className="flex items-center max-sm:flex-col max-sm:w-full">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle le menu burger
            className="text-3xl max-sm:block max-sm:ml-auto sm:hidden"
          >
            &#9776; {/* Icône hamburger */}
          </button>
        </div>
      </header>

      {/* Menu déroulant mobile */}
      {isMenuOpen && (
        <nav className="flex flex-col items-center max-sm:flex max-sm:w-full max-sm:pt-5 max-sm:bg-white max-sm:absolute max-sm:left-0 max-sm:right-0 max-sm:top-16 max-sm:shadow-lg">
          <a
            href="#"
            className={`text-lg font-semibold ${isScrolled ? "text-white hover:text-blcak" : "text-black hover:text-blue-700"} py-3`}
          >
            Accueil
          </a>
          <a
            href="#"
            className={`text-lg font-semibold ${isScrolled ? "text-white hover:text-gray-200" : "text-black hover:text-blue-700"} py-3`}
          >
            Donner cours
          </a>
         
        </nav>
      )}
    </>
  );
}

export default Navbar;

