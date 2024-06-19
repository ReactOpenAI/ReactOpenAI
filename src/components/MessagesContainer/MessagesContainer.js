import * as React from 'react';
import axios from 'axios';
import './MessagesContainer.css';

export default function MessagesContainer(props) {
    const [userInput, setUserInput] = React.useState('');
    const [messages, setMessages] = React.useState([]);
    const [responses, setResponses] = React.useState([]);

    React.useEffect(
        () => {
            const fetchData = async () => {
                try {
                    const lastMessage = messages[messages.length - 1];
                    const apiUrl = `http://localhost:4000?question=${lastMessage}`;
                    const newResponse = await axios(apiUrl);
                    const allResponses = [...responses, newResponse.data];
                    setResponses(allResponses);
                } catch (error) {
                    console.log(error);
                }
            }
            if (messages[messages.length - 1] && messages[messages.length - 1].toLowerCase() === 'hey ai') {
                fetchData();
            }
        },
        [messages.length],
    );

    const handleUserInputChange = (textInput) => {
        setUserInput(textInput);
    };

    const handleSendMessages = () => {
        const allMessages = [...messages, userInput];
        setMessages(allMessages);
        setUserInput('');
    };

    return (
        <div className="messages-container">
            <div className="all-messages">
                {messages.map((message, index) => {
                    const response = responses[index];
                    return (
                        <div>
                            <p className="user-message">{message}</p>
                            <p className="ai-response">{response}</p>
                        </div>
                    );
                })}
            </div>
            <div className="text-input-container">
                <input 
                    type="text" 
                    className="text-input-field"
                    onChange={(e) => handleUserInputChange(e.target.value)}
                    value={userInput}
                    onKeyDown={(e) => {
                        if (e.code === 'Enter') {
                            handleSendMessages();
                        }
                    }}
                />
                <button 
                    className="send-button"
                    onClick={() => handleSendMessages()}
                >
                    Send
                </button>
            </div>
        </div>
    );
}
