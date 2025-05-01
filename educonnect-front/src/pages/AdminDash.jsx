

// // import React, { useState } from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import {
// //   faUsers,
// //   faChalkboardTeacher,
// //   faUserGraduate,
// //   faEnvelope,
// //   faFileContract,
// //   faCog,
// //   faChartBar,
// //   faTimes,
// //   faBars,
// //   faBell,
// //   faTrash,
// // } from '@fortawesome/free-solid-svg-icons';

// // // Sidebar Component
// // const Sidebar = ({ isOpen, toggleSidebar, setSection }) => {
// //   const menuItems = [
// //     { name: 'Tutors', icon: faChalkboardTeacher, section: 'tutors' },
// //     { name: 'Clients', icon: faUsers, section: 'clients' },
// //     { name: 'Tutor Profiles', icon: faUserGraduate, section: 'profiles' },
// //     { name: 'Messages', icon: faEnvelope, section: 'messages' },
// //     { name: 'Contracts', icon: faFileContract, section: 'contracts' },
// //     { name: 'Settings', icon: faCog, section: 'settings' },
// //     { name: 'Statistics', icon: faChartBar, section: 'statistics' },
// //   ];

// //   return (
// //     <div
// //       className={`fixed inset-y-0 left-0 bg-blue-500 text-white w-64 transform ${
// //         isOpen ? 'translate-x-0' : '-translate-x-full'
// //       } md:translate-x-0 transition-transform duration-300 ease-in-out z-30`}
// //     >
// //       <div className="p-4">
// //         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
// //       </div>
// //       <nav className="mt-4">
// //         {menuItems.map((item) => (
// //           <button
// //             key={item.section}
// //             onClick={() => setSection(item.section)}
// //             className="flex items-center w-full p-4 hover:bg-blue-600 transition"
// //           >
// //             <FontAwesomeIcon icon={item.icon} className="mr-2" />
// //             {item.name}
// //           </button>
// //         ))}
// //       </nav>
// //       <button
// //         className="md:hidden absolute top-4 right-4 text-white"
// //         onClick={toggleSidebar}
// //       >
// //         <FontAwesomeIcon icon={faTimes} />
// //       </button>
// //     </div>
// //   );
// // };

// // // Tutors Component
// // const Tutors = () => {
// //   const [tutors, setTutors] = useState([
// //     {
// //       id: 1,
// //       name: 'John Doe',
// //       email: 'john@example.com',
// //       cv: 'cv.pdf',
// //       bac: 'bac.pdf',
// //       cni: 'cni.pdf',
// //       letter: 'letter.pdf',
// //       status: 1,
// //     },
// //     {
// //       id: 2,
// //       name: 'Jane Smith',
// //       email: 'jane@example.com',
// //       cv: 'cv.pdf',
// //       bac: 'bac.pdf',
// //       cni: 'cni.pdf',
// //       letter: 'letter.pdf',
// //       status: 0,
// //     },
// //   ]);

// //   const toggleStatus = (id) => {
// //     setTutors(
// //       tutors.map((tutor) =>
// //         tutor.id === id ? { ...tutor, status: tutor.status === 1 ? 0 : 1 } : tutor
// //       )
// //     );
// //   };

