import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase";
import Message from "./Message";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

const ChatWindow = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("Messages")
        .select("*");

      if (error) console.error("error fetching messages:", error);
      else setMessages(data);
    };

    fetchMessages();

     //const messageSubscription = supabase.from('Messages').subscribe("*", (payload) => setMessages((prev) => [...prev, payload.new]));

//       return () => supabase.removeSubscription(messageSubscription);
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!newMessage) return;

    const { data, error } = await supabase
      .from("Messages")
      .insert({
        sender_id: user.id,
        receiver_id: 1, // Replace with recipient ID
        content: newMessage,
      });

    if (error) console.error("error sending message:", error);
    else {
      setNewMessage("");
      setMessages((prev) => [...prev, data[0]]);
    }
  };

  return (
    <div className="chat-window">
      <ul>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          width={150}
          height={10}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
       
         <Button variant="outlined" sx={{ marginLeft: '10px' }}>Send</Button>

      </form>
    </div>
  );
};

export default ChatWindow;
