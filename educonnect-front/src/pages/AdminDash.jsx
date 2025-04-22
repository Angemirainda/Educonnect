
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

export default function ClientDashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/admin/login");
    }
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "/admin/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Supprimer les données de l'utilisateur et rediriger
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/admin/login");
    } catch (err) {
      console.error("Erreur lors de la déconnexion :", err);
    }
  };

  return (
    <div className="p-6">
      {user && (
        <h1 className="text-2xl font-bold">Bienvenue, {user.name} </h1>
      )}
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700"
      >
        Se déconnecter
      </button>
    </div>
  );
}