import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { useChat } from '../../hooks/useChat';
import { database } from '../../services/firebase'; // Importez votre configuration Firebase
import { ref, onValue } from 'firebase/database'; // Importez les fonctions Firebase nécessaires

const Messagerie = () => {
  const [conversations, setConversations] = useState([]); // Liste des conversations
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConversation, setSelectedConversation] = useState(null); // Conversation sélectionnée
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showConversationList, setShowConversationList] = useState(true);
  const [newMessage, setNewMessage] = useState('');
  const [currentUser, setCurrentUser] = useState(null); // Utilisateur connecté

  // Utiliser le hook useChat pour la conversation sélectionnée
  const roomId = selectedConversation?.id; // Utiliser l'ID de la conversation sélectionnée comme roomId
  const { messages, sendMessage } = useChat(roomId); // Hook pour gérer les messages



    // Récupérer les informations de l'utilisateur connecté
    useEffect(() => {
      const fetchCurrentUser = async () => {
        try {
          const response = await axios.get('/auth/me', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          setCurrentUser(response.data);
        } catch (error) {
          console.error('Erreur lors de la récupération de l’utilisateur connecté', error);
        }
      };
  
      fetchCurrentUser();
    }, []);
  // Récupérer les données des conversations depuis l'API
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await axios.get('/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!Array.isArray(response.data.repetiteurs)) {
          console.error('Les données retournées ne sont pas un tableau');
          return;
        }

        const transformedConversations = response.data.repetiteurs.map((user) => ({
          id: user.id,
          client: user.name,
          lastMessage: '',
          time: '',
          unread: false,
        }));

        setConversations(transformedConversations);

        // Écouter les messages pour chaque conversation
        transformedConversations.forEach((conv) => {
          const messagesRef = ref(database, `rooms/${conv.id}/messages`);
          onValue(messagesRef, (snapshot) => {
            const messagesData = snapshot.val();
            if (messagesData) {
              const messagesArray = Object.values(messagesData);
              const lastMessage = messagesArray[messagesArray.length - 1];
              setConversations((prevConversations) =>
                prevConversations.map((c) =>
                  c.id === conv.id
                    ? {
                        ...c,
                        lastMessage: lastMessage.text,
                        time: new Date(lastMessage.timestamp).toLocaleTimeString(),
                      }
                    : c
                )
              );
            }
          });
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des conversations', error);
      }
    
      
    };

    
    fetchConversations();
  }, []);

  // Gérer la recherche
  const filteredConversations = conversations.filter(
    (conv) =>
      conv.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectConversation = (conv) => {
    setSelectedConversation(conv);
    if (isMobile) setShowConversationList(false);
  };

  const handleBackToList = () => {
    setShowConversationList(true);
  };

  const handleSendMessage = (text) => {
    if (!text.trim() || !selectedConversation) return;

    // Envoyer le message via Firebase
    sendMessage(currentUser.id, text);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 md:flex-row">
      {/* Liste des conversations */}
      {(showConversationList || !isMobile) && (
        <div
          className={`${
            isMobile ? 'w-full' : 'w-full md:w-1/3'
          } border-r border-gray-200 bg-white flex flex-col transition-all duration-300`}
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              {isMobile && !showConversationList && (
                <button
                  onClick={handleBackToList}
                  className="mr-2 text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-arrow-left"></i>
                </button>
              )}
              <h1 className="text-xl font-bold flex-1">Messagerie</h1>
            </div>
            <div className="mt-4 relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                  selectedConversation?.id === conv.id ? 'bg-blue-50' : ''
                }`}
                onClick={() => handleSelectConversation(conv)}
              >
                <div className="flex items-center justify-between">
                  {/* Avatar et nom du client */}
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <i className="fas fa-user text-blue-600"></i>
                    </div>
                    <h3
                      className={`text-sm font-medium ${
                        conv.unread ? 'text-black' : 'text-gray-700'
                      }`}
                    >
                      {conv.client}
                    </h3>
                  </div>

                  {/* Heure du dernier message */}
                  <span className="text-xs text-gray-500 whitespace-nowrap">{conv.time}</span>
                </div>

                {/* Dernier message */}
                <p
                  className={`mt-2 text-sm truncate ${
                    conv.unread ? 'font-medium text-gray-900' : 'text-gray-500'
                  }`}
                >
                  {conv.lastMessage}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Zone de conversation */}
      {(!showConversationList || !isMobile) && (
        <div
          className={`${
            isMobile ? 'w-full' : 'flex-1'
          } flex flex-col transition-all duration-300`}
        >
          {selectedConversation ? (
            <>
              <div className="p-4 border-b border-gray-200 bg-white flex items-center">
                {isMobile && (
                  <button
                    onClick={handleBackToList}
                    className="mr-2 text-gray-500 hover:text-gray-700"
                  >
                    <i className="fas fa-arrow-left"></i>
                  </button>
                )}
                <h2 className="text-lg font-medium">
                  {selectedConversation.client}
                </h2>
              </div>
              <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.user == currentUser.id ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`p-3 rounded-lg max-w-xs md:max-w-md shadow ${
                          msg.user == currentUser.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-white'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p
                          className={`text-xs mt-1 text-right ${
                            msg.user == currentUser.id
                              ? 'text-blue-100'
                              : 'text-gray-500'
                          }`}
                        >
                          {new Date(msg.timestamp).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`p-4 border-t border-gray-200 bg-white ${
                  isMobile ? 'fixed bottom-0 left-0 w-full' : ''
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Écrivez un message..."
                    className="flex-1 border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === 'Enter' && handleSendMessage(newMessage)
                    }
                  />
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
                    onClick={() => handleSendMessage(newMessage)}
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-100">
              <div className="text-center p-6">
                <i className="fas fa-comments text-4xl text-gray-300 mb-4"></i>
                <h2 className="text-xl font-medium text-gray-500">
                  Sélectionnez une conversation pour commencer
                </h2>
                <p className="text-gray-400 mt-2">
                  Ou commencez une nouvelle discussion
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Messagerie;