// import { useState } from "react";
// import axios from "axios";

// export default function LoginAdmin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("/admin/login", form);

//       const { token, user } = res.data;

//       //  stocker dans localStorage
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));

//       // alert(`Bienvenue ${user.name} !`);
//       toast.success(`Bienvenue ${user.name} !`);

//       // redirection vers le dashboard
//       navigate("/admin/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.message || "Erreur lors de la connexion");
//     }

//     //   console.log(response.data); // Tu peux stocker le token ici
//     //   alert("Connexion réussie !");
//     // } catch (error) {
//     //   console.error("Erreur de connexion", error);
//     //   alert("Email ou mot de passe incorrect.");
//     // } finally {
//     //   setLoading(false);
//     // }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Connexion Admin</h2>
//         <div className="mb-4">
//           <label htmlFor="email" className="block mb-1 font-medium">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="password" className="block mb-1 font-medium">
//             Mot de passe
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//         >
//           {loading ? "Connexion..." : "Se connecter"}
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar1";
import { toast } from "react-toastify";

export default function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {      
      const res = await axios.post("http://localhost:8000/api/admin/login", {
        email,
        password,
      });

      const { token, admin } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("admin", JSON.stringify(admin));

      toast.success(`Bienvenue ${admin.name || admin.email} !`);
      navigate("/admin/dashboard");
    } catch (err) {
      const message = err.response?.data?.message || "Erreur lors de la connexion";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="min-h-screen flex items-center justify-center bg-gray-100"> 
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion Admin</h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-medium">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>

    </div>  );
}
