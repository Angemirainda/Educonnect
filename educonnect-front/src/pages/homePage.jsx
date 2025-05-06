"use client";
import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom"; // Import du composant Link
import Footer from "../components/Footercompo";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight,  faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar1";
import FAQs from "../components/FAQs";
import Commentaire from "../components/commantaire";
import { motion, AnimatePresence } from "framer-motion";


function EduconnectLanding() {
  
  const [commentaires, setCommentaires] = useState([]); // Initialisation de comments avec un tableau vide

  // Fonction pour récupérer les commentaires
  const fetchCommentaires = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/commentaires", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCommentaires(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des commentaires:", error);
      toast.error("Erreur lors du chargement des commentaires");
    }
  };

  // Charger les commentaires au montage de la page
  useEffect(() => {
    fetchCommentaires();
  }, []);




  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  
  

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;900&family=Poppins:wght@600;700&display=swap"
      />

      <Navbar/>
      <main className="">
        
        <motion.div className="px-17 flex gap-10 mt-15 "
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
 
        >
          <div className="mt-10">
            <motion.h2 className="text-5xl font-bold text-center mt-20"   variants={itemVariants}
            >Bienvenue, sur notre plateforme </motion.h2>
            <motion.p className="text-xl font-lg text-center my-10 font-semibold"   variants={itemVariants}
            >votre partenaire pour l'éducation et l'épanouissement de vos enfants car chaque famille mérite un soutien éducatif de qualité.</motion.p>
            <div className="rounded-full p-3"></div>
            <div className="w-full flex justify-center items-center">
              <motion.button type="submit" className="py-3 px-5 text-lg bg-blue-500 hover:bg-blue-700 w-60 text-white text-xl font-semibold rounded-tl-full rounded-br-full"   variants={itemVariants}
            >
            <Link to="/services" className="">
                Nos repetiteurs  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </motion.button> 
            </div>
          </div>
          <img src="image/hero2.jpg" alt="" className="w-350 " />
        </motion.div>

        
        <div className="px-25 -mt-15">
          <motion.div  variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
