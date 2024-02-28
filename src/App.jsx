

import './App.css'
import ChatWindow from './components/ChatWindow'
import React, { useState, useEffect } from "react";

function App() {


  const [currentUser, setCurrentUser] = useState({
    id: 1, // Replace with actual user ID
    username: "John Doe",
    newMessage: "hello"
  });

  return (
    <div className="App">
      <h1>Chat App</h1>
      <ChatWindow user={currentUser} />
    </div>
  );
}

export default App
