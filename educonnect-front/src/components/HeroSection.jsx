"use client";
import React from "react";

function HeroSection() {
  return (
    <section className="px-0 py-12 text-center rounded-none">
      <h2 className="mb-10 text-5xl font-black text-black">
        Trouvez le professeur qu'il vous faut
      </h2>
      <div className="flex gap-2.5 justify-center items-center mb-12">
        <input
          type="text"
          placeholder="En quoi avec vous besoin d'aide?"
          className="px-5 py-4 text-2xl font-medium border-sky-300 border-solid bg-slate-50 border-[5px] rounded-[60px] text-black text-opacity-70 w-[600px] max-md:w-[400px] max-sm:w-full"
        />
        <button className="px-10 py-4 text-2xl font-black text-white bg-blue-600 cursor-pointer rounded-[60px]">
          Rechercher
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
