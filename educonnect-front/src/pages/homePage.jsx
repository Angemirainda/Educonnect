
"use client";
import React from "react";
import { Link } from "react-router-dom"; // Import du composant Link
import Footer from "../components/Footercompo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import SubjectCategories from "../components/SubjectCategories";



function EduconnectLanding() {

  

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;900&family=Poppins:wght@600;700&display=swap"
      />
      <main className="">
        
        <div className="bg-gradient-to-t from-blue-500 via-blue-300  w-fuh-150 h-150 rounded-b-4xl box-border px-5 py-0 mx-auto my-0 w-full max-w-[1180px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
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
                className=" px-5 py-4 text-2xl font-medium border-sky-300 bg-white border-solid bg-slate-50 border-[5px] rounded-[60px] text-black text-opacity-70 w-[600px] max-md:w-[400px] max-sm:w-full"
              />
              <button className="px-10 py-3 mr- text-2xl font-black text-white bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-[60px]">
                Rechercher
              </button>
            </div>
          </section>
          <SubjectCategories />
        </div>
        <div className="px-30">
        {/* <h1 className="text-2xl font-bold rounded-t-xl py-4">C'est quoi Educonnect?</h1> */}
          <div className="flex gap-20 ">
           <img src="image/capture.png" alt="" className="w-160 h-130 " />
           <p className="text-xl font-medium mt-23"> <span className="text-blue-500 font-bold text-3xl">Educonnect</span> est une plateforme de mise en relation entre parents soucieux pour l'avenir de leur enfants ayant des difficuelte scolaire, ou tout simplement 
              souhaitant maintenir le niveau de leur enfants, et des repetiteurs qualifies et actifs pres a mettre leur services et leur connaissance pour former 
              les jeunes. Nous mettons un point d'honneur a satisfaire autant que possibles ltoute personne venant chez nous raison pour laquelle nos repetiteurs
              sont choisi avec soins et un bilan sur nos services est fait chaque fin du mois avec les parents.
           </p>
          </div>
        </div>
        <h1 className="text-3xl text-center font-bold py- px-26">Comment ca fonctionne?</h1>
        <div>
        <div  className=" bg-gray-0 h-auto py-5">
           <div className="flex w-fullspace-x-15 justify-center items-center  py-5 space-x-70"> 
            <div className=" flex rounded-full p-5 hover:bg-blue-500 hover:text-white text-blue-950 bg-white cursor-pointer w-5 h-5 text-blue-950 border font-semibold"><p className="text-center -mt-3 -ml-1">1</p></div>
            <div className=" flex rounded-full p-5  hover:border text-center bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer  w-5 h-5 text-white font-semibold"><p className="text-center -mt-3 -ml-1">2</p></div>
            <div className=" flex rounded-full p-5 hover:bg-blue-500 hover:text-white text-blue-950 bg-white cursor-pointer w-5 h-5 text-blue-950 border font-semibold"><p className="text-center -mt-3 -ml-1">3</p></div>
            <div className=" flex rounded-full p-5 hover:border text-center bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer w-5 h-5 font-semibold"><p className="text-center -mt-3 -ml-1">4</p></div>
          </div>
          <div className="flex w-full space-x-15 justify-center items-center ">
            <div className="w-60 rounded-xl hover:border text-center bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer  p-5">
              <h3 className="font-semibold text-xl py-4">Faite une recherche</h3>
              <p className="">Allez sur la barre de recherche et entrer le profil repetiteur que vous voulez en precisant votre 
                la ville, la matiere et le niveau de l'eleve.
              </p>
            </div>
            <div  className="w-60 rounded-xl border text-center hover:bg-blue-500 hover:text-white text-blue-950 bg-white cursor-pointer  p-5">
              <h3  className="font-semibold text-xl ">Comparez et choisissez</h3>
              <p className="">Apres recherche, regarder tos les profil repetiteurs qui vous sont proposer pour trouver celui qui correspond le plus a vos attentes</p>
            </div>
            <div  className="w-60 rounded-xl hover:border text-center bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer  p-5">
              <h3  className="font-semibold text-xl py-3">Contacter nous!</h3>
              <p>Apres avoir trouver le repetiteur qu'il vous faut, contacter nous afin de prendre rendez vous avec celui ci
                via la messagerie  ou via note page contact
              </p>
            </div>
            <div  className="w-60 rounded-xl border text-center hover:bg-blue-500 hover:text-white text-blue-950 bg-white cursor-pointer  p-5">
              <h3  className="font-semibold text-xl py-3">Vous avez reussi!</h3>
              <h1>Le programme finalisez, vous aurez automatiquement un agenda qui marquera
                tout les repetiteurs engage et les rendez que vous avez
              </h1>
            </div>
          </div>

          </div>          
        </div>
        <div className="px-10 py-3 flex gap-10 ">
          <img src="/image/4579608.jpg" alt="" className="w-200 h-150" />
            <div className="mt-15">
              <div>
                <h3 className="text-4xl font-bold">Pourquoi choisi Educonnect?</h3>
                <p className="text-xl font-semibold py-7">Des repetiteurs qualifier et engage apres une longue etude de dossiers et des tests et un systeme de paiement securise</p>
              </div>
              <div>
                <div className="flex gap-2"> <FontAwesomeIcon icon={faCheck} className="p-1 h-10 mt-4 rounded-full bg-blue-500 text-white" /><p className="text-2xl font-medium py-3 ">Enseignant certifie et qualifie</p></div>
                <div className="flex gap-2"> <FontAwesomeIcon icon={faCheck} className="p-1 h-10 mt-4 rounded-full bg-blue-500 text-white" /><p className="text-2xl font-medium py-3 ">Rapidite de reponse</p></div>
                <div className="flex gap-2"><FontAwesomeIcon icon={faCheck}  className="p-1 h-10 mt-4 rounded-full bg-blue-500 text-white"/><p className="text-2xl font-medium py-3">Service client 24h/24</p></div>
                <div className="flex gap-2"><FontAwesomeIcon icon={faCheck}  className="p-1 h-10 mt-4 rounded-full bg-blue-500 text-white"/><p className="text-2xl font-medium py-3">Paiement securise</p></div> 
               </div>
            </div>
          </div>
       
          <div className="container-princ px-35">
            <h1 className="text-xl font-bold rounded-t-xl text-black py-4">Nous vous proposons une large gamme de <br />professeurs experimente</h1>
            <div className="container1 ">
              <div className="row-1 flex w-full justify-center h-auto item-center gap-28">
                <div className=" row-11 rounded-t-xl w-215 h-80" >
                      <img src="/image/Rectangle 5.png" alt="" className="  rounded-t-xl w-70 h-60 object-cover"  />
                      <p className="text-white font-semibold  px-2 text-lg -mt-15">Stella Kameni</p>
                      <p className="text-white font-semibold px-2 text-lg  ">Deido</p>
                      <div className="px-2 flex gap-1 justify-end  -mt-7 mr-9 ">
                        <i className="fas fa-star text-yellow-500 "></i>
                        <i className="fas fa-star text-yellow-500 "></i>
                        <i className="fas fa-star text-yellow-500 "></i>
                    </div>
                      <p className="font-semibold text-sm px-2 text-center mt-5">professeur de Francais et philosiphie age <br /> de 33ans.j’utilise une methode d’enseignement base par un approche pas compenter de d’eleve. 
                      </p>
                      <p className="font-bold text-center px-2">50000fcfa/mois <span className="font-semibold text-blue-600 text-sm">1er cours offert</span></p>
                      <div className=" flex justify-center items-center py-1">
                        <button className=" text-white font-bold text-lg bg-blue-600 rounded-full w-40 h-9.5">Voir plus</button>
                      </div>
                </div>
                <div className=" row-12 rounded-t-xl w-215 h-80" >
                      <img src="/image/Rectangle 5.png" alt="" className="  rounded-t-xl w-70 h-60 object-cover"  />
                      <p className="text-white font-semibold  px-2 text-lg -mt-15">Stella Kameni</p>
                      <p className="text-white font-semibold px-2 text-lg  ">Deido</p>
                      <div className="px-2 flex gap-1 justify-end  -mt-7 mr-9 ">
                        <i className="fas fa-star text-yellow-500 "></i>
                        <i className="fas fa-star text-yellow-500 "></i>
                        <i className="fas fa-star text-yellow-500 "></i>
                    </div>
                      <p className="font-semibold text-sm px-2 text-center mt-5">professeur de Francais et philosiphie age <br /> de 33ans.j’utilise une methode d’enseignement base par un approche pas compenter de d’eleve. 
                      </p>
                      <p className="font-bold text-center px-2">50000fcfa/mois <span className="font-semibold text-blue-600 text-sm">1er cours offert</span></p>
                      <div className=" flex justify-center items-center py-1">
                        <button className=" text-white font-bold text-lg bg-blue-600 rounded-full w-40 h-9.5">Voir plus</button>
                      </div>
                </div>
                <div className=" row-13 rounded-t-xl w-215 h-auto" >
                      <img src="/image/Rectangle 5.png" alt="" className="  rounded-t-xl w-70 h-60 object-cover"  />
                      <p className="text-white font-semibold  px-2 text-lg -mt-15">Stella Kameni</p>
                      <p className="text-white font-semibold px-2 text-lg  ">Deido</p>
                      <div className="px-2 flex gap-1 justify-end  -mt-7 mr-9 ">
                        <i className="fas fa-star text-yellow-500 "></i>
                        <i className="fas fa-star text-yellow-500 "></i>
                        <i className="fas fa-star text-yellow-500 "></i>
                    </div>
                      <p className="font-semibold text-sm px-2 text-center mt-5">professeur de Francais et philosiphie age <br /> de 33ans.j’utilise une methode d’enseignement base par un approche pas compenter de d’eleve. 
                      </p>
                      <p className="font-bold text-center px-2">50000fcfa/mois <span className="font-semibold text-blue-600 text-sm">1er cours offert</span></p>
                      <div className=" flex justify-center items-center py-1">
                        <button className=" text-white font-bold text-lg bg-blue-600 rounded-full w-40 h-9.5">Voir plus</button>
                      </div>
                </div>
              </div>
             
            </div> 
         </div>
          <div className="px-35 py-10 flex gap-10">
            <div className="py-30">
              <h1 className="font-bold text-2xl">Satisfaction garantie</h1>
              <p className="font-semibold text-lg leading-">Des  milliers de parents et d’eleve sont <br /> satisfait par la qualite de nos services et le <br /> professionalisme de nos repetirrteurs </p>
            </div>
           <div className="flex gap-5">
           <div className="bg-yellow-300 rounded-3xl w-80 h-100 com-1">
              <div className=" px-5 py-4 flex gap-4">
                <img src="/image/rectangle 5.png" alt="" className="rounded-full w-30 h-30 object-cover" />
                <div className="py-5">
                  <p className="font-bold text-xl">Ulrich Takam</p>
                  <p className="font-bold text-lg">Professeur de maths</p>
                </div>
              </div>
              <p className="px-5 font-semibold text-center text-lg">Tres bon repetiteur, il m’a aider a relever mes lacunes en arithmetiques je le recommende fortement</p>
              <div className="flex mx-5 bg-white rounded-full w-55 h-10 px-5 my-20 gap-1">
                <p className="font-semibold py-2">Frank KEGNE</p>
                <div className="px-2 flex gap-1 justify-end py-3">
                      <i className="fas fa-star text-yellow-500 "></i>
                      <i className="fas fa-star text-yellow-500 "></i>
                      <i className="fas fa-star text-yellow-500 "></i>
                  </div>
              </div>
            </div>
            <div className="bg-green-300 rounded-3xl w-80 h-100 com-2 ">
              <div className=" px-5 py-4 flex gap-4">
                <img src="/image/rectangle 5.png" alt="" className="rounded-full w-30 h-30 object-cover" />
                <div className="py-5">
                  <p className="font-bold text-xl">Carmen A.</p>
                  <p className="font-bold text-lg">Professeur de philo</p>
                </div>
              </div>
              <p className="px-5 font-semibold text-center text-lg">Tres bon repetiteur, il m’a aider a relever mes lacunes en arithmetiques je le recommende fortement</p>
              <div className="flex mx-5 bg-white rounded-full w-65 h-10 px-5 my-20 gap-1">
                <p className="font-semibold py-2">Carlos KAMDEM</p>
                <div className="px-2 flex gap-1 justify-end py-3">
                      <i className="fas fa-star text-yellow-500 "></i>
                      <i className="fas fa-star text-yellow-500 "></i>
                      <i className="fas fa-star text-yellow-500 "></i>
                  </div>
              </div>
            </div>
           </div>
          </div>
          <div className="px-35 py-10 h-150 w-full relative">
            <img src="/image/Rectangle 9.png" alt="" className="h-150 w-full object-cover  rounded-xl" />
            <div className="px-7 py-3 w-120 h-75 rounded-2xl bg-white  top-75 absolute right-50">
              <p className="font-bold text-blue-600 text-2xl">Educonnect</p>
              <p className="font-bold text-3xl">Vous aussi , devenner un repetiteur de la team Educonnect</p>
              <p className="mt-2 font-semibold">partager votre savoir avec des personne en deficulter <br />tout en vous faisant de l’argent</p>
              <button className="w-full h-15 bg-blue-600 hover:bg-blue-800 text-white rounded-full text-2xl font-semibold my-3">
               <Link to="/repetiteur/register" className=" ">
                  En savoir plus
                </Link>
                </button>
            </div>
          </div>
          <div className="px-35 py-15 h-150 w-full">
            <p className="text-4xl font-bold">Explorer les repetiteurs de <br />votre ville</p>
            <div className="py-10 flex gap-20">
              <div className="cont-1 w-65 rounded-4xl bg-gray-100 px-5 py-5">
                <div>
                  <h2 className="font-bold text-xl">Makepe</h2>
                  <p className="text-lg">Mathematiques</p>
                  <p className="text-lg">Francais</p>
                  <p className="text-lg">chimie</p>
                  <p className="text-lg">Informatique</p>
                </div>
                <div>
                  <h2 className="font-bold text-xl">Bepanda</h2>
                  <p className="text-lg">Mathematiques</p>
                  <p className="text-lg">Francais</p>
                  <p className="text-lg">chimie</p>
                  <p className="text-lg">Informatique</p>
                </div>
                <div>
                  <h2 className="font-bold text-xl">Deido</h2>
                  <p className="text-lg">Mathematiques</p>
                  <p className="text-lg">Francais</p>
                  <p className="text-lg">chimie</p>
                  <p className="text-lg">Informatique</p>
                </div>
              </div>
              <div className="cont-1 w-65 rounded-4xl bg-gray-100 px-5 py-5">
                <div>
                  <h2 className="font-bold text-xl">Logpom</h2>
                  <p className="text-lg">Mathematiques</p>
                  <p className="text-lg">Francais</p>
                  <p className="text-lg">chimie</p>
                  <p className="text-lg">Informatique</p>
                </div>
                <div>
                  <h2 className="font-bold text-xl">Logbessou</h2>
                  <p className="text-lg">Mathematiques</p>
                  <p className="text-lg">Francais</p>
                  <p className="text-lg">chimie</p>
                  <p className="text-lg">Informatique</p>
                </div>
                <div>
                  <h2 className="font-bold text-xl">Logbaba</h2>
                  <p className="text-lg">Mathematiques</p>
                  <p className="text-lg">Francais</p>
                  <p className="text-lg">chimie</p>
                  <p className="text-lg">Informatique</p>
                </div>
              </div>
              <div className="cont-1 w-65 rounded-4xl bg-gray-100 px-5 py-5">
                <div>
                  <h2 className="font-bold text-xl">Bonamoussadi</h2>
                  <p className="text-lg">Mathematiques</p>
                  <p className="text-lg">Francais</p>
                  <p className="text-lg">chimie</p>
                  <p className="text-lg">Informatique</p>
                </div>
                <div>
                  <h2 className="font-bold text-xl">Bonaberi</h2>
                  <p className="text-lg">Mathematiques</p>
                  <p className="text-lg">Francais</p>
                  <p className="text-lg">chimie</p>
                  <p className="text-lg">Informatique</p>
                </div>
                <div>
                  <h2 className="font-bold text-xl">Bonapriso</h2>
                  <p className="text-lg cursor-pointer">Mathematiques</p>
                  <p className="text-lg cursor-pointer">Francais</p>
                  <p className="text-lg cursor-pointer">chimie</p>
                  <p className="text-lg cursor-pointer">Informatique</p>
                </div>
              </div>
              <div className="cont-1 w-65 rounded-4xl bg-gray-100 px-5 py-5">
                <div>
                  <h2 className="font-bold text-xl">Makepe</h2>
                  <p className="text-lg cursor-pointer">Mathematiques</p>
                  <p className="text-lg cursor-pointer">Francais</p>
                  <p className="text-lg cursor-pointer">chimie</p>
                  <p className="text-lg cursor-pointer">Informatique</p>
                </div>
                <div>
                  <h2 className="font-bold text-xl">Bepanda</h2>
                  <p className="text-lg cursor-pointer">Mathematiques</p>
                  <p className="text-lg cursor-pointer">Francais</p>
                  <p className="text-lg cursor-pointer">chimie</p>
                  <p className="text-lg cursor-pointer">Informatique</p>
                </div>
                <div>
                  <h2 className="font-bold text-xl">Deido</h2>
                  <p className="text-lg cursor-pointer">Mathematiques</p>
                  <p className="text-lg cursor-pointer">Francais</p>
                  <p className="text-lg cursor-pointer">chimie</p>
                  <p className="text-lg cursor-pointer">Informatique</p>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
      </main>
    </>
  );
}

export default EduconnectLanding;
