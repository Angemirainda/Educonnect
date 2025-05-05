import React, { useState } from 'react';

const Messagerie = () => {
  const [messages, setMessages] = useState([
    {
      text: "Bonjour ! Comment puis-je vous aider avec vos rendez-vous aujourd'hui ?",
      sent: false,
      time: "02/05 09:30"
    },
    {
      text: "Bonjour ! J'aimerais confirmer mes rendez-vous pour la semaine prochaine, notamment celui avec Sophie Martin.",
      sent: true,
      time: "02/05 09:35"
    },
    {
      text: "Bien sûr, je vérifie cela tout de suite. Le rendez-vous avec Sophie Martin est bien confirmé pour lundi prochain à 14h. Avez-vous d'autres questions ?",
      sent: false,
      time: "03/05 06:42"
    }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const updatedMessages = [
      ...messages,
      {
        text: newMessage,
        sent: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];

    setMessages(updatedMessages);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* En-tête */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <h1 className="text-xl font-bold">Messagerie</h1>
        <p className="text-sm text-gray-500">Communiquez avec l'administrateur concernant vos rendez-vous</p>
      </div>

      {/* Titre de la conversation */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <h2 className="text-lg font-medium">Messagerie avec l'administrateur</h2>
        <p className="text-sm text-gray-500">Posez vos questions concernant vos rendez-vous</p>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-3 rounded-lg max-w-xs md:max-w-md shadow ${
                  msg.sent ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
              >
                <p>{msg.text}</p>
                <p
                  className={`text-xs mt-1 text-right ${
                    msg.sent ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {msg.time}
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
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
            onClick={sendMessage}
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messagerie;