import React from "react";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const Dashboard = () => {
  const stats = [
    {
      title: "Total Répétiteurs",
      value: "124",
      change: "14",
      isIncrease: true,
      icon: "fas fa-user",
    },
    {
      title: "Total Clients",
      value: "238",
      change: "8",
      isIncrease: true,
      icon: "fas fa-users",
    },
    {
      title: "Contrats Actifs",
      value: "89",
      change: "23",
      isIncrease: true,
      icon: "fas fa-file-contract",
    },
    {
      title: "Messages Non Lus",
      value: "12",
      change: "2",
      isIncrease: false,
      icon: "fas fa-envelope",
    },
  ];

  // Données pour le graphique
  const chartData = {
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil"],
    datasets: [
      {
        label: "Nouveaux utilisateurs",
        data: [20, 40, 60, 80, 60, 40, 20],
        backgroundColor: "#3B82F6",
        borderRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 20,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  // Données des activités récentes
  const recentActivities = [
    {
      id: 1,
      type: "Nouvel utilisateur inscrit",
      description: "Jean Dupont s'est inscrit en tant que répétiteur",
      time: "Il y a 2 heures",
      icon: "fas fa-user-plus",
    },
    {
      id: 2,
      type: "Nouveau contrat",
      description: "Contrat #4567 créé pour Marie Lambert",
      time: "Il y a 4 heures",
      icon: "fas fa-file-signature",
    },
    {
      id: 3,
      type: "Message reçu",
      description: "Nouveau message de Sophie Martin",
      time: "Il y a 5 heures",
      icon: "fas fa-envelope",
    },
    {
      id: 4,
      type: "Paiement reçu",
      description: "Paiement de 120€ pour le contrat #4562",
      time: "Il y a 1 jour",
      icon: "fas fa-euro-sign",
    },
  ];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Tableau de bord</h1>
      <p className="text-gray-600 mb-6">
        Bienvenue sur le tableau de bord d'administration EDUCONNECT{" "}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <div
                className={`p-3 rounded-full ${
                  index === 0
                    ? "bg-blue-100 text-blue-600"
                    : index === 1
                    ? "bg-green-100 text-green-600"
                    : index === 2
                    ? "bg-purple-100 text-purple-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                <i className={`${stat.icon} text-lg`}></i>
              </div>
            </div>
            <div
              className={`mt-4 text-sm ${
                stat.isIncrease ? "text-green-600" : "text-red-600"
              }`}
            >
              <span>
                {stat.isIncrease ? "≈" : ""}
                {stat.change}% depuis le mois dernier
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Section Graphique */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">
            Croissance des utilisateurs
          </h2>
          <div className="h-80 w-full">
            <Bar
              data={chartData}
              options={chartOptions}
              className="w-full h-full"
            />
          </div>
          <div className="flex justify-center mt-2 space-x-6">
            {chartData.labels.map((label, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-gray-500">{label}</div>
                <div className="font-medium">
                  {chartData.datasets[0].data[index]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Activités récentes */}
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
                  <p className="text-sm text-gray-600">
                    {activity.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

//by tiomela ange A.K.A chocolat noir
