// // import { useState } from "react";
// // import axios from "../api/axios";

// // export default function RegisterRepetiteur() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     telephone: "",
// //     password: "",
// //     password_confirmation: "",
// //     adresse: "",
// //     cv: null,
// //     lettre_motivation: null,
// //     releve_bac: null,
// //     piece_identite: null,
// //   });

// //   const handleChange = (e) => {
// //     const { name, type, files, value } = e.target;
// //     setForm((prevForm) => ({
// //       ...prevForm,
// //       [name]: type === "file" ? files[0] : value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     for (const key in form) {
// //       if (form[key] !== null && form[key] !== undefined) {
// //         formData.append(key, form[key]);
// //       }
// //     }

// //     // 🔍 Debug : Affiche les données envoyées
// //     for (const pair of formData.entries()) {
// //       console.log(`${pair[0]}:`, pair[1]);
// //     }

// //     try {
// //       await axios.post("/repetiteurs/register", formData); // Pas besoin de headers ici
// //       alert("Inscription en attente de validation");
// //     } catch (err) {
// //       console.error("Erreur:", err);
// //       alert(err.response?.data?.message || "Erreur d'inscription");
// //     }
// //   };

// //   return (
// //     <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
// //       <h2 className="text-xl font-bold mb-4 text-center">Inscription Répétiteur</h2>
// //       <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
// //         <input className="input" name="name" onChange={handleChange} placeholder="Nom complet" required />
// //         <input className="input" name="email" type="email" onChange={handleChange} placeholder="Email" required />
// //         <input className="input" name="telephone" onChange={handleChange} placeholder="Téléphone" required />
// //         <input className="input" name="adresse" onChange={handleChange} placeholder="Adresse" required />
// //         <input className="input" name="password" type="password" onChange={handleChange} placeholder="Mot de passe" required />
// //         <input className="input" name="password_confirmation" type="password" onChange={handleChange} placeholder="Confirmer le mot de passe" required />

// //         <label className="block text-sm font-medium">CV</label>
// //         <input type="file" name="cv" onChange={handleChange} required />

// //         <label className="block text-sm font-medium">Lettre de motivation</label>
// //         <input type="file" name="lettre_motivation" onChange={handleChange} required />

// //         <label className="block text-sm font-medium">Relevé du Bac</label>
// //         <input type="file" name="releve_bac" onChange={handleChange} required />

// //         <label className="block text-sm font-medium">Pièce d'identité</label>
// //         <input type="file" name="piece_identite" onChange={handleChange} required />

// //         <button className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
// //           S'inscrire
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { Link } from "react-router-dom"; // Import du composant Link
// import {  useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar1";
// import Footer from "../components/Footercompo";
// import axios from "../api/axios";

// export default function RegisterRepetiteur() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     telephone: "",
//     password: "",
//     password_confirmation: "",
//     adresse: "",
//     cv: null,
//     lettre_motivation: null,
//     releve_bac: null,
//     piece_identite: null,
//   });

//   const handleChange = (e) => {
//     const { name, type, files, value } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: type === "file" ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     for (const key in form) {
//       if (form[key] !== null && form[key] !== undefined) {
//         formData.append(key, form[key]);
//       }
//     }

//     try {
//       await axios.post("/repetiteurs/register", formData);
//       alert("Inscription en attente de validation");
//     } catch (err) {
//       console.error("Erreur:", err);
//       alert(err.response?.data?.message || "Erreur d'inscription");
//     }
//   };

//   return (
    
