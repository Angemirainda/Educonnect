import React, { useEffect, useState } from "react";

const DashboardRecentActivities = () => {
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/last-registration")
      .then((res) => res.json())
      .then((data) => {
        const activities = [];

        // Ajouter les répétiteurs
        data.latest_repetiteurs.forEach((rep) => {
          activities.push({
            id: `rep-${rep.id}`,
            type: "Nouvel utilisateur inscrit",
            description: `${rep.name} s'est inscrit en tant que répétiteur`,
            time: new Date(rep.created_at).toLocaleString("fr-FR", {
              dateStyle: "short",
              timeStyle: "short",
            }),
            icon: "fas fa-user-plus",
          });
        });

        // Ajouter les clients
        data.latest_clients.forEach((client) => {
          activities.push({
            id: `cli-${client.id}`,
            type: "Nouvel utilisateur inscrit",
            description: `${client.name} s'est inscrit en tant que client`,
            time: new Date(client.created_at).toLocaleString("fr-FR", {
              dateStyle: "short",
              timeStyle: "short",
            }),
            icon: "fas fa-user-plus",
          });
        });

        setRecentActivities(activities);
      })
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Activités récentes</h2>
      <div className="space-y-4">
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start pb-4 border-b border-gray-100 last:border-0"
          >
            <div
              className={`p-2 rounded-full mr-4 ${
                activity.type.includes("utilisateur")
                  ? "bg-blue-100 text-blue-600"
                  : activity.type.includes("contrat")
                  ? "bg-purple-100 text-purple-600"
                  : activity.type.includes("Message")
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              <i className={`${activity.icon} text-sm`}></i>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{activity.type}</h3>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardRecentActivities;
