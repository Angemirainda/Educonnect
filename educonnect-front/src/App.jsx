// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/homePage.jsx'; // ta page d'accueil
// import RegisterPage from './pages/registerPage.jsx';
// import LoginPage from './pages/loginPage.jsx';
// // import App from './App.jsx'
// import CandidaturePage from './pages/CandidaturePage.jsx'
//  import './App.css'


// function AppRoutes() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/candidature" element={<CandidaturePage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default AppRoutes;
//       

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import du style
import RegisterClient from "./pages/registerClient";
import LoginClient from "./pages/loginClient";
import RegisterRepetiteur from "./pages/registerRepetiteur";
import LoginRepetiteur from "./pages/loginRepetiteur";
import CreateProfilRepetiteur from "./pages/CreateProfilRepetiteur";
import AdminRepetiteur from "./pages/AdminDash";
import ClientDashboard from "./pages/clientDash"
import Home from "./pages/homePage"
import DashboardRepetiteur from "./pages/repetiteurDash";
import LoginAdmin from "./pages/loginAdmin"; 
<ToastContainer position="top-right" autoClose={3000} />

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/client/register" element={<RegisterClient />} />
        <Route path="/client/login" element={<LoginClient />} />
        <Route path="/repetiteur/register" element={<RegisterRepetiteur />} />
        <Route path="/repetiteur/creer-profil" element={<CreateProfilRepetiteur />} />
        <Route path="/repetiteur/login" element={<LoginRepetiteur />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/admin/dashboard" element={<ClientDashboard />} />
        <Route path="/repetiteur/dashboard" element={<DashboardRepetiteur />} />
        <Route path="/profil/edit/:profilId" element={<CreateProfilRepetiteur />} />


      </Routes>
    </Router>
  );
}