//       <div>
//         <div  className="bg-gradient-to-t h-auto from-blue-400 via-blue-300">
//           <Navbar/>
//           <div className=" flex gap-10  justify-between p-23">
//             <div>
//               <p className="text-5xl font-bold">Donner des cours et vivez <br /> de votre passion!</p>
//               <p className="font-bold text-xl py-4">Bienvenue sur Educonnect, la meilleur plateforme de repetition <br />particulier au Cameroun ou des  milliers d’eleves trouvent chaque <br /> jour des professeurs adapter a leur besoin. </p>
//               <p className="font-bold text-xl py-4">Peut importe la matiere dans laquelle vous excellez, contactez <br /> pour prentdre un rendez pour entretient afin faire partir de la team Educonnect</p>
//               <p className="font-bold text-xl">Document a fournir:</p>
//               <ul>
//                 <li className="font-bold text-xl">- CV (PDF)</li>
//                 <li className="font-bold text-xl">- Lettre de motivation (PDF)</li>
//                 <li className="font-bold text-xl">- Relevé du Bac (PDF)</li>
//                 <li className="font-bold text-xl">- Pièce d'identité (PNG)</li>
//               </ul>
//               <p className="font-bold text-xl py-4">Apres inscription vos documments seront recus par notre service <br /> et nous vous contacterons pour une rencontre, suite a quoi, votre compte sera active</p>
//             </div>
//               <form onSubmit={handleSubmit} className="space-y-4 w-130 h-auto bg-white px-5  rounded-xl shadow-xl " encType="multipart/form-data">
//                   <p className="font-bold text-4xl text-center my-5">Donner Cours</p>
//                   <label className=" text-lg font-semibold">Nom</label>
//                   <input className="input  h-12 w-full rounded-lg bg-gray-100 px-4" name="name" onChange={handleChange} placeholder="Nom complet..." required />
//                   <label className=" text-lg font-semibold">Email</label>
//                   <input className="input  h-12 w-full rounded-lg bg-gray-100 px-4" name="email" type="email" onChange={handleChange} placeholder="Email..." required />
//                   <label className=" text-lg font-semibold">Telephone</label>
//                   <input className="input  h-12 w-full rounded-lg bg-gray-100 px-4" name="telephone" onChange={handleChange} placeholder="Téléphone..." required />
//                   <label className=" text-lg font-semibold">Adresse</label>
//                   <input className="input h-12 w-full rounded-lg bg-gray-100 px-4" name="adresse" onChange={handleChange} placeholder="Adresse..." required />
//                   <label className=" text-lg font-semibold">Mot de passe</label>
//                   <input className="input  h-12 w-full rounded-lg bg-gray-100 px-4" name="password" type="password" onChange={handleChange} placeholder="Mot de passe..." required />
//                   <label className=" text-lg font-semibold">Confirmer le mot de passe</label>
//                   <input className="input  h-12 w-full rounded-lg bg-gray-100 px-4" name="password_confirmation" type="password" onChange={handleChange} placeholder="Confirmer le mot de passe..." required />

//                   <label className=" text-lg font-semibold">CV</label>
//                   <input type="file" name="cv" className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2" onChange={handleChange} required />

//                   <label className=" text-lg font-semibold">Lettre de motivation</label>
//                   <input type="file" name="lettre_motivation" className=" h-12 w-full rounded-lg bg-gray-100 px-4 py-2" onChange={handleChange} required />

//                   <label className=" text-lg font-semibold">Relevé du Bac</label>
//                   <input type="file" name="releve_bac" className=" h-12 w-full rounded-lg bg-gray-100 px-4 py-2" onChange={handleChange} required />

//                   <label className=" text-lg font-semibold">Pièce d'identité</label>
//                   <input type="file" name="piece_identite" className=" h-12 w-full rounded-lg bg-gray-100 px-4 py-2" onChange={handleChange} required />

//                   <button className="w-full bg-blue-600  font-semibold text-xl text-white py-2 rounded-xl hover:bg-blue-800 mt-4">
//                     S'inscrire
//                   </button>
//                   <div className="justify-center">
//                   <p className=" py-3 text-center ">
//                     Vous avez déjà un compte ?{" "}
//                     <Link to="/repetiteur/login" className="text-blue-600 hover:text-blue-800 hover:underline">
//                       Connectez-vous ici
//                     </Link>
//                   </p>
                  
//                 </div>
//             </form>
//           </div>
//           <div>
//               <img src="/image/.jpg" alt="" className="w-100 " />
//             </div>
//         </div>
//         <div className="py-10 px-25 ">
//           <p className="font-bold text-4xl text-center">Rejoignez une grande famille</p>
//           <div className="flex gap-10 my-10 rounded-xl h-auto bg-gradient-to-t from-blue-400 via-blue-300">
//             <img src="/image/rectangle 21.png" alt="" className="w-150 h-auto rounded-xl" />
//             <div>
//               <p className="font-bold text-center text-3xl my-4">Une passion qui reuni</p>
//               <p className="font-medium text-xl">Une centaine d’enseigants  reunis sur educonnect pour partager leur connaissances a des milliers de d’eleves chaque jours.</p>
//               <p className="font-medium text-lg mt-2">Ceux ci mettent un point d’honneur de veiller a l’education des camerounais peut importe leur age, afin de construire des personnes qui batirons notre pays</p>
//               <p className="font-medium text-lg mt-2">Educonnect est une grande famille qui veille au bien etre <br /> des enseignants et des eleves</p>
//               <p className="font-medium text-lg mt-2">Alors, n’attendez pas et partager votre savoir!</p>
//               <div className="flex justify-end px-10 py-5">
//                 <Link to="#" className="text-blue-800 font-bold text-lg hover:underline ">
//                       Donner cours
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="px-25 ">
//            <p className="font-bold text-4xl text-center">Pourquoi partager ses connaissances</p>
//            <div>
//             <div className="flex justify-between gap-20 my-10">
//               <img src="/image/ellipse 7.png" alt="" className="w-100 h-100" />
//               <div className="my-20">
//                 <p className="font-bold text-3xl text-center">Aider des personnes en difficulte</p>
//                 <p className="font-medium text-2xl my-5 px-5 text-center">En partageant vos connaissances, vous aidez des eleves a combler leurs lacunes scolaire ce qui les aider a fin s’en sortir dans leur etudes</p>
//               </div>
//             </div>
//             <div className="flex justify-between gap-25">
//               <div className="">
//                 <p className="font-bold text-3xl text-center">Donner le gout d’etudier aux jeunes</p>
//                 <p className="font-medium text-2xl my-5 px-5 text-center">Plus les jeunes apprendrons de nouvelles choses, plus ils verront que les matieres sont assez simple et l’ecole ainsi qu’apprendre de nouvelles choses sera plus un plaisir qu’un corve</p>
//               </div>
//               <img src="/image/ellipse 6.png" alt="" className="w-100 h-100 -mt-30 " />
//             </div>
//             <div className="flex justify-between gap-25">
//               <img src="/image/ellipse 8.png" alt="" className="w-100 h-100  " />
//               <div className=" my-15">
//                 <p className="font-bold text-3xl text-center">Le plaisir de voir une famille heureuse grace a nos efforts</p>
//                 <p className="font-medium text-2xl my-5 px-5 text-center">Voir une famille heureuse  du progret scolaire grace a nos efforts et celui de l’eleve est notre plus grande satisfaction car sa prouve que notre travail est bien fait et notre mission de forger des jeunes competents est sur la bonne voie</p>
//               </div>
//             </div>
//             <div className="flex justify-end px-10 -mt-15 ">
//                 <Link to="#" className="text-blue-800 font-bold text-lg hover:underline ">
//                  Donner cours
//                 </Link>
//             </div>
//            </div>
//         </div>
//         <Footer/>
//       </div>
//   );

  
// }

