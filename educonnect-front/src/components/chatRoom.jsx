import { useChat } from "../hooks/useChat";
import { useState } from "react";
import Message from './Message';
import MessageInput from './MessageInput';

const ChatRoom = ({ roomId ,user}) => {
    const { messages, sendMessage } = useChat(roomId);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = (user, text) => {
        sendMessage(user, text);
        setNewMessage("");
    }


    return (
        <div className="chat-room">
            <div className="messages">
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
            <MessageInput sendMessage={handleSendMessage} user={user}/>
        </div>
    )
}
export default ChatRoom;


// import { useChat } from "../components/chatRoom";
// import { useState } from "react";
// import Message from "./Message";

// const ChatRoom = ({ roomId, user }) => {
//   const { messages, sendMessage } = useChat(roomId);
//   const [newMessage, setNewMessage] = useState("");

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       sendMessage(user, newMessage); // Envoi du message avec `user` et `text`
//       setNewMessage(""); // Réinitialisation du champ de saisie
//     }
//   };

//   return (
//     <div className="chat-room">
//       <div className="messages">
//         {messages.map((message) => (
//           <Message key={message.id} message={message} />
//         ))}
//       </div>
//       <div className="message-input">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Écrivez un message..."
//           className="border rounded p-2 w-full"
//         />
//         <button
//           onClick={handleSendMessage}
//           className="bg-blue-500 text-white p-2 rounded"
//         >
//           Envoyer
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatRoom;