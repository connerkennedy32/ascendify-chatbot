import { useState } from 'react'
import './App.css'
import ChatWindow from './Components/ChatWindow';
import ChatThumbnail from './Components/ChatThumbnail';
import { ChatContext, Message } from './context/ChatContext';
function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'How can we help you today?',
      sender: 'bot',
    },
  ]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const addMessage = ({ content, sender }: { content: string, sender: 'user' | 'bot' }) => {
    setMessages(prev => [...prev, { id: `${prev.length + 1}`, content, sender }]);
  };

  const removeLastMessage = () => {
    setMessages(messages.slice(0, -1));
  };

  // Create the context value object
  const chatContextValue = {
    isChatOpen,
    toggleChat,
    messages,
    addMessage,
    removeLastMessage,
  };

  return (
    <ChatContext.Provider value={chatContextValue}>
      <div className="chatbot-container">
        <ChatThumbnail />
        {isChatOpen && (
          <ChatWindow />
        )}
      </div>
    </ChatContext.Provider>
  )
}

export default App
