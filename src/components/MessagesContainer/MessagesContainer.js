import {useEffect, useState} from 'react';
import axios from 'axios';
import './MessagesContainer.css';
import PatrickIMG from "../../assets/Patrick.jpg"
import aiIMG from "../../assets/chatgpt.png"

export default function MessagesContainer(props) {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [responses, setResponses] = useState([]);
    const {aiModelSelection}=props;
    console.log("this comment comes from MessagesContainer", aiModelSelection)

    useEffect(
        () => {
            const fetchData = async () => {
                try {
                    const lastMessage = messages[messages.length - 1];
                    const apiUrl = `https://reactopenai.azurewebsites.net/get-response?question=${lastMessage}&aimodelselection=${aiModelSelection}`;
                    const newResponse = await axios(apiUrl);
                    const allResponses = [...responses, newResponse.data];
                    setResponses(allResponses);
                } catch (error) {
                    console.log(error);
                }
            }
            if (messages.length) {
                fetchData();
            }
        },
        [messages],
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
                            <div className='user-group'> 
                                <div className='circular-image-user'>
                                    <img className="user-image" src={PatrickIMG}/>
                                </div>
                                <p className="user-message">{message}</p> 
                            </div>
                            <div className="ai-group"> 
                                <div className="circular-image-ai">
                                    <img className="ai-image" src={aiIMG}/>
                                </div>
                                <p className="ai-response">{response}</p>
                            </div>
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
