// // components/DeleteButton.jsx
// import { toast } from "react-toastify";
// import axios from "../api/axios";

// export default function DeleteButton({ profilId, onDeleted }) {
//   const handleDelete = async () => {
//     if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce profil ?")) return;

//     try {
//       await axios.delete(`/repetiteur/profil/${profilId}`);
//       toast.success("Profil supprimé avec succès !");
//       if (onDeleted) onDeleted(); // Callback optionnel
//     } catch (error) {
//       toast.error("Erreur lors de la suppression du profil.");
//       console.error(error);
//     }
//   };

//   return (
//     <button
//       onClick={handleDelete}
//       className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
//     >
//       Supprimer
//     </button>
//   );
// }

import { useState } from "react";
import axios from "../api/axios";
import { toast } from "react-toastify";

export default function DeleteButton({ id, endpoint = "/repetiteur/profil", onSuccess }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce profil ?")) return;

    setLoading(true);
    try {
      await axios.delete(`${endpoint}/${id}`);
      toast.success("Profil supprimé !");
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la suppression");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
    >
      {loading ? "Suppression..." : "Supprimer"}
    </button>
  );
}

