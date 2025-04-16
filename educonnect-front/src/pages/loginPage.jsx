// import React, { useState } from 'react';
// import api from '../api/axios';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post('/login', formData);
//       setMessage("Connexion réussie !");
//       localStorage.setItem('token', res.data.token);
//       // rediriger vers accueil ou dashboard
//     } catch (err) {
//       console.error(err);
//       setError("Identifiants incorrects");
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>Connexion</h2>
//       {message && <p style={{ color: 'green' }}>{message}</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <form onSubmit={handleSubmit}>
//         <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
//         <input name="password" placeholder="Mot de passe" type="password" onChange={handleChange} required />
//         <button type="submit">Se connecter</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import api from '../api/axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/login', formData);
      setMessage("Connexion réussie !");
      localStorage.setItem('token', res.data.token);
      // rediriger vers accueil ou dashboard
    } catch (err) {
      console.error(err);
      setError("Identifiants incorrects");
    }
  };

  return (
    <div style={{
      padding: "2rem",
      maxWidth: "400px",
      margin: "2rem auto",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9"
    }}>
      <h2 style={{
        textAlign: "center",
        color: "#333",
        marginBottom: "1.5rem"
      }}>Connexion</h2>
      {message && <p style={{ color: 'green', textAlign: "center" }}>{message}</p>}
      {error && <p style={{ color: 'red', textAlign: "center" }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          required
          style={{
            padding: "0.8rem",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => e.target.style.borderColor = "#007BFF"}
          onBlur={(e) => e.target.style.borderColor = "#ccc"}
        />
        <input
          name="password"
          placeholder="Mot de passe"
          type="password"
          onChange={handleChange}
          required
          style={{
            padding: "0.8rem",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            outline: "none",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => e.target.style.borderColor = "#007BFF"}
          onBlur={(e) => e.target.style.borderColor = "#ccc"}
        />
        <button
          type="submit"
          style={{
            padding: "0.8rem",
            fontSize: "1rem",
            color: "#fff",
            backgroundColor: "#007BFF",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#007BFF"}
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default LoginPage;