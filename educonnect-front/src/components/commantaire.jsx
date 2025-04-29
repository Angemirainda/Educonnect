import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Commentaire = () => {
  const [contenu, setContenu] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [commentaires, setCommentaires] = useState([]); // <- Nouveau pour stocker les commentaires

  // Fonction pour récupérer les commentaires
  const fetchCommentaires = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/commentaires", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCommentaires(response.data); // mets les commentaires dans le state
    } catch (error) {
      console.error("Erreur lors du chargement des commentaires:", error);
      toast.error("Erreur lors du chargement des commentaires");
    }
  };

  useEffect(() => {
    fetchCommentaires(); // au chargement du composant
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);

      const response = await axios.post(
        "http://localhost:8000/api/commentaires",
        { contenu },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 201) {
        toast.success("Commentaire envoyé avec succès !");
        setContenu("");
        fetchCommentaires(); // recharge la liste après ajout
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du commentaire:", error);
      toast.error("Erreur lors de l'ajout du commentaire");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ajouter-commentaire">
      <h2>Laisser un commentaire</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={contenu}
          onChange={(e) => setContenu(e.target.value)}
          placeholder="Votre commentaire..."
          rows="5"
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Envoi..." : "Envoyer le commentaire"}
        </button>
      </form>

      <div className="liste-commentaires">
        <h2>Commentaires :</h2>
        {commentaires.length > 0 ? (
          commentaires.map((commentaire) => (
            <div key={commentaire.id} className="commentaire">
              <p>{commentaire.contenu}</p>
              <small>Posté le {new Date(commentaire.created_at).toLocaleString()}</small>
            </div>
          ))
        ) : (
          <p>Aucun commentaire pour l'instant.</p>
        )}
      </div>
    </div>
  );
};

export default Commentaire;
