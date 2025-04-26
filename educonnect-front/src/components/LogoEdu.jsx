import React from 'react';

const EduConnectCustomLogo = () => {
  return (
    <div className="w-64 h-64">
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        {/* Logo principal */}
        <g transform="translate(100, 70) scale(1.2)">
          {/* Chapeau avec silhouette humaine */}
          <path d="M100,40 l60,-25 l60,25 l-60,25 z" fill="#3B82F6" />
          <rect x="145" y="40" width="30" height="40" fill="#3B82F6" />
          <path d="M100,65 l120,0" stroke="#3B82F6" strokeWidth="5" />
          
          {/* Pompon et fil du chapeau */}
          <line x1="175" y1="40" x2="175" y2="105" stroke="#3B82F6" strokeWidth="2" />
          <circle cx="175" cy="105" r="5" fill="#3B82F6" />
          
          {/* Silhouette humaine intégrée au chapeau */}
          <circle cx="140" cy="55" r="10" fill="#3B82F6" />
          <path d="M130,65 c10,25 40,25 50,0" fill="#3B82F6" />
  
          {/* Contours pour définir clairement la forme */}
          <path d="M100,40 l60,-25 l60,25 l-60,25 z M145,40 v40 M100,65 l120,0 M175,40 v65 M140,45 a10,10 0 1,0 0,20 a10,10 0 1,0 0,-20 z M130,65 c10,25 40,25 50,0" 
                fill="none" stroke="#3B82F6" strokeWidth="2" />
        </g>
        
        {/* Texte EDUCONNECT */}
        <text x="200" y="200" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" textAnchor="middle" fill="#3B82F6">EDUCONNECT</text>
        
        {/* Sous-titre */}
        <text x="200" y="220" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#3B82F6">POUR UN AVENIR RADIEUX</text>
      </svg>
    </div>
  );
};

export default EduConnectCustomLogo;