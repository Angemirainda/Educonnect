

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone,
//   faEnvelope,
//   faMapMarkerAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebookF,
//   faInstagram,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";

// export default function Footer() {
//   return (
//     <div className="my-20">
//       {/* Section "Rejoignez-nous" */}
//       <div className="py-10 bg-white border flex flex-col items-center justify-center">
//         <h2 className="text-3xl text-center font-bold mb-4">Rejoignez-nous dès maintenant</h2>
//         <p className="px-6 md:px-10 text-lg font-semibold text-center">
//           Laissez-nous un message via mail pour toutes préoccupations, services, orientations ou quoi que ce soit d'autre. Nous sommes ouverts et disponibles pour vous aider.
//         </p>
//         <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
//           <input
//             type="text"
//             placeholder="Votre message..."
//             className="rounded-lg border w-full md:w-80 bg-white h-12 px-4"
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
//           >
//             Valider
//           </button>
//         </div>
//       </div>

//       {/* Footer principal */}
//       <footer className="bg-[#0d2b4b] text-white px-6 py-10">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
//           {/* Bloc 1 - Logo et slogan */}
//           <div>
//             <div className="flex items-center mb-3">
//               <div className="bg-blue-600 text-white font-bold text-lg w-8 h-8 flex items-center justify-center rounded mr-2">
//                 E
//               </div>
//               <span className="text-3xl font-bold">Educonnect</span>
//             </div>
//             <p className="text-white text-lg">
//               L'éducation au service de la jeunesse
//             </p>
//           </div>

//           {/* Bloc 2 - Recherches courantes */}
//           <div>
//             <h4 className="font-semibold mb-4 text-xl">Recherches courantes</h4>
//             <ul className="space-y-2 text-white text-lg">
//               <li>Mathématiques</li>
//               <li>Langue Anglaise</li>
//               <li>Langue Française</li>
//               <li>Physique</li>
//               <li>Chimie</li>
//             </ul>
//           </div>

//           {/* Bloc 3 - Liens rapides */}
//           <div>
//             <h4 className="font-semibold mb-4 text-xl">Liens rapides</h4>
//             <ul className="space-y-2 text-white text-lg">
//               <li>Donner cours</li>
//               <li>Connexion</li>
//               <li>Contact</li>
//             </ul>
//           </div>

//           {/* Bloc 4 - Services */}
//           <div>
//             <h4 className="font-semibold mb-4 text-xl">Services</h4>
//             <ul className="space-y-2 text-white text-lg">
//               <li>Cours de répétition</li>
//               <li>Recrutement répétiteur</li>
//             </ul>
//           </div>
//         </div>

//         {/* Informations de contact */}
//         <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm space-y-6 md:space-y-0">
//           <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
//             <div className="flex items-center">
//               <FontAwesomeIcon
//                 icon={faPhone}
//                 className="mr-2 text-blue-500 text-xl"
//               />
//               <span className="text-white text-lg font-medium">
//                 (+237) 699 245 658
//               </span>
//             </div>
//             <div className="flex items-center">
//               <FontAwesomeIcon
//                 icon={faEnvelope}
//                 className="mr-2 text-blue-500 text-xl"
//               />
//               <span className="text-white text-lg font-medium">
//                 educonnect@gmail.com
//               </span>
//             </div>
//             <div className="flex items-center">
//               <FontAwesomeIcon
//                 icon={faMapMarkerAlt}
//                 className="mr-2 text-blue-500 text-xl"
//               />
//               <span className="text-white text-lg font-medium">
//                 Douala, Cameroun
//               </span>
//             </div>
//           </div>

//           {/* Réseaux sociaux */}
//           <div className="flex space-x-6">
//             <a href="#" className="text-white hover:text-blue-500 transition">
//               <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
//             </a>
//             <a href="#" className="text-white hover:text-blue-500 transition">
//               <FontAwesomeIcon icon={faInstagram} className="text-xl" />
//             </a>
//             <a href="#" className="text-white hover:text-blue-500 transition">
//               <FontAwesomeIcon icon={faTwitter} className="text-xl" />
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-[#0d2b4b] text-white">
      {/* Section "Rejoignez-nous" */}
      <div className=" border border-black py-10 mt-30 bg-white text-center">
        <h2 className="text-black text-3xl font-bold mb-4">Rejoignez-nous dès maintenant</h2>
        <p className="text-lg text-black font-medium px-6 md:px-20">
          Laissez-nous un message pour toutes préoccupations, services ou orientations. Nous sommes disponibles pour vous aider.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="text"
            placeholder="Votre message..."
            className=" text-black w-full md:w-96 h-12 px-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Valider
          </button>
        </div>
      </div>

      {/* Footer principal */}
      <footer className="px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Bloc 1 - Logo et slogan */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-full mr-3">
                E
              </div>
              <span className="text-3xl font-bold">Educonnect</span>
            </div>
            <p className="text-gray-300 text-lg">
              L'éducation au service de la jeunesse
            </p>
          </div>

          {/* Bloc 2 - Recherches courantes */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Recherches courantes</h4>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition">Mathématiques</li>
              <li className="hover:text-blue-400 transition">Langue Anglaise</li>
              <li className="hover:text-blue-400 transition">Langue Française</li>
              <li className="hover:text-blue-400 transition">Physique</li>
              <li className="hover:text-blue-400 transition">Chimie</li>
            </ul>
          </div>

          {/* Bloc 3 - Liens rapides */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition">Donner cours</li>
              <li className="hover:text-blue-400 transition">Connexion</li>
              <li className="hover:text-blue-400 transition">Contact</li>
            </ul>
          </div>

          {/* Bloc 4 - Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition">Cours de répétition</li>
              <li className="hover:text-blue-400 transition">Recrutement répétiteur</li>
            </ul>
          </div>
        </div>

        {/* Informations de contact */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="mr-2 text-blue-500 text-xl"
              />
              <span className="text-white text-lg font-medium">
                (+237) 699 245 658
              </span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 text-blue-500 text-xl"
              />
              <span className="text-white text-lg font-medium">
                educonnect@gmail.com
              </span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-2 text-blue-500 text-xl"
              />
              <span className="text-white text-lg font-medium">
                Douala, Cameroun
              </span>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-white hover:text-blue-500 transition">
              <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
            </a>
            <a href="#" className="text-white hover:text-blue-500 transition">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
            <a href="#" className="text-white hover:text-blue-500 transition">
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}