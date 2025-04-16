import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage.jsx'; // ta page d'accueil
import RegisterPage from './pages/registerPage.jsx';
import LoginPage from './pages/loginPage.jsx';
// import App from './App.jsx'
import CandidaturePage from './pages/CandidaturePage.jsx'
 import './App.css'

//  ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/candidature" element={<CandidaturePage />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
  
// )

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidature" element={<CandidaturePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