// // return (
//   //   <div>
//   //     <div className="bg-gradient-to-t h-auto from-blue-400 via-blue-300">
//   //       <Navbar />
//   //       <div className="flex flex-col -pb-30 gap-10 p-15 md:flex-row md:justify-between">
//   //         <div className="flex-1">
//   //           <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">Donner des cours et vivez <br /> de votre passion!</p>
//   //           <p className="font-bold text-lg sm:text-xl py-4">
//   //             Bienvenue sur Educonnect, la meilleure plateforme de répétition <br />
//   //             particulier au Cameroun où des milliers d’élèves trouvent chaque <br />
//   //             jour des professeurs adaptés à leur besoin.
//   //           </p>
//   //           <p className="font-bold text-lg sm:text-xl py-4">
//   //             Peu importe la matière dans laquelle vous excellez, contactez-nous pour prendre un rendez-vous pour entretien afin de faire partie de la team Educonnect.
//   //           </p>
//   //           <p className="font-bold text-lg sm:text-xl">Documents à fournir:</p>
//   //           <ul className="list-disc pl-6">
//   //             <li className="font-bold text-lg sm:text-xl">- CV (PDF)</li>
//   //             <li className="font-bold text-lg sm:text-xl">- Lettre de motivation (PDF)</li>
//   //             <li className="font-bold text-lg sm:text-xl">- Relevé du Bac (PDF)</li>
//   //             <li className="font-bold text-lg sm:text-xl">- Pièce d'identité (PNG)</li>
//   //           </ul>
//   //           <p className="font-bold text-lg sm:text-xl py-4">
//   //             Après inscription, vos documents seront reçus par notre service <br />
//   //             et nous vous contacterons pour une rencontre, suite à quoi, votre compte sera activé.
//   //           </p>
//   //         </div>
  
//   //         <form onSubmit={handleSubmit} className="space-y-4 w-full sm:w-130 h-auto bg-white px-5 rounded-xl shadow-xl" encType="multipart/form-data">
//   //           <p className="font-bold text-3xl sm:text-4xl text-center my-5">Donner Cours</p>
//   //           <label className="text-lg font-semibold">Nom</label>
//   //           <input className="input h-12 w-full rounded-lg bg-gray-100 px-4" name="name" onChange={handleChange} placeholder="Nom complet..." required />
//   //           <label className="text-lg font-semibold">Email</label>
//   //           <input className="input h-12 w-full rounded-lg bg-gray-100 px-4" name="email" type="email" onChange={handleChange} placeholder="Email..." required />
//   //           <label className="text-lg font-semibold">Téléphone</label>
//   //           <input className="input h-12 w-full rounded-lg bg-gray-100 px-4" name="telephone" onChange={handleChange} placeholder="Téléphone..." required />
//   //           <label className="text-lg font-semibold">Adresse</label>
//   //           <input className="input h-12 w-full rounded-lg bg-gray-100 px-4" name="adresse" onChange={handleChange} placeholder="Adresse..." required />
//   //           <label className="text-lg font-semibold">Mot de passe</label>
//   //           <input className="input h-12 w-full rounded-lg bg-gray-100 px-4" name="password" type="password" onChange={handleChange} placeholder="Mot de passe..." required />
//   //           <label className="text-lg font-semibold">Confirmer le mot de passe</label>
//   //           <input className="input h-12 w-full rounded-lg bg-gray-100 px-4" name="password_confirmation" type="password" onChange={handleChange} placeholder="Confirmer le mot de passe..." required />
  
//   //           <label className="text-lg font-semibold">CV</label>
//   //           <input type="file" name="cv" className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2" onChange={handleChange} required />
  
//   //           <label className="text-lg font-semibold">Lettre de motivation</label>
//   //           <input type="file" name="lettre_motivation" className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2" onChange={handleChange} required />
  
//   //           <label className="text-lg font-semibold">Relevé du Bac</label>
//   //           <input type="file" name="releve_bac" className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2" onChange={handleChange} required />
  
//   //           <label className="text-lg font-semibold">Pièce d'identité</label>
//   //           <input type="file" name="piece_identite" className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2" onChange={handleChange} required />
  
