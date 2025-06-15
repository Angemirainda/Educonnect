
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
      {/* Footer principal */}
      <footer className="px-15 py-10 mt-25">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Bloc 1 - Logo et slogan */}
          <div>
            <div className=" items-center mb-4">
              
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
              <li className="hover:text-blue-400 transition"> Anglais</li>
              <li className="hover:text-blue-400 transition"> Français</li>
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