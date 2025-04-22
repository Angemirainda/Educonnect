// services/api.js ou dans ton composant
import axios from 'axios';

export const updateProfil = async (formData) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/api/repetiteur/profil/update',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
