import HelperBubble from "./HelperBubble";
import { ChatContext } from "../context/ChatContext";
import { useContext } from "react";

export default function ChatThumbnail() {
    const { isChatOpen, toggleChat } = useContext(ChatContext);
    return (
        <>
            {!isChatOpen && (
                <HelperBubble />
            )}
            <button
                className="chat-button"
                onClick={toggleChat}
            >
                <img src="https://i.ibb.co/q3gDF3bg/Screenshot-2025-04-18-at-5-59-39-PM.png" alt="Chat" className="chat-avatar" />
                {!isChatOpen && <div className="notification-bubble">1</div>}
            </button>
        </>
    )
}