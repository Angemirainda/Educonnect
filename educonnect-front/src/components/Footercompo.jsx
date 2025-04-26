// components/Footer.jsx

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
    <div className="my-20 h-full">
        <div>
          <div className="py-5 bg-white border h-full  flex flex-col items-center justify-center">
            <h2 className="text-3xl text-center font-bold mb-4">Rejoignez nous des maintenant</h2>
            <p className=" px-10 text-lg font-semibold text-center">Laissez nous un message via mail pour toutes preocupations, services, orientations ou quoi que se soit 
              d'autre, nous sommes ouvert et disponible pour vous aider.
            </p>
            <input type="text" className="rounded-lg border w-70 bg-white h-10 my-4" />
            <button type="submit" className="border"> valider</button>
          </div>
        </div>
      <footer className="bg-[#0d2b4b] text-white  px-6 py-10 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Bloc 1 - Logo et slogan */}
          <div>
            <div className="flex items-center mb-3">
              <div className="bg-blue-600 text-white font-bold text-lg w-6 h-6 flex items-center justify-center rounded mr-2">E</div>
              <span className="text-3xl font-bold">Educonnect</span>
            </div>
            <p className="text-white text-lg">l'education au service de la jeunesse</p>
          </div>

          {/* Bloc 2 - Recherches courantes */}
          <div>
            <h4 className="font-semibold mb-2 text-xl">Recherches courantes</h4>
            <ul className="space-y-1 text-white text-lg">
              <li>Mathématiques</li>
              <li>Langue Anglaise</li>
              <li>Langue Française</li>
              <li>Physique</li>
              <li>Chimie</li>
            </ul>
          </div>

          {/* Bloc 3 - Lien rapide */}
          <div>
            <h4 className="font-semibold mb-2 text-xl">Lien rapide</h4>
            <ul className="space-y-1 text-white text-lg">
              <li>Donner cours</li>
              <li>Connexion</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Bloc 4 - Services */}
          <div>
            <h4 className="font-semibold mb-2 text-xl">Services</h4>
            <ul className="space-y-1 text-white text-lg">
              <li>Cours de répétition</li>
              <li>Recrutement répétiteur</li>
            </ul>
          </div>
        </div>

        {/* Informations de contact */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="text-white text-xl text-semibold"><FontAwesomeIcon icon={faPhone} className="mr-1 text-blue-700 text-xl" /> (+237) 699 245 658</div>
            <div className="text-white text-xl text-semibold"><FontAwesomeIcon icon={faEnvelope} className="mr-1 text-blue-700 text-xl" /> educonnect@gmail.com</div>
            <div className="text-white text-xl text-semibold"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1 text-blue-700 text-xl" /> Douala, Cameroun</div>
          </div>
          {/* Réseaux sociaux */}
          <div className="flex space-x-4">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} className=" rounded-full text-white" /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className=" rounded-full text-white" /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} className=" rounded-full text-white" /></a>
          </div>
        </div>
      </footer>

    </div>
      );
}
