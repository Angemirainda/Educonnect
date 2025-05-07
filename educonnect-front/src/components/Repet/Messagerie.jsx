import React, { useState, useEffect } from 'react';
import { useChat } from '../../hooks/useChat';
import axios from '../../api/axios';

const Messagerie = () => {
  const [currentUser, setCurrentUser] = useState(null); // Utilisateur connecté
  const [newMessage, setNewMessage] = useState(''); // Nouveau message

  // Récupérer l'utilisateur connecté
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get('/auth/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setCurrentUser(response.data); // Stocker les informations de l'utilisateur connecté
      } catch (error) {
        console.error('Erreur lors de la récupération de l’utilisateur connecté', error);
      }
    };

    fetchCurrentUser();
  }, []);

  // Utiliser le hook useChat avec le roomId basé sur l'ID du répétiteur
  const roomId = currentUser?.id; // Utiliser l'ID du répétiteur comme roomId
  const { messages, sendMessage } = useChat(roomId);

  const handleSendMessage = (text) => {
    if (!text.trim() || !roomId) return;

    // Envoyer le message via Firebase
    sendMessage(currentUser.id, text);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* En-tête */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <h1 className="text-xl font-bold">Messagerie</h1>
        <p className="text-sm text-gray-500">Communiquez avec l'administrateur</p>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.user === currentUser?.id ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-xs md:max-w-md shadow ${
                  msg.user === currentUser?.id ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
              >
                <p>{msg.text}</p>
                <p
                  className={`text-xs mt-1 text-right ${
                    msg.user === currentUser?.id ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zone de saisie */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Écrivez votre message..."
            className="flex-1 border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(newMessage)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
            onClick={() => handleSendMessage(newMessage)}
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messagerie;