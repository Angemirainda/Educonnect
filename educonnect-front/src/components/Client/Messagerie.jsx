import { useState, useEffect, useRef } from 'react';

const Messagerie = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'admin',
      content: 'Bonjour ! Comment puis-je vous aider avec vos rendez-vous aujourd\'hui ?',
      timestamp: '02/05 09:30',
      isRead: true
    },
    {
      id: 2,
      sender: 'user',
      content: 'Bonjour ! J\'aimerais confirmer mes rendez-vous pour la semaine prochaine, notamment celui avec Sophie Martin.',
      timestamp: '02/05 09:35',
      isRead: true
    },
    {
      id: 3,
      sender: 'admin',
      content: 'Bien sûr, je vérifie cela tout de suite. Le rendez-vous avec Sophie Martin est bien confirmé pour lundi prochain à 14h. Avez-vous d\'autres questions ?',
      timestamp: '02/05 09:42',
      isRead: true
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll vers le bas quand de nouveaux messages arrivent
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isRead: true
    };

    setMessages([...messages, userMessage]);
    setNewMessage('');

    // Simulation de réponse automatique après 1 seconde
    setTimeout(() => {
      const adminReply = {
        id: messages.length + 2,
        sender: 'admin',
        content: 'Merci pour votre message. Nous traitons votre demande et vous répondrons au plus vite.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isRead: false
      };
      setMessages(prev => [...prev, adminReply]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Messagerie</h1>
        <p className="text-gray-600 mt-2">
          Communiquez avec l'administrateur concernant vos rendez-vous
        </p>
      </header>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* En-tête de la conversation */}
        <div className="p-4 md:p-6 border-b bg-indigo-50">
          <h2 className="text-lg md:text-xl font-semibold text-indigo-800">
            <i className="fa fa-comments mr-2"></i>
            Messagerie avec l'administrateur
          </h2>
          <p className="text-sm text-indigo-600 mt-1">
            Posez vos questions concernant vos rendez-vous
          </p>
        </div>

        {/* Zone de messages */}
        <div className="h-[400px] overflow-y-auto p-4 md:p-6 bg-gray-50">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-xs md:max-w-md rounded-lg px-4 py-3 ${message.sender === 'user' 
                  ? 'bg-indigo-600 text-white rounded-br-none' 
                  : 'bg-white border border-gray-200 rounded-bl-none shadow-sm'}`}
              >
                <div className="text-sm">{message.content}</div>
                <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-indigo-100' : 'text-gray-500'}`}>
                  {message.timestamp}
                  {message.sender === 'admin' && !message.isRead && (
                    <span className="ml-2 text-blue-500">
                      <i className="fa fa-check"></i>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Zone de saisie */}
        <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
          <div className="flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Écrivez votre message..."
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-r-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
            >
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Messages sécurisés et chiffrés</span>
            <span className="flex items-center">
              <i className="fa fa-lock mr-1"></i>
              Sécurisé
            </span>
          </div>
        </form>
      </div>

      {/* Instructions ou aide */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-medium text-blue-800 flex items-center">
          <i className="fa fa-info-circle mr-2"></i>
          Conseils pour une communication efficace
        </h3>
        <ul className="mt-2 text-sm text-blue-700 list-disc list-inside">
          <li>Précisez toujours la date et le nom du répétiteur concerné</li>
          <li>Vérifiez vos messages avant envoi</li>
          <li>Nos administrateurs répondent généralement dans l'heure</li>
        </ul>
      </div>
    </div>
  );
};

export default Messagerie;