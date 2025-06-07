"use client";

import { useState, useEffect, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import { FaRobot } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type Message = {
  type: 'user' | 'bot';
  text: string;
  suggestions?: string[];
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Common suggestions
  const initialSuggestions = [
    "What skills do you have?",
    "Tell me about your experience",
    "What projects have you worked on?",
    "What technologies do you use?"
  ];
  
  // Add welcome message when component mounts
  useEffect(() => {
    setMessages([
      { 
        type: 'bot', 
        text: "Hi there! I'm Max's assistant. Ask me anything about his skills, experience, or projects!",
        suggestions: initialSuggestions
      }
    ]);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (messageText: string = input) => {
    if (!messageText.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: messageText }]);
    
    // Show typing indicator
    setIsTyping(true);
    
    try {
      // Call API route
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText }),
      });
      
      const data = await response.json();
      
      // Add bot response after a short delay
      setTimeout(() => {
        // Add suggestions based on the context
        let suggestions: string[] = [];
        
        // Add context-specific suggestions
        if (messageText.toLowerCase().includes('skill')) {
          suggestions = ["Which frameworks do you know?", "Do you know TypeScript?", "What about backend skills?"];
        } else if (messageText.toLowerCase().includes('project')) {
          suggestions = ["Tell me about your portfolio", "What was your most challenging project?", "Any open source contributions?"];
        } else if (messageText.toLowerCase().includes('experience') || messageText.toLowerCase().includes('work')) {
          suggestions = ["How many years of experience?", "What industries have you worked in?", "Do you have team leadership experience?"];
        } else {
          // Default suggestions if no context is detected
          suggestions = ["Tell me about your skills", "What projects are you proud of?", "What's your background?"];
        }
        
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: data.answer,
          suggestions
        }]);
        setIsTyping(false);
      }, 500);
    } catch (error) {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: "Sorry, I'm having trouble connecting. Please try again.",
        suggestions: initialSuggestions
      }]);
      setIsTyping(false);
    }
    
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat bubble button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
          aria-label="Open chat"
        >
          <FaRobot size={24} />
        </button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div className="bg-white border rounded-xl shadow-lg w-80 sm:w-96 flex flex-col h-96">
          {/* Chat header */}
          <div className="bg-blue-600 text-white p-3 rounded-t-xl flex justify-between items-center">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <FaRobot /> Ask me about Max
            </h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <IoClose size={20} />
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 p-3 overflow-y-auto">
            <div className="space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className="space-y-2">
                  <div 
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-gray-100 text-gray-800 rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  
                  {/* Suggestion chips */}
                  {msg.type === 'bot' && msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-2 ml-1">
                      {msg.suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(suggestion)}
                          className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-full transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Chat input */}
          <div className="border-t p-3 flex items-center gap-2">
            <input
              className="border rounded flex-1 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-50"
              onClick={() => handleSend()}
              disabled={isTyping || !input.trim()}
              aria-label="Send message"
            >
              <IoMdSend size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
