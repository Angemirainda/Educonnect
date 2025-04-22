import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center px-0 py-5 max-sm:flex-col max-sm:items-start">
      <h1 className="text-4xl font-bold text-blue-600">Educonnect</h1>
      <nav className="flex gap-5 max-sm:hidden">
        <a href="#" className="text-2xl font-semibold text-black">
          Accueil
        </a>
        <a href="#" className="text-2xl font-semibold text-black">
          Donner cours
        </a>
        <a href="#" className="text-2xl font-semibold text-black">
          Connexion
        </a>
        <a href="#" className="text-2xl font-semibold text-black">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
