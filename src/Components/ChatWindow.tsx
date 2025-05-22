import React, { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import ReactPlayer from "react-player";

export default function ChatWindow() {
    const { toggleChat, messages, addMessage } = useContext(ChatContext);
    const [videoStepActive, setVideoStepActive] = useState(true);
    const [answer, setAnswer] = useState('');

    const ngrokUrl = 'https://d3cc-2601-681-c80-5180-9588-f4e3-a304-49aa.ngrok-free.app';

    return (
        <div className="chat-window">
            <div className="chat-header">
                <button style={{
                    backgroundColor: 'white',
                    color: 'black',
                    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
                    borderRadius: '5px',
                    padding: '5px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '16px',
                    gap: '3px',
                }}>
                    <img style={{
                        width: '24px',
                        height: '24px',
                    }} src={`${ngrokUrl}/baseline-call.svg`} alt="phone" />
                    <p style={{
                        margin: '0px',
                    }}>1 (970) 769-9157</p>
                </button>
                <button style={{
                    color: 'black',
                }} onClick={toggleChat}>x</button>
            </div>

            {videoStepActive &&
                <>
                    <ReactPlayer style={{
                        position: 'absolute',
                        top: '0px',
                        left: '0',
                        width: '100%',
                        height: '100%',
                    }} playing={true} loop={true} width='100%' height='100%' url={'https://cdn.jsdelivr.net/gh/connerkennedy32/ascendify-chatbot@master/dist/Annie_trimmed.mp4'} />

                    <div className="chatbot-gradient-overlay" />

                    <div style={{
                        position: 'absolute',
                        bottom: '180px',
                        width: '100%',
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '24px',
                        textShadow: '0px 0px 15px rgba(0, 0, 0, 1)'
                    }}>
                        {messages[0].content}
                    </div>

                    <div style={{
                        position: 'absolute',
                        marginLeft: '22px',
                        bottom: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '15px'
                    }}>
                        {['Individual Therapy', 'Couples Therapy', 'Family Therapy'].map((option, index) => (
                            <button onClick={() => {
                                addMessage({ content: option, sender: 'user' });

                                setTimeout(() => {
                                    addMessage({ content: 'What is your name?', sender: 'bot' });
                                }, 1000);
                                setVideoStepActive(false);
                            }} key={index} style={{
                                backgroundColor: 'white',
                                color: 'black',
                                padding: '10px 15px',
                                borderRadius: '20px',
                                border: 'none',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
                            }}>
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            }

            {!videoStepActive &&
                <div className="chat-messages">
                    {messages.map((message) => (
                        <React.Fragment key={message.id}>
                            <div className={`message ${message.sender}`}>
                                {message.content}
                            </div>
                            {message.sender === 'bot' && <img style={{
                                width: '25px',
                                height: '25px',
                                borderRadius: '50%',
                                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
                            }} src={`https://i.ibb.co/q3gDF3bg/Screenshot-2025-04-18-at-5-59-39-PM.png`} alt="phone" />}
                        </React.Fragment>
                    ))}
                </div>
            }



            <div className="chat-input">
                <input type="text" value={answer} onChange={(e) => {
                    setAnswer(e.target.value);
                }} placeholder="Type your message..." />
                <button onClick={() => {
                    addMessage({ content: answer, sender: 'user' });
                    if (answer == 'Annie Kennedy') {
                        setTimeout(() => {
                            addMessage({ content: 'What is your phone number?', sender: 'bot' });
                        }, 1000);
                    }
                    if (answer == '8016889383') {
                        setTimeout(() => {
                            addMessage({ content: 'Great! We\'ll be in touch shortly.', sender: 'bot' });
                        }, 1000);
                    }
                    setAnswer('');
                }}>Send</button>
            </div>
        </div>
    )
}