//   //           <button className="w-full bg-blue-600 font-semibold text-xl text-white py-2 rounded-xl hover:bg-blue-800 mt-4">
//   //             S'inscrire
//   //           </button>
//   //           <div className="flex justify-center">
//   //             <p className="py-3 text-center">
//   //               Vous avez déjà un compte ?{" "}
//   //               <Link to="/repetiteur/login" className="text-blue-600 hover:text-blue-800 hover:underline">
//   //                 Connectez-vous ici
//   //               </Link>
//   //             </p>
//   //           </div>
//   //         </form>
//   //       </div>
  
//   //       <div className="hidden md:block">
//   //         <img src="/image/.jpg" alt="" className="w-full" />
//   //       </div>
//   //     </div>
  
//   //     <div className="py-10 px-5 md:px-25">
//   //       <p className="font-bold text-3xl sm:text-4xl text-center">Rejoignez une grande famille</p>
//   //       <div className="flex flex-col md:flex-row gap-5 md:gap-10 my-10 rounded-xl h-auto bg-gradient-to-t from-blue-400 via-blue-300">
//   //         <img src="/image/rectangle 21.png" alt="" className="w-full md:w-150 h-auto rounded-xl" />
//   //         <div className="flex-1">
//   //           <p className="font-bold text-center text-2xl sm:text-3xl my-4">Une passion qui réunit</p>
//   //           <p className="font-medium text-lg sm:text-xl">
//   //             Une centaine d’enseignants réunis sur Educonnect pour partager leurs connaissances à des milliers d’élèves chaque jour.
//   //           </p>
//   //           <p className="font-medium text-lg sm:text-xl mt-2">
//   //             Ceux-ci mettent un point d’honneur à veiller à l’éducation des Camerounais, peu importe leur âge, afin de construire des personnes qui bâtiront notre pays.
//   //           </p>
//   //           <p className="font-medium text-lg sm:text-xl mt-2">
//   //             Educonnect est une grande famille qui veille au bien-être des enseignants et des élèves.
//   //           </p>
//   //           <p className="font-medium text-lg sm:text-xl mt-2">Alors, n’attendez pas et partagez votre savoir !</p>
//   //           <div className="flex justify-end px-10 py-5">
//   //             <Link to="#" className="text-blue-800 font-bold text-lg hover:underline">
//   //               Donner cours
//   //             </Link>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
  
//   //     <div className="px-5 md:px-25">
//   //       <p className="font-bold text-3xl sm:text-4xl text-center">Pourquoi partager ses connaissances</p>
//   //       <div>
//   //         <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-20 my-10">
//   //           <img src="/image/ellipse 7.png" alt="" className="w-full md:w-100 h-100" />
//   //           <div className="my-5 md:my-20">
//   //             <p className="font-bold text-2xl sm:text-3xl text-center">Aider des personnes en difficulté</p>
//   //             <p className="font-medium text-lg sm:text-2xl my-5 px-5 text-center">
//   //               En partageant vos connaissances, vous aidez des élèves à combler leurs lacunes scolaires, ce qui les aide à s’en sortir dans leurs études.
//   //             </p>
//   //           </div>
//   //         </div>
  
//   //         <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-25">
//   //           <div className="flex-1">
//   //             <p className="font-bold text-2xl sm:text-3xl text-center">Donner le goût d’étudier aux jeunes</p>
//   //             <p className="font-medium text-lg sm:text-2xl my-5 px-5 text-center">
//   //               Plus les jeunes apprendront de nouvelles choses, plus ils verront que les matières sont assez simples et l’école ainsi qu’apprendre de nouvelles choses sera plus un plaisir qu’une corvée.
//   //             </p>
//   //           </div>
//   //           <img src="/image/ellipse 6.png" alt="" className="w-full md:w-100 h-100 -mt-30" />
//   //         </div>
  
