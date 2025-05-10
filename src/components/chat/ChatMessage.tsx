import React from 'react';
import { motion } from 'framer-motion';
import type { ChatMessage as ChatMessageType } from '../../types';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`mb-4 flex ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`max-w-[85%] ${isBot ? 'bg-gray-100 dark:bg-gray-700' : 'bg-primary-600 dark:bg-primary-700 text-white'} rounded-lg p-3`}>
        <p className="text-sm">{message.text}</p>
        <span className={`text-xs block mt-1 text-right ${isBot ? 'text-gray-500 dark:text-gray-400' : 'text-primary-100'}`}>
          {formatTime(message.timestamp)}
        </span>
      </div>
    </motion.div>
  );
};

export default ChatMessage;