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