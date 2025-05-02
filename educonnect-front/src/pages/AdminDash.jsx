

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faUsers,
//   faChalkboardTeacher,
//   faUserGraduate,
//   faEnvelope,
//   faFileContract,
//   faCog,
//   faChartBar,
//   faTimes,
//   faBars,
//   faBell,
//   faTrash,
// } from '@fortawesome/free-solid-svg-icons';

// // Sidebar Component
// const Sidebar = ({ isOpen, toggleSidebar, setSection }) => {
//   const menuItems = [
//     { name: 'Tutors', icon: faChalkboardTeacher, section: 'tutors' },
//     { name: 'Clients', icon: faUsers, section: 'clients' },
//     { name: 'Tutor Profiles', icon: faUserGraduate, section: 'profiles' },
//     { name: 'Messages', icon: faEnvelope, section: 'messages' },
//     { name: 'Contracts', icon: faFileContract, section: 'contracts' },
//     { name: 'Settings', icon: faCog, section: 'settings' },
//     { name: 'Statistics', icon: faChartBar, section: 'statistics' },
//   ];

//   return (
//     <div
//       className={`fixed inset-y-0 left-0 bg-blue-500 text-white w-64 transform ${
//         isOpen ? 'translate-x-0' : '-translate-x-full'
//       } md:translate-x-0 transition-transform duration-300 ease-in-out z-30`}
//     >
//       <div className="p-4">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//       </div>
//       <nav className="mt-4">
//         {menuItems.map((item) => (
//           <button
//             key={item.section}
//             onClick={() => setSection(item.section)}
//             className="flex items-center w-full p-4 hover:bg-blue-600 transition"
//           >
//             <FontAwesomeIcon icon={item.icon} className="mr-2" />
//             {item.name}
//           </button>
//         ))}
//       </nav>
//       <button
//         className="md:hidden absolute top-4 right-4 text-white"
//         onClick={toggleSidebar}
//       >
//         <FontAwesomeIcon icon={faTimes} />
//       </button>
//     </div>
//   );
// };

// // Tutors Component
// const Tutors = () => {
//   const [tutors, setTutors] = useState([
//     {
//       id: 1,
//       name: 'John Doe',
//       email: 'john@example.com',
//       cv: 'cv.pdf',
//       bac: 'bac.pdf',
//       cni: 'cni.pdf',
//       letter: 'letter.pdf',
//       status: 1,
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       email: 'jane@example.com',
//       cv: 'cv.pdf',
//       bac: 'bac.pdf',
//       cni: 'cni.pdf',
//       letter: 'letter.pdf',
//       status: 0,
//     },
//   ]);

//   const toggleStatus = (id) => {
//     setTutors(
//       tutors.map((tutor) =>
//         tutor.id === id ? { ...tutor, status: tutor.status === 1 ? 0 : 1 } : tutor
//       )
//     );
//   };

//   const deleteTutor = (id) => {
//     setTutors(tutors.filter((tutor) => tutor.id !== id));
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Tutors</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded-lg shadow">
//           <thead>
//             <tr className="bg-blue-500 text-white">
//               <th className="p-3">Name</th>
//               <th className="p-3">Email</th>
//               <th className="p-3">CV</th>
//               <th className="p-3">Bac</th>
//               <th className="p-3">CNI</th>
//               <th className="p-3">Letter</th>
//               <th className="p-3">Status</th>
//               <th className="p-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tutors.map((tutor) => (
//               <tr key={tutor.id} className="border-b">
//                 <td className="p-3">{tutor.name}</td>
//                 <td className="p-3">{tutor.email}</td>
//                 <td className="p-3">
//                   <a href={tutor.cv} className="text-blue-500">
//                     View
//                   </a>
//                 </td>
//                 <td className="p-3">
//                   <a href={tutor.bac} className="text-blue-500">
//                     View
//                   </a>
//                 </td>
//                 <td className="p-3">
//                   <a href={tutor.cni} className="text-blue-500">
//                     View
//                   </a>
//                 </td>
//                 <td className="p-3">
//                   <a href={tutor.letter} className="text-blue-500">
//                     View
//                   </a>
//                 </td>
//                 <td className="p-3">
//                   <button
//                     onClick={() => toggleStatus(tutor.id)}
//                     className={`px-2 py-1 rounded ${
//                       tutor.status === 1 ? 'bg-green-500' : 'bg-red-500'
//                     } text-white`}
//                   >
//                     {tutor.status === 1 ? 'Active' : 'Inactive'}
//                   </button>
//                 </td>
//                 <td className="p-3">
//                   <button
//                     onClick={() => deleteTutor(tutor.id)}
//                     className="text-red-500"
//                   >
//                     <FontAwesomeIcon icon={faTrash} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// // Clients Component
// const Clients = () => {
//   const [clients, setClients] = useState([
//     {
//       id: 1,
//       name: 'Alice Brown',
//       address: '123 Main St',
//       email: 'alice@example.com',
//     },
//     {
//       id: 2,
//       name: 'Bob Wilson',
//       address: '456 Oak Ave',
//       email: 'bob@example.com',
//     },
//   ]);