//   //         <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-25">
//   //           <img src="/image/ellipse 8.png" alt="" className="w-full md:w-100 h-100" />
//   //           <div className="my-5 md:my-15">
//   //             <p className="font-bold text-2xl sm:text-3xl text-center">Le plaisir de voir une famille heureuse grâce à nos efforts</p>
//   //             <p className="font-medium text-lg sm:text-2xl my-5 px-5 text-center">
//   //               Voir une famille heureuse du progrès scolaire grâce à nos efforts et celui de l’élève est notre plus grande satisfaction, car cela prouve que notre travail est bien fait et notre mission de forger des jeunes compétents est sur la bonne voie.
//   //             </p>
//   //           </div>
//   //         </div>
  
//   //         <div className="flex justify-end px-10 -mt-15">
//   //           <Link to="#" className="text-blue-800 font-bold text-lg hover:underline">
//   //             Donner cours
//   //           </Link>
//   //         </div>
//   //       </div>
//   //     </div>
  
//   //     <Footer />
//   //   </div>
//   // );
  

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar1";
import Footer from "../components/Footercompo";
import { motion } from "framer-motion";
import axios from "../api/axios";

export default function RegisterRepetiteur() {

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
      <div className="bg-gradient-to-t h-auto from-blue-400 via-blue-300">
        <Navbar />
        <div className="flex gap-10 justify-between p-23">
          <div>
            <p className="text-5xl font-bold">
              Donner des cours et vivez <br /> de votre passion!
            </p>
            <p className="font-bold text-xl py-4">
              Bienvenue sur Educonnect, la meilleure plateforme de répétition <br />
              particulier au Cameroun où des milliers d’élèves trouvent chaque <br />
              jour des professeurs adaptés à leur besoin.
            </p>
            <p className="font-bold text-xl py-4">
              Peu importe la matière dans laquelle vous excellez, contactez-nous <br />
              pour prendre un rendez-vous pour entretien afin de faire partie de la team Educonnect.
            </p>
            <p className="font-bold text-xl">Documents à fournir:</p>
            <ul>
              <li className="font-bold text-xl">- CV (PDF)</li>
              <li className="font-bold text-xl">- Lettre de motivation (PDF)</li>
              <li className="font-bold text-xl">- Relevé du Bac (PDF)</li>
              <li className="font-bold text-xl">- Pièce d'identité (PNG)</li>
            </ul>
            <p className="font-bold text-xl py-4">
              Après inscription, vos documents seront reçus par notre service <br />
              et nous vous contacterons pour une rencontre, suite à quoi, votre compte sera activé.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 w-130 h-auto bg-white px-5 rounded-xl shadow-xl"
            encType="multipart/form-data"
          >
            <p className="font-bold text-4xl text-center my-5">Donner Cours</p>
            <label className="text-lg font-semibold">Nom</label>
            <input
              className="input h-12 w-full rounded-lg bg-gray-100 px-4"
              name="name"
              onChange={handleChange}
              placeholder="Nom complet..."
              required
            />
            <label className="text-lg font-semibold">Email</label>
            <input
              className="input h-12 w-full rounded-lg bg-gray-100 px-4"
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Email..."
              required
            />
            <label className="text-lg font-semibold">Téléphone</label>
            <input
              className="input h-12 w-full rounded-lg bg-gray-100 px-4"
              name="telephone"
              onChange={handleChange}
              placeholder="Téléphone..."
              required
            />
            <label className="text-lg font-semibold">Adresse</label>
            <input
              className="input h-12 w-full rounded-lg bg-gray-100 px-4"
              name="adresse"
              onChange={handleChange}
              placeholder="Adresse..."
              required
            />
            <label className="text-lg font-semibold">Mot de passe</label>
            <input
              className="input h-12 w-full rounded-lg bg-gray-100 px-4"
              name="password"
              type="password"
              onChange={handleChange}
              placeholder="Mot de passe..."
              required
            />
            <label className="text-lg font-semibold">Confirmer le mot de passe</label>
            <input
              className="input h-12 w-full rounded-lg bg-gray-100 px-4"
              name="password_confirmation"
              type="password"
              onChange={handleChange}
              placeholder="Confirmer le mot de passe..."
              required
            />
            <label className="text-lg font-semibold">CV</label>
            <input
              type="file"
              name="cv"
              className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2"
              onChange={handleChange}
              required
            />
            <label className="text-lg font-semibold">Lettre de motivation</label>
            <input
              type="file"
              name="lettre_motivation"
              className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2"
              onChange={handleChange}
              required
            />
            <label className="text-lg font-semibold">Relevé du Bac</label>
            <input
              type="file"
              name="releve_bac"
              className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2"
              onChange={handleChange}
              required
            />
            <label className="text-lg font-semibold">Pièce d'identité</label>
            <input
              type="file"
              name="piece_identite"
              className="h-12 w-full rounded-lg bg-gray-100 px-4 py-2"
              onChange={handleChange}
              required
            />
            <button className="w-full bg-blue-600 font-semibold text-xl text-white py-2 rounded-xl hover:bg-blue-800 mt-4">
              S'inscrire
            </button>
            <div className="justify-center">
              <p className="py-3 text-center">
                Vous avez déjà un compte ?{" "}
                <Link
                  to="/repetiteur/login"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Connectez-vous ici
                </Link>
              </p>
            </div>
          </form>
        </div>
        
        <div>
          <img src="/image/.jpg" alt="" className="w-100" />
        </div>
      </div>
      <div className="py-10 px-25">
        <p className="font-bold text-4xl text-center">Rejoignez une grande famille</p>
        <div className="flex gap-10 my-10 rounded-xl h-auto bg-gradient-to-t from-blue-400 via-blue-300">
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
            <div className="flex justify-end px-10 py-5">
              <Link to="#" className="text-blue-800 font-bold text-lg hover:underline">
                Donner cours
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-25">
        <p className="font-bold text-4xl text-center">Pourquoi partager ses connaissances</p>
        <div>
          <div className="flex justify-between gap-20 my-10">
            <img src="/image/ellipse 7.png" alt="" className="w-100 h-100" />
            <div className="my-20">
              <p className="font-bold text-3xl text-center">Aider des personnes en difficulté</p>
              <p className="font-medium text-2xl my-5 px-5 text-center">
                En partageant vos connaissances, vous aidez des élèves à combler leurs lacunes
                scolaires, ce qui les aide à s’en sortir dans leurs études.
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-25">
            <div>
              <p className="font-bold text-3xl text-center">Donner le goût d’étudier aux jeunes</p>
              <p className="font-medium text-2xl my-5 px-5 text-center">
                Plus les jeunes apprendront de nouvelles choses, plus ils verront que les matières
                sont assez simples et l’école ainsi qu’apprendre de nouvelles choses sera plus un
                plaisir qu’une corvée.
              </p>
            </div>
            <img src="/image/ellipse 6.png" alt="" className="w-100 h-100 -mt-30" />
          </div>
          <div className="flex justify-between gap-25">
            <img src="/image/ellipse 8.png" alt="" className="w-100 h-100" />
            <div className="my-15">
              <p className="font-bold text-3xl text-center">
                Le plaisir de voir une famille heureuse grâce à nos efforts
              </p>
              <p className="font-medium text-2xl my-5 px-5 text-center">
                Voir une famille heureuse du progrès scolaire grâce à nos efforts et celui de
                l’élève est notre plus grande satisfaction, car cela prouve que notre travail est
                bien fait et notre mission de forger des jeunes compétents est sur la bonne voie.
              </p>
            </div>
          </div>
          <div className="flex justify-end px-10 -mt-15">
            <Link to="#" className="text-blue-800 font-bold text-lg hover:underline">
              Donner cours
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}