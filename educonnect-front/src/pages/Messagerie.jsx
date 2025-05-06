// import ChatRoom from '../components/chatRoom';
// import {useState} from 'react';

// const Messagerie=() =>{
//     // const [roomId, setRoomId] = useState(null);
//     const [user, setUser] = useState("Ange");
//     const roomId = 'room1'; // Replace with actual room ID;
//     return (
//         <div className="messagerie">
//             <h1>Messagerie</h1>
//             <div className="chat">
//                 <select name="" id="" value={user} onChange={(e)=> setUser(e.target.value)}>
//                     <option value="Ange">Ange</option>
//                     <option value="Brunel">Brunel</option>
//                 </select>
//                 <ChatRoom roomId={roomId} user={user} ></ChatRoom>
//             </div>
//         </div>
//     );

//     }
// export default Messagerie;

import ChatRoom from "../components/chatRoom";
import { useState } from "react";

const Messagerie = () => {
  const [user, setUser] = useState("Ange");
  const roomId = "room1"; // ID unique pour la conversation

  return (
    <div className="messagerie">
      <h1>Messagerie</h1>
      <div className="chat">
        <select
          name="user"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        >
          <option value="Ange">Ange</option>
          <option value="Brunel">Brunel</option>
        </select>
        <ChatRoom roomId={roomId} user={user} />
      </div>
    </div>
  );
};

export default Messagerie;
