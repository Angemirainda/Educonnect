// import React, { useState} from "react";
// import axios from "axios";
// import { toast } from "react-toastify"; // si tu utilises react-toastify pour les notifications

// const Commentaire = () => {
//   const [contenu, setContenu] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setIsSubmitting(true);

//       const response = await axios.post(
//         "http://localhost:8000/api/commentaires",
//         { contenu }, // envoie du texte
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`, // Attention ici il faut que ton token d'auth soit stocké
//           },
//         }
//       );

//       if (response.status === 201) {
//         toast.success("Commentaire ajouté avec succès !");
//         setContenu(""); // reset du champ
//       }
//     } catch (error) {
//       console.error("Erreur lors de l'ajout du commentaire:", error);
//       toast.error("Erreur lors de l'ajout du commentaire");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="ajouter-commentaire">
//       <h2>Laisser un commentaire</h2>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={contenu}
//           onChange={(e) => setContenu(e.target.value)}
//           placeholder="Votre commentaire..."
//           rows="5"
//           required
//         />
//         <button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? "Envoi..." : "Envoyer le commentaire"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Commentaire;


import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Commentaire = () => {
  const [contenu, setContenu] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    </div>
  );
};

export default Commentaire;
