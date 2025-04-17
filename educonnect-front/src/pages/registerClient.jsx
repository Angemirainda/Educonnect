import { useState } from "react";
import { Link,useNavigate } from "react-router-dom"; // Import du composant Link
import axios from "axios";

export default function RegisterClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    adresse: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:8000/api/client/register", formData);
  //     alert("Inscription réussie !");
  //   } catch (error) {
  //     alert("Erreur : " + error.response.data.message);
  //   }
  // };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/client/register", formData);

      const { token, user } = res.data;

      // Sauvegarder token + user dans le localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Rediriger vers le dashboard
      navigate("/client/dashboard");
    } catch (error) {
      alert("Erreur : " + error.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-center">Inscription Client</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="input"
          name="name"
          onChange={handleChange}
          placeholder="Nom complet"
          required
        />
        <input
          className="input"
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          className="input"
          name="adresse"
          onChange={handleChange}
          placeholder="Adresse"
          required
        />
        <input
          className="input"
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Mot de passe"
          required
        />
        <input
          className="input"
          name="password_confirmation"
          type="password"
          onChange={handleChange}
          placeholder="Confirmer le mot de passe"
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
          S'inscrire
        </button>
      </form>
      <p className="mt-4 text-center">
        Vous avez déjà un compte ?{" "}
        <Link to="/client/login" className="text-blue-600 hover:underline">
          Connectez-vous ici
        </Link>
      </p>
    </div>
  );
}
