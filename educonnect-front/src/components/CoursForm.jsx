import { useState, useEffect } from "react";

const CoursForm = ({ currentCours, onSubmit }) => {
  const [nom, setNom] = useState(currentCours ? currentCours.name : "");
  const [matieres, setMatieres] = useState(
    currentCours ? currentCours.matieres.join(", ") : ""
  );
  const [jours, setJours] = useState(
    currentCours ? currentCours.jours.join(", ") : ""
  );
  const [heure, setHeure] = useState(
    currentCours ? `${currentCours.heure_debut}-${currentCours.heure_fin}` : ""
  );

  useEffect(() => {
    if (currentCours) {
      setNom(currentCours.name);
      setMatieres(currentCours.matieres.join(", "));
      setJours(currentCours.jours.join(", "));
      setHeure(`${currentCours.heure_debut}-${currentCours.heure_fin}`);
    }
  }, [currentCours]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const [heure_debut, heure_fin] = heure.split("-");
    const data = {
      name: nom,
      matieres: matieres.split(",").map((m) => m.trim()),
      jours: jours.split(",").map((j) => j.trim()),
      heure_debut,
      heure_fin,
    };

    onSubmit(data); // Appel de la fonction onSubmit pour ajouter/modifier un cours
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg">
      <h1 className="text-xl font-semibold">
        {currentCours ? "Modifier un cours" : "Ajouter un cours"}
      </h1>
      <input
        type="text"
        placeholder="Nom du client"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        className="border rounded w-full p-2 mb-2"
      />
      <input
        type="text"
        placeholder="Matières"
        value={matieres}
        onChange={(e) => setMatieres(e.target.value)}
        className="border rounded w-full p-2 mb-2"
      />
      <input
        type="text"
        placeholder="Jours"
        value={jours}
        onChange={(e) => setJours(e.target.value)}
        className="border rounded w-full p-2 mb-2"
      />
      <input
        type="text"
        placeholder="Heure (ex: 10:00-12:00)"
        value={heure}
        onChange={(e) => setHeure(e.target.value)}
        className="border rounded w-full p-2 mb-2"
      />
      <button
        type="submit"
        className="p-4 rounded text-xl font-semibold bg-blue-500 hover:bg-blue-700 text-white"
      >
        {currentCours ? "Modifier" : "Ajouter"}
      </button>
    </form>
  );
};

export default CoursForm;