>
            <motion.h2 className="text-center text-4xl font-bold"  variants={itemVariants}
            >C'est quoi Educonnect</motion.h2>
          </motion.div>
        <div className="flex gap-20">
          <motion.img
            src="image/Apropos.jpg"
            alt=""
            className="w-160 h-130"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: 'easeIn' }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-xl font-medium mt-23"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeIn' }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 font-bold text-3xl">Educonnect</span> est une plateforme de mise en relation entre parents soucieux pour l'avenir de leur enfants ayant des difficuelte scolaire, ou tout simplement souhaitant maintenir le niveau de leur enfants, et des repetiteurs qualifies et actifs pres a mettre leur services et leur connaissance pour former les jeunes. Nous mettons un point d'honneur a satisfaire autant que possibles toute personne venant chez nous raison pour laquelle nos repetiteurs sont choisi avec soins et un bilan sur nos services est fait chaque fin du mois avec les parents.
          </motion.p>
        </div>
      </div>
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
   
        >
          <motion.h1 className="text-4xl text-center font-bold py- px-26" variants={itemVariants}
          >Comment ca fonctionne?</motion.h1>
          </motion.div>
          <div className=""variants={containerVariants}>
            <div className="h-auto py-5"
            >
              <motion.div className="flex w-full space-x-15 justify-center items-center"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}>
                <motion.div className="justify-center items-center flex flex-col gap-5"  variants={itemVariants}>
                  <div className="flex rounded-full p-5 hover:bg-blue-500 hover:text-white text-blue-950 bg-white cursor-pointer w-5 h-5 text-blue-950 border font-semibold">
                    <p className="text-center -mt-3 -ml-1">1</p>
                  </div>
                  <div className="w-60 rounded-xl hover:border text-center bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer p-5">
                    <h3 className="font-semibold text-xl py-4">Faite une recherche</h3>
                    <p>
                      Allez sur la barre de recherche et entrer le profil repetiteur que vous voulez en precisant votre la ville, la matiere et le niveau de l'eleve.
                    </p>
                  </div>
                </motion.div>
                <motion.div className="justify-center items-center flex flex-col gap-5"  variants={itemVariants}>
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
                </motion.div>
                <motion.div className="justify-center items-center flex flex-col gap-5"  variants={itemVariants}>
                  <div className="flex rounded-full p-5 hover:bg-blue-500 hover:text-white text-blue-950 bg-white cursor-pointer w-5 h-5 text-blue-950 border font-semibold">
                    <p className="text-center -mt-3 -ml-1">3</p>
                  </div>
                  <div className="w-60 rounded-xl hover:border text-center bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer p-5">
                    <h3 className="font-semibold text-xl py-3">Contacter nous!</h3>
                    <p>
                      Apres avoir trouver le repetiteur qu'il vous faut, contacter nous afin de prendre rendez vous avec celui ci via la messagerie ou via note page contact
                    </p>
                  </div>
                </motion.div>
                <motion.div className="justify-center items-center flex flex-col gap-5"  variants={itemVariants}>
                  <div className="flex rounded-full p-5 hover:border text-center bg-blue-500 text-white hover:text-black hover:bg-white cursor-pointer w-5 h-5 font-semibold">
                    <p className="text-center -mt-3 -ml-1">4</p>
                  </div>
                  <div className="w-60 rounded-xl border text-center hover:bg-blue-500 hover:text-white text-blue-950 bg-white cursor-pointer p-5">
                    <h3 className="font-semibold text-xl py-3">Vous avez reussi!</h3>
                    <h1>
                      Le programme finalisez, vous aurez automatiquement un agenda qui marquera tout les repetiteurs engage et les rendez que vous avez
                    </h1>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="px-10 py-3 flex gap-15">
      <motion.img
        src="/image/importance3.jpg"
        alt=""
        className="w-200 h-150"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        viewport={{ once: true }}
      />
      <motion.div
        className="mt-15"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        viewport={{ once: true }}
      >
        <div>
          <h3 className="text-4xl font-bold">Pourquoi choisir Educonnect?</h3>
          <p className="text-xl font-semibold py-7">
            Des répétiteurs qualifiés et engagés après une longue étude de dossiers et des tests, et un système de paiement sécurisé.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {/* Bloc 1 */}
          <motion.div
            className="flex gap-2 items-center p-2 rounded-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faCheck} className="p-1 h-10 rounded-full bg-blue-500 text-white" />
            <p className="text-2xl font-medium py-3">Enseignant certifié et qualifié</p>
          </motion.div>
          {/* Bloc 2 */}
          <motion.div
            className="flex gap-2 items-center p-2 rounded-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faCheck} className="p-1 h-10 rounded-full bg-blue-500 text-white" />
            <p className="text-2xl font-medium py-3">Rapidité de réponse</p>
          </motion.div>
          {/* Bloc 3 */}
          <motion.div
            className="flex gap-2 items-center p-2 rounded-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faCheck} className="p-1 h-10 rounded-full bg-blue-500 text-white" />
            <p className="text-2xl font-medium py-3">Service client 24h/24</p>
          </motion.div>
          {/* Bloc 4 */}
          <motion.div
            className="flex gap-2 items-center p-2 rounded-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faCheck} className="p-1 h-10 rounded-full bg-blue-500 text-white" />
            <p className="text-2xl font-medium py-3">Paiement sécurisé</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
    <div className="px-20 flex gap-5">
      <motion.div
        className="mt-25"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        viewport={{ once: true }}
      >
        <div>
          <h3 className="text-4xl font-bold">Quels sont nos objectifs?</h3>
          <p className="text-xl font-semibold py-5">
            Educonnect s'est fixé des objectifs clairs à atteindre afin de répondre au mieux aux attentes de nos clients et de nos répétiteurs.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {/* Bloc 1 */}
          <motion.div
            className="flex gap-2 items-center p-2 rounded-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faCheck} className="p-1 h-10 rounded-full bg-blue-500 text-white" />
            <p className="text-2xl font-medium py-3">Mettre en relation le parent et le répétiteur</p>
          </motion.div>
          {/* Bloc 2 */}
          <motion.div
            className="flex gap-2 items-center p-2 rounded-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faCheck} className="p-1 h-10 rounded-full bg-blue-500 text-white" />
            <p className="text-2xl font-medium py-3">Former des jeunes compétents</p>
          </motion.div>
          {/* Bloc 3 */}
          <motion.div
            className="flex gap-2 items-center p-2 rounded-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faCheck} className="p-1 h-10 rounded-full bg-blue-500 text-white" />
            <p className="text-2xl font-medium py-3">Créer des emplois</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.img
        src="/image/importance.jpg"
        alt=""
        className="w-200 h-160 -mt-5"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        viewport={{ once: true }}
      />
    </div>  
      <section className="commentaires-section ">
        <h2 className="font-bold text-4xl text-center ">Commentaires :</h2>
        <div className=" bg-gray-50 px-20 ">
        {commentaires.length > 0 ? (
          commentaires.map((commentaire) => (
            <div key={commentaire.id} className="commentaire-card  p-4 my-4 rounded-lg">
              <p className="text-xl text-center"><span className="text-2xl font-semibold">{commentaire.client.name}</span> a commenté :</p>
              <p className="text-center text-lg py-2">{commentaire.contenu}</p>
              <div className="flex gap-1 w-full justify-center items-center mt-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                
              </div>
             <div className="w-full flex justify-end"><small className="font-bold">Posté le {new Date(commentaire.created_at).toLocaleString()}</small></div>
            </div>
          ))
        ) : (
          <p>Aucun commentaire disponible.</p>
        )}
        </div>
      </section>
     
    
      <FAQs />
      </main>
      <Footer />
    </>
  );
}

export default EduconnectLanding;