// //   const deleteTutor = (id) => {
// //     setTutors(tutors.filter((tutor) => tutor.id !== id));
// //   };

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold mb-4">Tutors</h2>
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full bg-white rounded-lg shadow">
// //           <thead>
// //             <tr className="bg-blue-500 text-white">
// //               <th className="p-3">Name</th>
// //               <th className="p-3">Email</th>
// //               <th className="p-3">CV</th>
// //               <th className="p-3">Bac</th>
// //               <th className="p-3">CNI</th>
// //               <th className="p-3">Letter</th>
// //               <th className="p-3">Status</th>
// //               <th className="p-3">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {tutors.map((tutor) => (
// //               <tr key={tutor.id} className="border-b">
// //                 <td className="p-3">{tutor.name}</td>
// //                 <td className="p-3">{tutor.email}</td>
// //                 <td className="p-3">
// //                   <a href={tutor.cv} className="text-blue-500">
// //                     View
// //                   </a>
// //                 </td>
// //                 <td className="p-3">
// //                   <a href={tutor.bac} className="text-blue-500">
// //                     View
// //                   </a>
// //                 </td>
// //                 <td className="p-3">
// //                   <a href={tutor.cni} className="text-blue-500">
// //                     View
// //                   </a>
// //                 </td>
// //                 <td className="p-3">
// //                   <a href={tutor.letter} className="text-blue-500">
// //                     View
// //                   </a>
// //                 </td>
// //                 <td className="p-3">
// //                   <button
// //                     onClick={() => toggleStatus(tutor.id)}
// //                     className={`px-2 py-1 rounded ${
// //                       tutor.status === 1 ? 'bg-green-500' : 'bg-red-500'
// //                     } text-white`}
// //                   >
// //                     {tutor.status === 1 ? 'Active' : 'Inactive'}
// //                   </button>
// //                 </td>
// //                 <td className="p-3">
// //                   <button
// //                     onClick={() => deleteTutor(tutor.id)}
// //                     className="text-red-500"
// //                   >
// //                     <FontAwesomeIcon icon={faTrash} />
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // // Clients Component
// // const Clients = () => {
// //   const [clients, setClients] = useState([
// //     {
// //       id: 1,
// //       name: 'Alice Brown',
// //       address: '123 Main St',
// //       email: 'alice@example.com',
// //     },
// //     {
// //       id: 2,
// //       name: 'Bob Wilson',
// //       address: '456 Oak Ave',
// //       email: 'bob@example.com',
// //     },
// //   ]);

// //   const deleteClient = (id) => {
// //     setClients(clients.filter((client) => client.id !== id));
// //   };

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold mb-4">Clients</h2>
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full bg-white rounded-lg shadow">
// //           <thead>
// //             <tr className="bg-blue-500 text-white">
// //               <th className="p-3">Name</th>
// //               <th className="p-3">Address</th>
// //               <th className="p-3">Email</th>
// //               <th className="p-3">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {clients.map((client) => (
// //               <tr key={client.id} className="border-b">
// //                 <td className="p-3">{client.name}</td>
// //                 <td className="p-3">{client.address}</td>
// //                 <td className="p-3">{client.email}</td>
// //                 <td className="p-3">
// //                   <button
// //                     onClick={() => deleteClient(client.id)}
// //                     className="text-red-500"
// //                   >
// //                     <FontAwesomeIcon icon={faTrash} />
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // // Tutor Profiles Component
// // const TutorProfiles = () => {
// //   const profiles = [
// //     {
// //       id: 1,
// //       name: 'John Doe',
// //       age: 30,
// //       photo: 'https://via.placeholder.com/150',
// //       description: 'Experienced math tutor.',
// //       courses: ['Math', 'Physics'],
// //       availability: 'Mon-Fri, 9 AM - 5 PM',
// //     },
// //     {
// //       id: 2,
// //       name: 'Jane Smith',
// //       age: 28,
// //       photo: 'https://via.placeholder.com/150',
// //       description: 'French language expert.',
// //       courses: ['French', 'Literature'],
// //       availability: 'Tue-Sat, 10 AM - 6 PM',
// //     },
// //   ];

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold mb-4">Tutor Profiles</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {profiles.map((profile) => (
// //           <div key={profile.id} className="bg-white p-4 rounded-lg shadow">
// //             <img
// //               src={profile.photo}
// //               alt={profile.name}
// //               className="w-32 h-32 rounded-full mx-auto"
// //             />
// //             <h3 className="text-xl font-bold mt-2 text-center">{profile.name}</h3>
// //             <p className="text-gray-600 text-center">Age: {profile.age}</p>
// //             <p className="mt-2">{profile.description}</p>
// //             <p>
// //               <strong>Courses:</strong> {profile.courses.join(', ')}
// //             </p>
// //             <p>
// //               <strong>Availability:</strong> {profile.availability}
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // // Messages Component
// // const Messages = () => {
// //   const [activeTab, setActiveTab] = useState('clients');

