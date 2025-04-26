// export default function CoursItem({ cours, onToggle, onEdit, onDelete }) {
//   const matieres = Array.isArray(cours.matieres) 
//     ? cours.matieres 
//     : (typeof cours.matieres === "string" 
//         ? cours.matieres.split(",").map(m => m.trim()) 
//         : []);

//   return (
//     <div className="bg-white shadow p-4 rounded mb-4">
//       <h3 className="text-lg font-semibold">{cours.name}</h3>
//       <p>Matières : {matieres.join(", ")}</p>
//       <p>Jours : {Array.isArray(cours.jours) ? cours.jours.join(", ") : cours.jours}</p>
//       <p>Heure : {cours.heure_debut} - {cours.heure_fin}</p>
//       <p className={cours.completed ? "text-green-500" : "text-red-500"}>
//         Statut : {cours.completed ? "Terminé" : "En cours"}
//       </p>
//       <div className="flex space-x-2 mt-2">
//         <button onClick={() => onToggle(cours.id)} className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
//           {cours.completed ? "Annuler" : "Terminer"}
//         </button>
//         <button onClick={() => onEdit(cours)} className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
//           Modifier
//         </button>
//         <button onClick={() => onDelete(cours.id)} className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
//           Supprimer
//         </button>
//       </div>
//     </div>
//   );
// }

export default function CoursItem({ cours, onToggle, onEdit, onDelete }) {
  const matieres = Array.isArray(cours.matieres) 
    ? cours.matieres 
    : (typeof cours.matieres === "string" 
        ? cours.matieres.split(",").map(m => m.trim()) 
        : []);

  const isTermine = cours.statut.toLowerCase() === 'termine';

  return (
    <div className="bg-white shadow p-4 rounded mb-4">
      <h3 className="text-lg font-semibold">{cours.name}</h3>
      <p>Matières : {matieres.join(", ")}</p>
      <p>Jours : {Array.isArray(cours.jours) ? cours.jours.join(", ") : cours.jours}</p>
      <p>Heure : {cours.heure_debut} - {cours.heure_fin}</p>
      <p className={isTermine ? "text-green-500" : "text-red-500"}>
        Statut : {isTermine ? "Terminé" : "En cours"}
      </p>
      <div className="flex space-x-2 mt-2">
        <button onClick={() => onToggle(cours.id)} className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
          {cours.statut === "Termine" ? "Annuler" : "Terminer"}
        </button>
        <button onClick={() => onEdit(cours)} className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
          Modifier
        </button>
        <button onClick={() => onDelete(cours.id)} className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
          Supprimer
        </button>
      </div>
    </div>
  );
}

