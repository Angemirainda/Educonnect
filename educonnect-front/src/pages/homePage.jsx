"use client";
import React from "react";
import { Link } from "react-router-dom"; // Import du composant Link
import Footer from "../components/Footercompo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SubjectCategories from "../components/SubjectCategories";

function EduconnectLanding() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;900&family=Poppins:wght@600;700&display=swap"
      />
      <main className="">
        <div className="bg-gradient-to-t from-blue-500 via-blue-300 w-fuh-150 h-150 rounded-b-4xl box-border px-5 py-0 mx-auto my-0 w-full max-w-[1180px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
          <header className="flex justify-between items-center px-0 py-5 max-sm:flex-col max-sm:items-start">
            <h1 className="text-4xl font-bold text-blue-500">Educonnect</h1>
            <nav className="flex gap-5 max-sm:hidden">
              <a href="#" className="text-lg hover:text-blue-700 font-semibold text-black">
                Accueil
              </a>
              <a href="#" className="text-lg hover:text-blue-700 font-semibold text-black">
                Donner cours
              </a>
              <a href="#" className="text-lg hover:text-blue-700 font-semibold text-black">
                Contact
              </a>
              <div className="text-center p-2 rounded hover:bg-blue-500 cursor-pointer -mt-2">
                <a href="#" className="text-lg hover:text-blue-700 font-semibold text-black">
                  <p className="hover:text-white">Connexion</p>
                </a>
              </div>
            </nav>
          </header>
          <section className="px-0 py-12 text-center rounded-none">
            <h2 className="mb-10 text-5xl font-black mt-10 text-black">
              Trouvez le professeur qu'il <br /> vous faut
            </h2>
            <div className="flex justify-center items-center mb-12">
              <input
                type="text"
                placeholder="En quoi avec vous besoin d'aide?"
                className="px-5 py-4 text-2xl font-medium border-sky-300 bg-white border-solid bg-slate-50 border-[5px] rounded-[60px] text-black text-opacity-70 w-[600px] max-md:w-[400px] max-sm:w-full"
              />
              <button className="px-10 py-3 mr- text-2xl font-black text-white bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-[60px]">
                Rechercher
              </button>
            </div>
          </section>
          <SubjectCategories />
        </div>

        <div className="px-30">
          <div className="flex gap-20">
            <img src="image/Apropos.jpg" alt="" className="w-160 h-130" />
            <p className="text-xl font-medium mt-23">
              <span className="text-blue-500 font-bold text-3xl">Educonnect</span> est une plateforme de mise en relation entre parents soucieux pour l'avenir de leur enfants ayant des difficuelte scolaire, ou tout simplement souhaitant maintenir le niveau de leur enfants, et des repetiteurs qualifies et actifs pres a mettre leur services et leur connaissance pour former les jeunes. Nous mettons un point d'honneur a satisfaire autant que possibles ltoute personne venant chez nous raison pour laquelle nos repetiteurs sont choisi avec soins et un bilan sur nos services est fait chaque fin du mois avec les parents.
            </p>
          </div>
        </div>

        <h1 className="text-4xl text-center font-bold py- px-26">Comment ca fonctionne?</h1>
        <div>
          <div className="bg-gray-0 h-auto py-5">
            <div className="flex w-full space-x-15 justify-center items-center">
              <div className="justify-center items-center flex flex-col gap-5">
                <div className="flex rounded-full p-5 hover:bg-blue-500 hover:text-white text-blue-950 bg-white cursor-pointer w-5 h-5 text-blue-950 border font-semibold">
                  <p className="text-center -mt-3 -ml-1">1</p>
                </div>
                <div className="w-60 rounded-xl hover:border text-center bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer p-5">
                  <h3 className="font-semibold text-xl py-4">Faite une recherche</h3>
                  <p>
                    Allez sur la barre de recherche et entrer le profil repetiteur que vous voulez en precisant votre la ville, la matiere et le niveau de l'eleve.
                  </p>
                </div>
              </div>
              <div className="justify-center items-center flex flex-col gap-5">
                <div className="flex rounded-full p-5 hover:border text-center bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer w-5 h-5 text-white font-semibold">
                  <p className="text-center -mt-3 -ml-1">2</p>
                </div>
                <div className="flex gap-5">
                  <div className="w-60 rounded-xl border text-center hover:bg-blue-500 hover:text-white text-blue-950 bg-white cursor-pointer p-5">
                    <h3 className="font-semibold text-xl">Comparez et choisissez</h3>
                    <p>
                      Apres recherche, regarder tos les profil repetiteurs qui vous sont proposer pour trouver celui qui correspond le plus a vos attentes
                    </p>
                  </div>
                </div>
              </div>
              <div className="justify-center items-center flex flex-col gap-5">
                <div className="flex rounded-full p-5 hover:bg-blue-500 hover:text-white text-blue-950 bg-white cursor-pointer w-5 h-5 text-blue-950 border font-semibold">
                  <p className="text-center -mt-3 -ml-1">3</p>
                </div>
                <div className="w-60 rounded-xl hover:border text-center bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer p-5">
                  <h3 className="font-semibold text-xl py-3">Contacter nous!</h3>
                  <p>
                    Apres avoir trouver le repetiteur qu'il vous faut, contacter nous afin de prendre rendez vous avec celui ci via la messagerie ou via note page contact
                  </p>
                </div>
              </div>
              <div className="justify-center items-center flex flex-col gap-5">
                <div className="flex rounded-full p-5 hover:border text-center bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer w-5 h-5 font-semibold">
                  <p className="text-center -mt-3 -ml-1">4</p>
                </div>
                <div className="w-60 rounded-xl border text-center hover:bg-blue-500 hover:text-white text-blue-950 bg-white cursor-pointer p-5">
                  <h3 className="font-semibold text-xl py-3">Vous avez reussi!</h3>
                  <h1>
                    Le programme finalisez, vous aurez automatiquement un agenda qui marquera tout les repetiteurs engage et les rendez que vous avez
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="px-10 py-3 flex gap-10">
            <img src="/image/importance3.jpg" alt="" className="w-200 h-150" />
            <div className="mt-15">
              <div>
                <h3 className="text-4xl font-bold">Pourquoi choisir Educonnect?</h3>
                <p className="text-xl font-semibold py-7">
                  Des repetiteurs qualifier et engage apres une longue etude de dossiers et des tests et un systeme de paiement securise
                </p>
              </div>
              <div>
                <div className="flex gap-2 animate-in fade-in zoom-in">
                  <FontAwesomeIcon icon={faCheck} className="p-1 h-10 mt-4 rounded-full bg-blue-500 text-white" />
                  <p className="text-2xl font-medium py-3">Enseignant certifie et qualifie</p>
                </div>
                <div className="flex gap-2">
                  <FontAwesomeIcon icon={faCheck} className="p-1 h-10 mt-4 rounded-full bg-blue-500 text-white" />
                  <p className="text-2xl font-medium py-3">Rapidite de reponse</p>
                </div>
                <div className="flex gap-2">
                  <FontAwesomeIcon icon={faCheck} className="p-1 h-10 mt-4 rounded-full bg-blue-500 text-white" />
                  <p className="text-2xl font-medium py-3">Service client 24h/24</p>
                </div>
                <div className="flex gap-2">
                  <FontAwesomeIcon icon={faCheck} className="p-1 h-10 mt-4 rounded-full bg-blue-500 text-white" />
                  <p className="text-2xl font-medium py-3">Paiement securise</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-20 flex gap-10">
            <div className="mt-25">
              <div>
                <h3 className="text-4xl font-bold">Quels sont nos objectifs?</h3>
                <p className="text-xl font-semibold py-5">
                 Educonnect c'est fixe des objectifs clairs a atteindre afin de repondre au mieux aux attentes de nos clients et de nos repetiteurs.
                </p>
              </div>
              <div>
                <div className="flex gap-2">
                  <FontAwesomeIcon icon={faCheck} className="p-1 h-10 mt-4 rounded-full bg-blue-500 text-white" />
                  <p className="text-2xl font-medium py-3">Mettre en relation le parent et le repetiteur</p>
                </div>
                <div className="flex gap-2">
                  <FontAwesomeIcon icon={faCheck} className="p-1 h-10 mt-4 rounded-full bg-blue-500 text-white" />
                  <p className="text-2xl font-medium py-3">Former des jeunes competant</p>
                </div>
                <div className="flex gap-2">
                  <FontAwesomeIcon icon={faCheck} className="p-1 h-10 mt-4 rounded-full bg-blue-500 text-white" />
                  <p className="text-2xl font-medium py-3">Creer des emploies</p>
                </div>
              </div>
            </div>
            <img src="/image/importance.jpg" alt="" className="w-200 h-160 -mt-5" />
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default EduconnectLanding;