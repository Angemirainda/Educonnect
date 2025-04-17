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
import RegisterClient from "./pages/registerClient";
import LoginClient from "./pages/loginClient";
import RegisterRepetiteur from "./pages/registerRepetiteur";
import LoginRepetiteur from "./pages/loginRepetiteur";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/client/register" element={<RegisterClient />} />
        <Route path="/client/login" element={<LoginClient />} />
        <Route path="/repetiteur/register" element={<RegisterRepetiteur />} />
        <Route path="/repetiteur/login" element={<LoginRepetiteur />} />
      </Routes>
    </Router>
  );
}
