// "use client";
// import * as React from "react";

// function Navbar() {
//   return (
//     <header>
//       <nav className="flex justify-between items-center px-5 py-0 mx-auto my-0 w-full max-w-[1130px] max-md:px-4 max-md:py-0 max-sm:px-2.5 max-sm:py-0">
//         <h1 className="text-4xl font-bold text-blue-600 max-md:text-3xl max-sm:text-2xl">
//           Educonnect
//         </h1>
//         <ul className="flex gap-5 max-sm:hidden">
//           <li>
//             <a
//               href="#"
//               className="text-2xl font-semibold text-black max-md:text-xl"
//             >
//               Accueil
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-2xl font-semibold text-black max-md:text-xl"
//             >
//               Donner cours
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-2xl font-semibold text-black max-md:text-xl"
//             >
//               Connexion
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-2xl font-semibold text-black max-md:text-xl"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;


"use client";
import React from "react";
import Header from "../components/header";
import HeroSection from "../components/HeroSection";
import SubjectCategories from "../components/SubjectCategories";

function EduconnectLanding() {

  

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;900&family=Poppins:wght@600;700&display=swap"
      />
      <main className="">
        {/* <Header />
        <HeroSection />
        <SubjectCategories /> */}
        <div className="bg-gradient-to-t from-blue-500 via-blue-300  w-fuh-150 h-150 rounded-b-4xl box-border px-5 py-0 mx-auto my-0 w-full max-w-[1180px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
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
          <section className="px-0 py-12 text-center rounded-none">
            <h2 className="mb-10 text-5xl font-black mt-10 text-black">
              Trouvez le professeur qu'il <br /> vous faut
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
          <SubjectCategories />
        </div>
        
          <h1 className="text-xl font-bold rounded-t-xl text-black px-35 py-4">Nous vous proposons une large gamme de <br />professeurs experimente</h1>
          <div className="container px-35">
            <div className="row-1 flex justify-center items-center gap-7">
              <div className=" row-11 rounded-t-xl w-120 h-80" >
                    <img src="/image/Rectangle 5.png" alt="" className="  rounded-t-xl w-70 h-60 object-cover"  />
                    <p className="text-white font-semibold  px-2 text-lg -mt-15">Stella Kameni</p>
                    <p className="text-white font-semibold px-2 text-lg  ">Deido</p>
                    <div className="px-2 flex gap-1 justify-end -mt-7">
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
              <div className=" row-12 rounded-t-xl w-120 h-80" >
                    <img src="/image/Rectangle 5.png" alt="" className="  rounded-t-xl w-70 h-60 object-cover"  />
                    <p className="text-white font-semibold  px-2 text-lg -mt-15">Stella Kameni</p>
                    <p className="text-white font-semibold px-2 text-lg  ">Deido</p>
                    <div className="px-2 flex gap-1 justify-end -mt-7">
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
              <div className=" row-13 rounded-t-xl w-120 h-80" >
                    <img src="/image/Rectangle 5.png" alt="" className="  rounded-t-xl w-70 h-60 object-cover"  />
                    <p className="text-white font-semibold  px-2 text-lg -mt-15">Stella Kameni</p>
                    <p className="text-white font-semibold px-2 text-lg  ">Deido</p>
                    <div className="px-2 flex gap-1 justify-end -mt-7">
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
              <div className=" row-14 rounded-t-xl w-120 h-80" >
                    <img src="/image/Rectangle 5.png" alt="" className="  rounded-t-xl w-70 h-60 object-cover"  />
                    <p className="text-white font-semibold  px-2 text-lg -mt-15">Stella Kameni</p>
                    <p className="text-white font-semibold px-2 text-lg  ">Deido</p>
                    <div className="px-2 flex gap-1 justify-end -mt-7">
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
            <div className="row-2 flex justify-center items-center gap-7 py-40">
              <div className=" row-21 rounded-t-xl w-120 h-80" >
                    <img src="/image/Rectangle 5.png" alt="" className="  rounded-t-xl w-70 h-60 object-cover"  />
                    <p className="text-white font-semibold  px-2 text-lg -mt-15">Stella Kameni</p>
                    <p className="text-white font-semibold px-2 text-lg  ">Deido</p>
                    <div className="px-2 flex gap-1 justify-end -mt-7">
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
              <div className=" row-22 rounded-t-xl w-120 h-80" >
                    <img src="/image/Rectangle 5.png" alt="" className="  rounded-t-xl w-70 h-60 object-cover"  />
                    <p className="text-white font-semibold  px-2 text-lg -mt-15">Stella Kameni</p>
                    <p className="text-white font-semibold px-2 text-lg  ">Deido</p>
                    <div className="px-2 flex gap-1 justify-end -mt-7">
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
              <div className=" row-23 rounded-t-xl w-120 h-80" >
                    <img src="/image/Rectangle 5.png" alt="" className="  rounded-t-xl w-70 h-60 object-cover"  />
                    <p className="text-white font-semibold  px-2 text-lg -mt-15">Stella Kameni</p>
                    <p className="text-white font-semibold px-2 text-lg  ">Deido</p>
                    <div className="px-2 flex gap-1 justify-end -mt-7">
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
              <div className=" row-24 rounded-t-xl w-120 h-80" >
                    <img src="/image/Rectangle 5.png" alt="" className="  rounded-t-xl w-70 h-60 object-cover"  />
                    <p className="text-white font-semibold  px-2 text-lg -mt-15">Stella Kameni</p>
                    <p className="text-white font-semibold px-2 text-lg  ">Deido</p>
                    <div className="px-2 flex gap-1 justify-end -mt-7">
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
          <div className="px-35 flex gap-10">
            <div className="py-40">
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
          <div className="px-35 h-150 w-full relative">
            <img src="/image/Rectangle 9.png" alt="" className="h-150 w-full object-cover  rounded-xl" />
            <div className="px-4 py-2 w-120 h-70 rounded-xl bg-white border  top-62 absolute right-2">
              <p className="font-bold text-blue-600 text-2xl">Educonnect</p>
            </div>
          </div>
       
      </main>
    </>
  );
}

export default EduconnectLanding;