//   const deleteClient = (id) => {
//     setClients(clients.filter((client) => client.id !== id));
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Clients</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded-lg shadow">
//           <thead>
//             <tr className="bg-blue-500 text-white">
//               <th className="p-3">Name</th>
//               <th className="p-3">Address</th>
//               <th className="p-3">Email</th>
//               <th className="p-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clients.map((client) => (
//               <tr key={client.id} className="border-b">
//                 <td className="p-3">{client.name}</td>
//                 <td className="p-3">{client.address}</td>
//                 <td className="p-3">{client.email}</td>
//                 <td className="p-3">
//                   <button
//                     onClick={() => deleteClient(client.id)}
//                     className="text-red-500"
//                   >
//                     <FontAwesomeIcon icon={faTrash} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// // Tutor Profiles Component
// const TutorProfiles = () => {
//   const profiles = [
//     {
//       id: 1,
//       name: 'John Doe',
//       age: 30,
//       photo: 'https://via.placeholder.com/150',
//       description: 'Experienced math tutor.',
//       courses: ['Math', 'Physics'],
//       availability: 'Mon-Fri, 9 AM - 5 PM',
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       age: 28,
//       photo: 'https://via.placeholder.com/150',
//       description: 'French language expert.',
//       courses: ['French', 'Literature'],
//       availability: 'Tue-Sat, 10 AM - 6 PM',
//     },
//   ];

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Tutor Profiles</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {profiles.map((profile) => (
//           <div key={profile.id} className="bg-white p-4 rounded-lg shadow">
//             <img
//               src={profile.photo}
//               alt={profile.name}
//               className="w-32 h-32 rounded-full mx-auto"
//             />
//             <h3 className="text-xl font-bold mt-2 text-center">{profile.name}</h3>
//             <p className="text-gray-600 text-center">Age: {profile.age}</p>
//             <p className="mt-2">{profile.description}</p>
//             <p>
//               <strong>Courses:</strong> {profile.courses.join(', ')}
//             </p>
//             <p>
//               <strong>Availability:</strong> {profile.availability}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Messages Component
// const Messages = () => {
//   const [activeTab, setActiveTab] = useState('clients');

//   const clientMessages = [
//     {
//       id: 1,
//       sender: 'Alice Brown',
//       message: 'When is the next session?',
//       time: '2025-04-29 10:00',
//     },
//   ];
//   const tutorMessages = [
//     {
//       id: 1,
//       sender: 'John Doe',
//       message: 'Can we reschedule?',
//       time: '2025-04-29 12:00',
//     },
//   ];

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Messages</h2>
//       <div className="flex mb-4">
//         <button
//           onClick={() => setActiveTab('clients')}
//           className={`px-4 py-2 ${
//             activeTab === 'clients' ? 'bg-blue-500 text-white' : 'bg-gray-200'
//           }`}
//         >
//           Clients
//         </button>
//         <button
//           onClick={() => setActiveTab('tutors')}
//           className={`px-4 py-2 ${
//             activeTab === 'tutors' ? 'bg-blue-500 text-white' : 'bg-gray-200'
//           }`}
//         >
//           Tutors
//         </button>
//       </div>
//       <div className="bg-white p-4 rounded-lg shadow">
//         {activeTab === 'clients'
//           ? clientMessages.map((msg) => (
//               <div key={msg.id} className="border-b py-2">
//                 <p>
//                   <strong>{msg.sender}</strong> ({msg.time})
//                 </p>
//                 <p>{msg.message}</p>
//               </div>
//             ))
//           : tutorMessages.map((msg) => (
//               <div key={msg.id} className="border-b py-2">
//                 <p>
//                   <strong>{msg.sender}</strong> ({msg.time})
//                 </p>
//                 <p>{msg.message}</p>
//               </div>
//             ))}
//       </div>
//     </div>
//   );
// };

// // Contracts Component
// const Contracts = () => {
//   const [activeTab, setActiveTab] = useState('clients');

//   const clientContracts = [
//     {
//       id: 1,
//       client: 'Alice Brown',
//       title: 'Math Tutoring',
//       date: '2025-04-01',
//     },
//   ];
//   const tutorContracts = [
//     {
//       id: 1,
//       tutor: 'John Doe',
//       title: 'Teaching Agreement',
//       date: '2025-04-01',
//     },
//   ];

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Contracts</h2>
//       <div className="flex mb-4">
//         <button
//           onClick={() => setActiveTab('clients')}
//           className={`px-4 py-2 ${
//             activeTab === 'clients' ? 'bg-blue-500 text-white' : 'bg-gray-200'
//           }`}
//         >
//           Clients
//         </button>
//         <button
//           onClick={() => setActiveTab('tutors')}
//           className={`px-4 py-2 ${
//             activeTab === 'tutors' ? 'bg-blue-500 text-white' : 'bg-gray-200'
//           }`}
//         >
//           Tutors
//         </button>
//       </div>
//       <div className="bg-white p-4 rounded-lg shadow">
//         {activeTab === 'clients'
//           ? clientContracts.map((contract) => (
//               <div key={contract.id} className="border-b py-2">
//                 <p>
//                   <strong>{contract.client}</strong> - {contract.title}
//                 </p>
//                 <p>Date: {contract.date}</p>
//               </div>
//             ))
//           : tutorContracts.map((contract) => (
//               <div key={contract.id} className="border-b py-2">
//                 <p>
//                   <strong>{contract.tutor}</strong> - {contract.title}
//                 </p>
//                 <p>Date: {contract.date}</p>
//               </div>
//             ))}
//       </div>
//     </div>
//   );
// };

// // Settings Component
// const Settings = () => {
//   const [adminInfo, setAdminInfo] = useState({
//     name: 'Admin User',
//     email: 'admin@example.com',
//   });

//   const handleChange = (e) => {
//     setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
//   };

//   const handleSave = () => {
//     alert('Settings saved!');
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Settings</h2>
//       <div className="bg-white p-4 rounded-lg shadow">
//         <div className="mb-4">
//           <label className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={adminInfo.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={adminInfo.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <button
//           onClick={handleSave}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// };

// // Statistics Component
// const Statistics = () => {
//   const stats = {
//     totalTutors: 10,
//     totalClients: 50,
//     activeContracts: 30,
//     messagesToday: 15,
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Statistics</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-lg font-bold">Total Tutors</h3>
//           <p className="text-2xl text-blue-500">{stats.totalTutors}</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-lg font-bold">Total Clients</h3>
//           <p className="text-2xl text-blue-500">{stats.totalClients}</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-lg font-bold">Active Contracts</h3>
//           <p className="text-2xl text-blue-500">{stats.activeContracts}</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-lg font-bold">Messages Today</h3>
//           <p className="text-2xl text-blue-500">{stats.messagesToday}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Notifications Component
// const Notifications = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       message: 'New tutor application received.',
//       time: '2025-04-29 09:00',
//     },
//     {
//       id: 2,
//       message: 'Client requested a session.',
//       time: '2025-04-29 10:30',
//     },
//   ]);

//   const clearNotification = (id) => {
//     setNotifications(notifications.filter((notif) => notif.id !== id));
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="relative text-gray-600 hover:text-blue-500"
//       >
//         <FontAwesomeIcon icon={faBell} className="text-2xl" />
//         {notifications.length > 0 && (
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//             {notifications.length}
//           </span>
//         )}
//       </button>
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
//           <div className="p-4">
//             <h3 className="text-lg font-bold">Notifications</h3>
//             {notifications.length === 0 ? (
//               <p>No new notifications.</p>
//             ) : (
//               notifications.map((notif) => (
//                 <div
//                   key={notif.id}
//                   className="border-b py-2 flex justify-between"
//                 >
//                   <div>
//                     <p>{notif.message}</p>
//                     <p className="text-sm text-gray-500">{notif.time}</p>
//                   </div>
//                   <button
//                     onClick={() => clearNotification(notif.id)}
//                     className="text-red-500"
//                   >
//                     <FontAwesomeIcon icon={faTimes} />
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Main App Component
// const App = () => {
//   const [section, setSection] = useState('tutors');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const renderSection = () => {
//     switch (section) {
//       case 'tutors':
//         return <Tutors />;
//       case 'clients':
//         return <Clients />;
//       case 'profiles':
//         return <TutorProfiles />;
//       case 'messages':
//         return <Messages />;
//       case 'contracts':
//         return <Contracts />;
//       case 'settings':
//         return <Settings />;
//       case 'statistics':
//         return <Statistics />;
//       default:
//         return <Tutors />;
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar
//         isOpen={isSidebarOpen}
//         toggleSidebar={toggleSidebar}
//         setSection={setSection}
//       />
//       <div className="flex-1 flex flex-col">
//         <header className="bg-white shadow p-4 flex justify-between items-center md:ml-64">
//           <button
//             className="md:hidden text-gray-600"
//             onClick={toggleSidebar}
//           >
//             <FontAwesomeIcon icon={faBars} className="text-2xl" />
//           </button>
//           <h1 className="text-xl font-bold">Tutoring Management</h1>
//           <Notifications />
//         </header>
//         <main className="flex-1 md:ml-64 bg-gray-100">{renderSection()}</main>
//       </div>
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default App;



