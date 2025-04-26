import CoursItem from './CoursItem';

const CoursList = ({ coursList, onToggle, onDelete, onEdit }) => {
  if (!coursList.length) {
    return <p className="text-center text-gray-500">Aucun cours pour l'instant.</p>;
  }

  return (
    <div className="space-y-2">
      {coursList.map((cours) => (
        <CoursItem
          key={cours.id}
          cours={cours}
          onToggle={() => onToggle(cours.id)} // Marquer comme terminé
          onDelete={() => onDelete(cours.id)} // Supprimer
          onEdit={() => onEdit(cours)} // Modifier
        />
      ))}
    </div>
  );
};

export default CoursList;

