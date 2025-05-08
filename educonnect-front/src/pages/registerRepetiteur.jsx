
  

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar1";
import Footer from "../components/Footercompo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFileLines, faArrowRight,  faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import axios from "../api/axios";

export default function RegisterRepetiteur() {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

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


  const [form, setForm] = useState({
    name: "",
    email: "",
    telephone: "",
    password: "",
    password_confirmation: "",
    adresse: "",
    cv: null,
    lettre_motivation: null,
    releve_bac: null,
    piece_identite: null,
  });

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in form) {
      if (form[key] !== null && form[key] !== undefined) {
        formData.append(key, form[key]);
      }
    }

    try {
      await axios.post("/repetiteurs/register", formData);
      alert("Inscription en attente de validation");
    } catch (err) {
      console.error("Erreur:", err);
      alert(err.response?.data?.message || "Erreur d'inscription");
    }
  };

  return (
    <div>
       <Navbar />
      <div className="">
       
        <div className="">
          <motion.div className="relative bg-blue-500 h-150"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          >
            <div className="absolute inset-0 bg-black opacity-500 blur-sm"></div>
            <motion.img src="/image/hero3.jpg" alt="" className="w-full h-155 object-cover relative z-1 inset-0 bg-black bg-opacity-50 blur-sm" variants={itemVariants} />
            <motion.p className="px-65 absolute text-center top-[200px] text-blue-500 center z-20 text-5xl font-bold" variants={itemVariants}>
              Donner des cours et vivez de votre passion!
            </motion.p>
            <motion.p className="text-gray-500 px-50 font-semibold text-xl py-4 absolute text-center top-[310px] z-200" variants={itemVariants}>
              Bienvenue sur Educonnect, la meilleure plateforme de répétition 
              particulier au Cameroun où des milliers d’élèves trouvent chaque 
              jour des professeurs adaptés à leur besoin.
            </motion.p>
            <div className="absolute top-[420px] w-full flex  justify-center items-center transform  z-20 flex gap-5">
              <motion.button
                variants={itemVariants}
                onClick={() => setShowModal(true)}
                className="p-3 bg-blue-500 text-white hover:bg-blue-600 rounded text-lg font-medium"
                >
                Devenir répétiteur
              </motion.button>
              <motion.button className="p-3 bg-blue-500 text-white hover:bg-blue-600 rounded text-lg font-medium" variants={itemVariants}>Explorer <FontAwesomeIcon icon={faArrowRight} className="" /></motion.button>
            </div>
          </motion.div>
          <div>
            <div className="flex gap-10 py-10 px-15 items-center">
      {/* Texte qui entre depuis la gauche */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="max-w-xl"
      >
        <h2 className="text-5xl font-bold py-4">Educonnect embauche!</h2>
        <p className="font-medium text-xl py-4">
          Peu importe la matière dans laquelle vous excellez, contactez-nous
          pour prendre un rendez-vous pour entretien afin de faire partie de la team Educonnect.
        </p>
        <p className="font-medium text-xl py-4">
          Mettez vos connaissances au service des autres tout en gagnant de l'argent en partageant votre expertise avec des élèves qui en ont besoin.
        </p>
        <p className="font-medium text-xl py-4">
          Après inscription, vos documents seront reçus par notre service
          et nous vous contacterons pour une rencontre, suite à quoi, votre compte sera activé.
        </p>
         <motion.button
        onClick={() => setShowModal(true)}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="p-3 mt-10 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
        >
        Devenir répétiteur
      </motion.button>
      </motion.div>

          {/* Image qui entre depuis la droite */}
          <motion.img
            src="/image/repetiteur2.jpg"
            alt="Repetiteur"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-230 h-auto object-cover "
          />
        </div>
          </div>
            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            >
              <motion.h2 className=" font-bold text-4xl text-center" variants={itemVariants}>Documents à fournir:</motion.h2>
              <motion.div className=" bg-gray-100 flex w-full justify-center items-center gap-10 py-20 px-15 mt-10" variants={itemVariants}>
                <motion.div className="w-50 p-4 bg-white rounded text-center"  variants={itemVariants}>
                <FontAwesomeIcon icon={faFileLines} className="text-2xl text-blue-500 " />
                  <p className="font-bold text-xl py-4"> Curriculum vitae <span className="text-blue-500"> (PDF)</span></p>
                </motion.div>
                <motion.div className="w-50 bg-white p-4 rounded text-center"  variants={itemVariants}>
                  <FontAwesomeIcon icon={faFileLines} className="text-2xl text-blue-500 " />
                  <p className="font-bold text-xl py-4"> Lettre de motivation <span className="text-blue-500">(PDF)</span></p>
                </motion.div>
                <motion.div className="w-50 p-4 bg-white rounded text-center"  variants={itemVariants}>
                  <FontAwesomeIcon icon={faFileLines} className="text-2xl text-blue-500 " />
                  <p className="font-bold text-xl py-4"> Relevé du Bac <span className="text-blue-500">(PDF)</span></p>
                </motion.div>
                <motion.div className="w-50 p-4 bg-white rounded text-center"  variants={itemVariants}>
                  <FontAwesomeIcon icon={faFileLines} className="text-2xl text-blue-500 " />
                <p className="font-bold text-xl py-4"> Relevé du Bac <span className="text-blue-500">(PDF)</span></p>
                </motion.div>
              </motion.div>
           
           </motion.div>
        </div>
        <div className="relative">
      {/* Bouton d'ouverture */}
      <div className="flex w-full justify-end px-15">
      <button
        onClick={() => setShowModal(true)}
        className="p-3 mt-10 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
        >
        Devenir répétiteur
      </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-500">
          <div className="relative bg-white rounded-xl shadow-xl w-[700px] max-h-[90vh] overflow-y-auto p-6">
            {/* Bouton de fermeture */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            {/* Modal */}
{showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="relative bg-white rounded-lg shadow-xl w-[800px] max-h-[90vh] overflow-y-auto p-8 border border-black">
      {/* Bouton de fermeture */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
      >
        ✕
      </button>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        encType="multipart/form-data"
      >
        <p className="font-bold text-3xl text-center mb-8">Donner Cours</p>

        <div className="grid grid-cols-2 gap-6">
          {/* Colonne gauche */}
          <div className="space-y-4">
            <div>
              <label className="block text-md font-medium text-gray-700 mb-1">Nom</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="name"
                onChange={handleChange}
                placeholder="Nom complet..."
                required
              />
            </div>

            <div>
              <label className="block text-md font-medium text-gray-700 mb-1">Email</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="Email..."
                required
              />
            </div>

            <div>
              <label className="block text-md font-medium text-gray-700 mb-1">Téléphone</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="telephone"
                onChange={handleChange}
                placeholder="Téléphone..."
                required
              />
            </div>
          </div>

          {/* Colonne droite */}
          <div className="space-y-4">
            <div>
              <label className="block text-md font-medium text-gray-700 mb-1">Adresse</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="adresse"
                onChange={handleChange}
                placeholder="Adresse..."
                required
              />
            </div>

            <div>
              <label className="block text-md font-medium text-gray-700 mb-1">Mot de passe</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Mot de passe..."
                required
              />
            </div>

            <div>
              <label className="block text-md font-medium text-gray-700 mb-1">Confirmer le mot de passe</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                name="password_confirmation"
                type="password"
                onChange={handleChange}
                placeholder="Confirmer le mot de passe..."
                required
              />
            </div>
          </div>
        </div>

        {/* Fichiers - rangée 1 */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">CV</label>
            <input
              type="file"
              name="cv"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Lettre de motivation</label>
            <input
              type="file"
              name="lettre_motivation"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Fichiers - rangée 2 */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Relevé du Bac</label>
            <input
              type="file"
              name="releve_bac"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Pièce d'identité</label>
            <input
              type="file"
              name="piece_identite"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex justify-end items-center mt-8 space-x-4">
          <div className="text-center">
            <p className="text-sm">
              Vous avez déjà un compte ?{' '}
              <Link
                to="/repetiteur/login"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Connectez-vous ici
              </Link>
            </p>
          </div>
          <button className="px-6 py-2 bg-blue-600 font-medium text-white rounded-md hover:bg-blue-700 transition-colors">
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  </div>
)}

          </div>
        </div>
      )}
    </div>
        
        <div>
          <img src="/image/.jpg" alt="" className="w-100" />
        </div>
      </div>
      <motion.div className="py-10 px-25"
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
      >
        <motion.p className="font-bold text-4xl text-center"  variants={itemVariants}>Rejoignez une grande famille</motion.p>
        <motion.div className=" justify-center items-center -ml-9 w-302 flex gap-10 my-10 rounded-xl h-auto bg-gradient-to-t from-blue-400 via-blue-300"  variants={itemVariants}>
          <img src="/image/rectangle 21.png" alt="" className="w-150 h-auto rounded-xl" />
          <div>
            <p className="font-bold text-center text-3xl my-4">Une passion qui réunit</p>
            <p className="font-medium text-xl">
              Une centaine d’enseignants réunis sur Educonnect pour partager leurs connaissances à
              des milliers d’élèves chaque jour.
            </p>
            <p className="font-medium text-lg mt-2">
              Ceux-ci mettent un point d’honneur à veiller à l’éducation des Camerounais, peu
              importe leur âge, afin de construire des personnes qui bâtiront notre pays.
            </p>
            <p className="font-medium text-lg mt-2">
              Educonnect est une grande famille qui veille au bien-être <br /> des enseignants et
              des élèves.
            </p>
            <p className="font-medium text-lg mt-2">Alors, n’attendez pas et partagez votre savoir!</p>
            <div className="flex w-full justify-end px-15">
              <button
                onClick={() => setShowModal(true)}
                className="p-3 mt-10 text-blue-600 font-bold rounded hover:text-white hover:bg-blue-600"
                >
                Devenir répétiteur
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="px-25">
        <p className="font-bold text-4xl text-center">Pourquoi partager ses connaissances</p>
        <div>
        <div className="flex justify-between gap-20 my-10">
      <motion.img
        src="/image/raison1.jpg"
        alt="Aider des personnes"
        className="w-150 h-110"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.div
        className="my-20"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <p className="font-bold text-3xl text-center">Aider des personnes en difficulté</p>
        <p className="font-medium text-2xl my-5 px-5 text-center">
          En partageant vos connaissances, vous aidez des élèves à combler leurs lacunes
          scolaires, ce qui les aide à s’en sortir dans leurs études.
        </p>
      </motion.div>
    </div>
    <div className="flex justify-between gap-25">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <p className="font-bold text-3xl text-center">Donner le goût d’étudier aux jeunes</p>
        <p className="font-medium text-2xl my-5 px-5 text-center">
          Plus les jeunes apprendront de nouvelles choses, plus ils verront que les matières
          sont assez simples et l’école ainsi qu’apprendre de nouvelles choses sera plus un
          plaisir qu’une corvée.
        </p>
      </motion.div>
      <motion.img
        src="/image/raison22.jpg"
        alt="Donner le goût d’étudier"
        className="w-140 h-110 -mt-30"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      />
    </div>
    <div className="flex justify-between gap-25">
      <motion.img
        src="/image/raison3.jpg"
        alt="Famille heureuse"
        className="w-140 h-125"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />
      <motion.div
        className="my-15"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
      >
        <p className="font-bold text-center text-3xl">
          Le plaisir de voir une famille heureuse grâce à nos efforts
        </p>
        <p className="font-medium text-2xl text-center my-5 px-5">
          Voir une famille heureuse du progrès scolaire grâce à nos efforts et celui de
          l’élève est notre plus grande satisfaction, car cela prouve que notre travail est
          bien fait et notre mission de forger des jeunes compétents est sur la bonne voie.
        </p>
      </motion.div>
    </div>
          <div className="flex w-full -mt-30 justify-end ">
              <button
                onClick={() => setShowModal(true)}
                className="p-3 bg-blue-600  text-white font-bold rounded hover:bg-blue-700"
                >
                Devenir répétiteur
              </button>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}