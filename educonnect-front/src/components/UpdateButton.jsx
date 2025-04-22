import { useState } from "react";
import axios from "../api/axios";
import { toast } from "react-toastify";

export default function UpdateButton({ id, data, endpoint = "/repetiteur/profil", onSuccess }) {
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await axios.put(`${endpoint}/${id}`, data);
      toast.success("Profil mis à jour !");
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la mise à jour");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleUpdate}
      disabled={loading}
      className="bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600"
    >
      {loading ? "Mise à jour..." : "Modifier"}
    </button>
  );
}