// //   const clientMessages = [
// //     {
// //       id: 1,
// //       sender: 'Alice Brown',
// //       message: 'When is the next session?',
// //       time: '2025-04-29 10:00',
// //     },
// //   ];
// //   const tutorMessages = [
// //     {
// //       id: 1,
// //       sender: 'John Doe',
// //       message: 'Can we reschedule?',
// //       time: '2025-04-29 12:00',
// //     },
// //   ];

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold mb-4">Messages</h2>
// //       <div className="flex mb-4">
// //         <button
// //           onClick={() => setActiveTab('clients')}
// //           className={`px-4 py-2 ${
// //             activeTab === 'clients' ? 'bg-blue-500 text-white' : 'bg-gray-200'
// //           }`}
// //         >
// //           Clients
// //         </button>
// //         <button
// //           onClick={() => setActiveTab('tutors')}
// //           className={`px-4 py-2 ${
// //             activeTab === 'tutors' ? 'bg-blue-500 text-white' : 'bg-gray-200'
// //           }`}
// //         >
// //           Tutors
// //         </button>
// //       </div>
// //       <div className="bg-white p-4 rounded-lg shadow">
// //         {activeTab === 'clients'
// //           ? clientMessages.map((msg) => (
// //               <div key={msg.id} className="border-b py-2">
// //                 <p>
// //                   <strong>{msg.sender}</strong> ({msg.time})
// //                 </p>
// //                 <p>{msg.message}</p>
// //               </div>
// //             ))
// //           : tutorMessages.map((msg) => (
// //               <div key={msg.id} className="border-b py-2">
// //                 <p>
// //                   <strong>{msg.sender}</strong> ({msg.time})
// //                 </p>
// //                 <p>{msg.message}</p>
// //               </div>
// //             ))}
// //       </div>
// //     </div>
// //   );
// // };

// // // Contracts Component
// // const Contracts = () => {
// //   const [activeTab, setActiveTab] = useState('clients');

// //   const clientContracts = [
// //     {
// //       id: 1,
// //       client: 'Alice Brown',
// //       title: 'Math Tutoring',
// //       date: '2025-04-01',
// //     },
// //   ];
// //   const tutorContracts = [
// //     {
// //       id: 1,
// //       tutor: 'John Doe',
// //       title: 'Teaching Agreement',
// //       date: '2025-04-01',
// //     },
// //   ];

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold mb-4">Contracts</h2>
// //       <div className="flex mb-4">
// //         <button
// //           onClick={() => setActiveTab('clients')}
// //           className={`px-4 py-2 ${
// //             activeTab === 'clients' ? 'bg-blue-500 text-white' : 'bg-gray-200'
// //           }`}
// //         >
// //           Clients
// //         </button>
// //         <button
// //           onClick={() => setActiveTab('tutors')}
// //           className={`px-4 py-2 ${
// //             activeTab === 'tutors' ? 'bg-blue-500 text-white' : 'bg-gray-200'
// //           }`}
// //         >
// //           Tutors
// //         </button>
// //       </div>
// //       <div className="bg-white p-4 rounded-lg shadow">
// //         {activeTab === 'clients'
// //           ? clientContracts.map((contract) => (
// //               <div key={contract.id} className="border-b py-2">
// //                 <p>
// //                   <strong>{contract.client}</strong> - {contract.title}
// //                 </p>
// //                 <p>Date: {contract.date}</p>
// //               </div>
// //             ))
// //           : tutorContracts.map((contract) => (
// //               <div key={contract.id} className="border-b py-2">
// //                 <p>
// //                   <strong>{contract.tutor}</strong> - {contract.title}
// //                 </p>
// //                 <p>Date: {contract.date}</p>
// //               </div>
// //             ))}
// //       </div>
// //     </div>
// //   );
// // };

// // // Settings Component
// // const Settings = () => {
// //   const [adminInfo, setAdminInfo] = useState({
// //     name: 'Admin User',
// //     email: 'admin@example.com',
// //   });

// //   const handleChange = (e) => {
// //     setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
// //   };

