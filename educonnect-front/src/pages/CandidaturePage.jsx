import React, { useState } from 'react';
import api from '../api/axios'; // on utilise notre config axios

const CandidaturePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
  });

  const [files, setFiles] = useState({
    cv: null,
    lettre_motivation: null,
    releve_bac: null,
    piece_identite: null,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    Object.entries(files).forEach(([key, file]) => {
      if (file) data.append(key, file);
    });

    try {
      await api.post('/candidature', data);
      setMessage("Candidature envoyée avec succès !");
    } catch (error) {
      console.error('Erreur Axios :', error);
    
      if (error.response && error.response.status === 422) {
        // Laravel a retourné des erreurs de validation
        setErrors(error.response.data.errors);
      } else if (error.response && error.response.data.message) {
        // Autre erreur Laravel (ex: 500)
        setMessage("Erreur : " + error.response.data.message);
      } else {
        // console.error("Erreur inconnue :", error.message);
        setMessage("Erreur inconnue : " + error.message);
      }
      setMessage("Erreur lors de l'envoi.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Formulaire de candidature</h2>
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nom" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="telephone" placeholder="Téléphone" onChange={handleChange} required />

        <input type="file" name="cv" onChange={handleFileChange} required />
        <input type="file" name="lettre_motivation" onChange={handleFileChange} required />
        <input type="file" name="releve_bac" onChange={handleFileChange} required />
        <input type="file" name="piece_identite" onChange={handleFileChange} required />

        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default CandidaturePage;
