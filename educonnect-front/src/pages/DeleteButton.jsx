export const deleteProfil = async () => {
    try {
      const response = await axios.delete('http://localhost:8000/api/repetiteur/profil/delete', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  };
  