// //   const handleSave = () => {
// //     alert('Settings saved!');
// //   };

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold mb-4">Settings</h2>
// //       <div className="bg-white p-4 rounded-lg shadow">
// //         <div className="mb-4">
// //           <label className="block text-gray-700">Name</label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={adminInfo.name}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-gray-700">Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={adminInfo.email}
// //             onChange={handleChange}
// //             className="w-full p-2 border rounded"
// //           />
// //         </div>
// //         <button
// //           onClick={handleSave}
// //           className="bg-blue-500 text-white px-4 py-2 rounded"
// //         >
// //           Save Changes
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // // Statistics Component
// // const Statistics = () => {
// //   const stats = {
// //     totalTutors: 10,
// //     totalClients: 50,
// //     activeContracts: 30,
// //     messagesToday: 15,
// //   };

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold mb-4">Statistics</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //         <div className="bg-white p-4 rounded-lg shadow text-center">
// //           <h3 className="text-lg font-bold">Total Tutors</h3>
// //           <p className="text-2xl text-blue-500">{stats.totalTutors}</p>
// //         </div>
// //         <div className="bg-white p-4 rounded-lg shadow text-center">
// //           <h3 className="text-lg font-bold">Total Clients</h3>
// //           <p className="text-2xl text-blue-500">{stats.totalClients}</p>
// //         </div>
// //         <div className="bg-white p-4 rounded-lg shadow text-center">
// //           <h3 className="text-lg font-bold">Active Contracts</h3>
// //           <p className="text-2xl text-blue-500">{stats.activeContracts}</p>
// //         </div>
// //         <div className="bg-white p-4 rounded-lg shadow text-center">
// //           <h3 className="text-lg font-bold">Messages Today</h3>
// //           <p className="text-2xl text-blue-500">{stats.messagesToday}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Notifications Component
// // const Notifications = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [notifications, setNotifications] = useState([
// //     {
// //       id: 1,
// //       message: 'New tutor application received.',
// //       time: '2025-04-29 09:00',
// //     },
// //     {
// //       id: 2,
// //       message: 'Client requested a session.',
// //       time: '2025-04-29 10:30',
// //     },
// //   ]);

// //   const clearNotification = (id) => {
// //     setNotifications(notifications.filter((notif) => notif.id !== id));
// //   };

