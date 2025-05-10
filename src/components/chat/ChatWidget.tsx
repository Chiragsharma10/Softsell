import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, ChevronUp } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { faqs } from '../../data/siteData';
import type { ChatMessage as ChatMessageType } from '../../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Hi there! 👋 How can I help you with selling your software licenses today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // User message
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (message: string): string => {
    const normalizedMessage = message.toLowerCase();
    
    // Check for FAQ matches
    for (const faq of faqs) {
      if (
        normalizedMessage.includes(faq.question.toLowerCase()) ||
        (
          faq.question.toLowerCase().includes('how') && normalizedMessage.includes('how') && 
          faq.question.toLowerCase().includes('sell') && normalizedMessage.includes('sell')
        ) ||
        (
          faq.question.toLowerCase().includes('license') && normalizedMessage.includes('license') && 
          faq.question.toLowerCase().includes('accept') && normalizedMessage.includes('accept')
        ) ||
        (
          faq.question.toLowerCase().includes('data') && normalizedMessage.includes('data') && 
          faq.question.toLowerCase().includes('secure') && normalizedMessage.includes('secure')
        )
      ) {
        return faq.answer;
      }
    }
    
    // General responses
    if (normalizedMessage.includes('hello') || normalizedMessage.includes('hi')) {
      return 'Hello! How can I help you with selling your software licenses today?';
    } else if (normalizedMessage.includes('thank')) {
      return 'You\'re welcome! Is there anything else I can help you with?';
    } else if (normalizedMessage.includes('bye')) {
      return 'Goodbye! Feel free to reach out if you have more questions.';
    } else if (normalizedMessage.includes('price') || normalizedMessage.includes('cost') || normalizedMessage.includes('value')) {
      return 'License values vary based on type, remaining term, and market demand. Typically, you can expect between 40-75% of the original purchase price for valid licenses. Fill out our form for a specific valuation!';
    } else if (normalizedMessage.includes('time') || normalizedMessage.includes('long')) {
      return 'The process is quick! After submitting your license details, you\'ll get a valuation within 24 hours. Once you accept our offer, you\'ll receive payment in 2-3 business days.';
    } else if (normalizedMessage.includes('process') || normalizedMessage.includes('how') || normalizedMessage.includes('steps')) {
      return 'The process is simple: 1) Submit your license details, 2) Receive a valuation within 24 hours, 3) Accept our offer and get paid within 2-3 business days!';
    }
    
    // Default response
    return 'Thanks for your message! To get the most accurate information about selling your licenses, please fill out our contact form above and our team will reach out to you directly.';
  };

  const suggestedQuestions = [
    "How do I sell my license?",
    "What types of licenses do you accept?",
    "Is my data secure?",
    "How much can I get for my licenses?"
  ];

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
    // Automatically submit after a short delay
    setTimeout(() => {
      const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
      handleSendMessage(fakeEvent);
    }, 100);
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        onClick={toggleChat}
        className={`fixed z-50 bottom-6 right-6 p-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary-600 hover:bg-primary-700'
        } text-white`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-40 bottom-24 right-6 w-80 sm:w-96 h-[500px] max-h-[calc(100vh-120px)] bg-white dark:bg-gray-800 rounded-xl shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-primary-600 text-white flex justify-between items-center">
              <div className="flex items-center">
                <MessageSquare size={20} className="mr-2" />
                <h3 className="font-semibold">SoftSell Support</h3>
              </div>
              <button
                onClick={toggleChat}
                className="text-white hover:text-gray-200 focus:outline-none"
                aria-label="Close chat"
              >
                <ChevronUp size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isTyping && (
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm mt-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span>SoftSell is typing...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions */}
            {messages.length <= 2 && (
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="text-xs bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-gray-200 dark:border-gray-600 rounded-full px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-r-lg bg-primary-600 hover:bg-primary-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;