import { createContext } from 'react';

export type Message = {
    id: string;
    content: string;
    sender: 'user' | 'bot';
};

type ChatContextType = {
    isChatOpen: boolean;
    toggleChat: () => void;
    messages: Message[];
    addMessage: ({ content, sender }: { content: string, sender: 'user' | 'bot' }) => void;
    removeLastMessage: () => void;
};

// Create context with default values
export const ChatContext = createContext<ChatContextType>({
    isChatOpen: false,
    toggleChat: () => { },
    messages: [],
    addMessage: () => { },
    removeLastMessage: () => { },
}); 