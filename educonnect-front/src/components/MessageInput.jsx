import{useState} from 'react';

const MessageInput = ({ sendMessage,user }) => {
    const [text, setText] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
        sendMessage(user,text);
        setText('');
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="flex items-center">
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message..."
            className="border rounded p-2 w-full mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
            Send
        </button>
        </form>
    );
}
 export default MessageInput;