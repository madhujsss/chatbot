import React from 'react';

const Message = ({ message }) => {
  const { content, sender, timestamp } = message;

  return (
    <li className={`message ${sender === 'user' ? 'sent' : 'received'}`}>
      <div className="message-content">{content}</div>
      <div className="message-info">
        <span>{sender}</span>
        <span>{timestamp}</span>
      </div>
    </li>
  );
};

export default Message;
