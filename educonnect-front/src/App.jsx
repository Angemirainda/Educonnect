import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage.jsx'; // ta page d'accueil
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidature" element={<CandidaturePage />} />
      </Routes>
    </Router>
  );
}

export default App;
