"use client";
import * as React from "react";

function Navbar() {
  return (
    <header>
      <nav className="flex justify-between items-center px-5 py-0 mx-auto my-0 w-full max-w-[1130px] max-md:px-4 max-md:py-0 max-sm:px-2.5 max-sm:py-0">
        <h1 className="text-4xl font-bold text-blue-600 max-md:text-3xl max-sm:text-2xl">
          Educonnect
        </h1>
        <ul className="flex gap-5 max-sm:hidden">
          <li>
            <a
              href="/home"
              className="text-2xl font-semibold text-black max-md:text-xl"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl font-semibold text-black max-md:text-xl"
            >
              Donner cours
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl font-semibold text-black max-md:text-xl"
            >
              Connexion
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl font-semibold text-black max-md:text-xl"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;