// //   return (
// //     <div className="relative">
// //       <button
// //         onClick={() => setIsOpen(!isOpen)}
// //         className="relative text-gray-600 hover:text-blue-500"
// //       >
// //         <FontAwesomeIcon icon={faBell} className="text-2xl" />
// //         {notifications.length > 0 && (
// //           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
// //             {notifications.length}
// //           </span>
// //         )}
// //       </button>
// //       {isOpen && (
// //         <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
// //           <div className="p-4">
// //             <h3 className="text-lg font-bold">Notifications</h3>
// //             {notifications.length === 0 ? (
// //               <p>No new notifications.</p>
// //             ) : (
// //               notifications.map((notif) => (
// //                 <div
// //                   key={notif.id}
// //                   className="border-b py-2 flex justify-between"
// //                 >
// //                   <div>
// //                     <p>{notif.message}</p>
// //                     <p className="text-sm text-gray-500">{notif.time}</p>
// //                   </div>
// //                   <button
// //                     onClick={() => clearNotification(notif.id)}
// //                     className="text-red-500"
// //                   >
// //                     <FontAwesomeIcon icon={faTimes} />
// //                   </button>
// //                 </div>
// //               ))
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // // Main App Component
// // const App = () => {
// //   const [section, setSection] = useState('tutors');
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   const renderSection = () => {
// //     switch (section) {
// //       case 'tutors':
// //         return <Tutors />;
// //       case 'clients':
// //         return <Clients />;
// //       case 'profiles':
// //         return <TutorProfiles />;
// //       case 'messages':
// //         return <Messages />;
// //       case 'contracts':
// //         return <Contracts />;
// //       case 'settings':
// //         return <Settings />;
// //       case 'statistics':
// //         return <Statistics />;
// //       default:
// //         return <Tutors />;
// //     }
// //   };

// //   return (
// //     <div className="flex min-h-screen">
// //       <Sidebar
// //         isOpen={isSidebarOpen}
// //         toggleSidebar={toggleSidebar}
// //         setSection={setSection}
// //       />
// //       <div className="flex-1 flex flex-col">
// //         <header className="bg-white shadow p-4 flex justify-between items-center md:ml-64">
// //           <button
// //             className="md:hidden text-gray-600"
// //             onClick={toggleSidebar}
// //           >
// //             <FontAwesomeIcon icon={faBars} className="text-2xl" />
// //           </button>
// //           <h1 className="text-xl font-bold">Tutoring Management</h1>
// //           <Notifications />
// //         </header>
// //         <main className="flex-1 md:ml-64 bg-gray-100">{renderSection()}</main>
// //       </div>
// //       {isSidebarOpen && (
// //         <div
// //           className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
// //           onClick={toggleSidebar}
// //         ></div>
// //       )}
// //     </div>
// //   );
// // };

// // export default App;



// // Simuler les icônes Font Awesome avec des composants simples
// const Icon = ({ name, className }) => {
//   const iconMap = {
//     'chart-line': '📈',
//     'user': '👤',
//     'users': '👥',
//     'comment': '💬',
//     'file-contract': '📄',
//     'cog': '⚙️',
//     'bell': '🔔',
//     'chevron-left': '◀',
//     'envelope': '✉️',
//     'folder': '📁',
//   };
  
//   return (
//     <span className={className}>{iconMap[name] || '🔷'}</span>
//   );
// };

// // Données factices pour le graphique
// const chartData = [
//   { mois: 'Jan', repetiteurs: 10, clients: 24 },
//   { mois: 'Fév', repetiteurs: 19, clients: 25 },
//   { mois: 'Mar', repetiteurs: 25, clients: 36 },
//   { mois: 'Avr', repetiteurs: 32, clients: 45 },
//   { mois: 'Mai', repetiteurs: 38, clients: 56 },
//   { mois: 'Juin', repetiteurs: 45, clients: 62 },
//   { mois: 'Juil', repetiteurs: 48, clients: 80 },
// ];

// // Activités récentes
// const activites = [
//   { 
//     id: 1, 
//     type: 'nouvel_utilisateur', 
//     nom: 'Jean Dupont', 
//     role: 'répétiteur', 
//     temps: '2 heures' 
//   },
//   { 
//     id: 2, 
//     type: 'nouvel_utilisateur', 
//     nom: 'Jean Dupont', 
//     role: 'répétiteur', 
//     temps: '2 heures' 
//   },
//   { 
//     id: 3, 
//     type: 'nouvel_utilisateur', 
//     nom: 'Jean Dupont', 
//     role: 'répétiteur', 
//     temps: '2 heures' 
//   },
// ];

// export default function Dashboard() {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
  
//   return (
//     <div className="flex flex-col h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-white shadow-sm z-10 flex items-center justify-between px-4 py-2 border-b">
//         <div className="flex items-center">
//           <button 
//             onClick={() => setSidebarOpen(!isSidebarOpen)}
//             className="mr-4 text-gray-600 md:hidden"
//           >
//             {isSidebarOpen ? <Icon name="chevron-left" /> : "☰"}
//           </button>
//           <span className="text-xl font-semibold text-blue-500">CoursGestionHub</span>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <Icon name="bell" className="text-gray-600" />
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//               1
//             </span>
//           </div>
//           <div className="flex items-center">
//             <span className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
//               A
//             </span>
//           </div>
//         </div>
//       </header>

//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <aside 
//           className={`bg-white w-64 border-r transform ${
//             isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//           } transition-transform duration-300 fixed h-full z-10 md:relative md:translate-x-0`}
//         >
//           <div className="p-4 flex items-center space-x-2 border-b">
//             <span className="text-blue-500 font-bold text-2xl">CGH</span>
//           </div>
//           <nav className="p-2">
//             <ul className="space-y-1">
//               <li>
//                 <a href="#" className="flex items-center space-x-2 p-3 rounded-lg bg-blue-500 text-white">
//                   <Icon name="chart-line" className="text-lg" />
//                   <span>Tableau de bord</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="flex items-center space-x-2 p-3 rounded-lg text-gray-700 hover:bg-gray-100">
//                   <Icon name="user" className="text-lg" />
//                   <span>Répétiteurs</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="flex items-center space-x-2 p-3 rounded-lg text-gray-700 hover:bg-gray-100">
//                   <Icon name="users" className="text-lg" />
//                   <span>Clients</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="flex items-center space-x-2 p-3 rounded-lg text-gray-700 hover:bg-gray-100">
//                   <Icon name="user" className="text-lg" />
//                   <span>Profils répétiteurs</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="flex items-center space-x-2 p-3 rounded-lg text-gray-700 hover:bg-gray-100">
//                   <Icon name="comment" className="text-lg" />
//                   <span>Messagerie</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="flex items-center space-x-2 p-3 rounded-lg text-gray-700 hover:bg-gray-100">
//                   <Icon name="file-contract" className="text-lg" />
//                   <span>Contrats</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="flex items-center space-x-2 p-3 rounded-lg text-gray-700 hover:bg-gray-100">
//                   <Icon name="cog" className="text-lg" />
//                   <span>Paramètres</span>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//           <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
//             <div className="flex items-center space-x-2">
//               <span className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
//                 A
//               </span>
//               <div className="flex flex-col">
//                 <span className="text-sm font-medium">Admin</span>
//                 <span className="text-xs text-gray-500">admin@example.com</span>
//               </div>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 overflow-y-auto p-4">
//           <div className="max-w-7xl mx-auto">
//             <div className="mb-6">
//               <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
//               <p className="text-gray-600">Bienvenue sur le tableau de bord d'administration CoursGestionHub</p>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//               <div className="bg-white p-4 rounded-lg shadow-sm">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-gray-700 font-medium">Total Répétiteurs</span>
//                   <Icon name="user" className="text-gray-400" />
//                 </div>
//                 <p className="text-3xl font-bold">124</p>
//                 <span className="text-green-500 text-sm">+14% depuis le mois dernier</span>
//               </div>
              
//               <div className="bg-white p-4 rounded-lg shadow-sm">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-gray-700 font-medium">Total Clients</span>
//                   <Icon name="users" className="text-gray-400" />
//                 </div>
//                 <p className="text-3xl font-bold">238</p>
//                 <span className="text-red-500 text-sm">-8% depuis le mois dernier</span>
//               </div>
              
//               <div className="bg-white p-4 rounded-lg shadow-sm">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-gray-700 font-medium">Contrats Actifs</span>
//                   <Icon name="folder" className="text-gray-400" />
//                 </div>
//                 <p className="text-3xl font-bold">89</p>
//                 <span className="text-green-500 text-sm">+23% depuis le mois dernier</span>
//               </div>
              
//               <div className="bg-white p-4 rounded-lg shadow-sm">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-gray-700 font-medium">Messages Non Lus</span>
//                   <Icon name="envelope" className="text-gray-400" />
//                 </div>
//                 <p className="text-3xl font-bold">12</p>
//                 <span className="text-red-500 text-sm">-2% depuis le mois dernier</span>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//               {/* Chart */}
//               <div className="bg-white p-4 rounded-lg shadow-sm lg:col-span-2">
//                 <h2 className="text-xl font-semibold mb-4">Croissance des utilisateurs</h2>
//                 <div className="h-64 relative">
//                   {/* Simulation d'un graphique simple */}
//                   <div className="flex h-full items-end space-x-6 pt-4 pb-4">
//                     {chartData.map((item, index) => (
//                       <div key={index} className="flex-1 flex flex-col items-center">
//                         <div className="w-full flex space-x-1 h-52">
//                           <div 
//                             className="bg-blue-500 w-5" 
//                             style={{ height: `${(item.repetiteurs / 80) * 100}%` }}
//                           ></div>
//                           <div 
//                             className="bg-blue-200 w-5" 
//                             style={{ height: `${(item.clients / 80) * 100}%` }}
//                           ></div>
//                         </div>
//                         <span className="text-xs text-gray-500 mt-2">{item.mois}</span>
//                       </div>
//                     ))}
//                   </div>
                  
//                   {/* Grid lines */}
//                   <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
//                     <div className="border-b border-gray-200 relative h-0">
//                       <span className="absolute -top-3 -left-4 text-xs text-gray-500">80</span>
//                     </div>
//                     <div className="border-b border-gray-200 relative h-0">
//                       <span className="absolute -top-3 -left-4 text-xs text-gray-500">60</span>
//                     </div>
//                     <div className="border-b border-gray-200 relative h-0">
//                       <span className="absolute -top-3 -left-4 text-xs text-gray-500">40</span>
//                     </div>
//                     <div className="border-b border-gray-200 relative h-0">
//                       <span className="absolute -top-3 -left-4 text-xs text-gray-500">20</span>
//                     </div>
//                     <div className="border-b border-gray-200 relative h-0">
//                       <span className="absolute -top-3 -left-4 text-xs text-gray-500">0</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Recent Activities */}
//               <div className="bg-white p-4 rounded-lg shadow-sm">
//                 <h2 className="text-xl font-semibold mb-4">Activités récentes</h2>
//                 <div className="space-y-4">
//                   {activites.map((activite) => (
//                     <div key={activite.id} className="flex space-x-3">
//                       <div className="bg-blue-100 rounded-full p-2 h-10 w-10 flex items-center justify-center shrink-0">
//                         <Icon name="user" className="text-blue-500" />
//                       </div>
//                       <div>
//                         <h3 className="font-medium">Nouvel utilisateur inscrit</h3>
//                         <p className="text-sm text-gray-600">
//                           {activite.nom} s'est inscrit en tant que {activite.role}
//                         </p>
//                         <p className="text-xs text-gray-500">Il y a {activite.temps}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }




const AdminDashboard = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Votre navbar et contenu ici */}
        {children}
      </div>
    </div>
  );
};
 export default AdminDashboard;  





















