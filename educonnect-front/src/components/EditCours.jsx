import { useState } from "react";
import { updateCours } from "../services/coursService";

export default function EditCours({ cours, onClose }) {
  const [form, setForm] = useState({
    name: cours.name,
    matieres: cours.matieres.join(", "),
    jours: cours.jours.join(", "),
    heure_debut: cours.heure_debut,
    heure_fin: cours.heure_fin,
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: form.name,
      matieres: form.matieres.split(",").map(m => m.trim()),
      jours: form.jours.split(",").map(j => j.trim()),
      heure_debut: form.heure_debut,
      heure_fin: form.heure_fin
    };

    try {
      await updateCours(cours.id, data);
      alert("Cours modifié !");
      onClose(); // Ferme la modal ou navigue
    } catch (err) {
      alert("Erreur: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <input type="text" name="name" value={form.name} onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="matieres" value={form.matieres} onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="jours" value={form.jours} onChange={handleChange} className="border p-2 w-full" />
      <div className="flex gap-2">
        <input type="text" name="heure_debut" placeholder="Début" value={form.heure_debut} onChange={handleChange} className="border p-2 w-full" />
        <input type="text" name="heure_fin" placeholder="Fin" value={form.heure_fin} onChange={handleChange} className="border p-2 w-full" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Enregistrer</button>
    </form>
  );
}
