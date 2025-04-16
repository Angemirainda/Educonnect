import React, { useState } from 'react';
import api from '../api/axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: 'client', // ou "repetiteur"
    adresse: ''
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/register', formData);
      setMessage("Inscription réussie !");
      localStorage.setItem('token', res.data.token);
      // rediriger si besoin
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'inscription");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Inscription</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nom" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input name="password" placeholder="Mot de passe" type="password" onChange={handleChange} required />
        <input name="password_confirmation" placeholder="Confirmation mot de passe" type="password" onChange={handleChange} required />
        <select name="role" onChange={handleChange}>
          <option value="client">Client</option>
          <option value="repetiteur">Répetiteur</option>
        </select>
        <input name="adresse" placeholder="Adresse" onChange={handleChange} required />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default RegisterPage;
