import axios from 'axios'
import React, { createRef, useState, useEffect } from 'react'
import {API_URL, SOCKET_URL} from '../config'
import './ChatPage.css'
import io from "socket.io-client";
import { useNavigate, useParams } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom'

let socket = ''

function ChatPage(props) {
    // Assing a ref to the messages div
    const { user } = props
    let messagesEnd = createRef()
    let navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [messageList, setMessageList] = useState([])
    const [currentMessage, setCurrentMessage] = useState('')
    const {chatId} = useParams()
    console.log(chatId, "the chatId")

    const scrollToBottom = () => {
        messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        //setup your socket connection with the server
        socket = io(`${SOCKET_URL}`);
        console.log(socket, API_URL, "its the socket")
        const getMessages = async () => {
            let response  = await axios.get(`${API_URL}/messages/${chatId}`)
            console.log("thi is the answer for message", response.data)
            setLoading(false)
            setMessageList(response.data)

            // ensure that the user is connected to a specific chat via webSocket    
            socket.emit("join_chat", chatId);

            //Handle incoming messages from webSocket
            socket.on("receive_message", (data) => {
                console.log('Got data', data)
                setMessageList(data)
            });   

        }

        getMessages()

    }, [])
    console.log("outisde the useeffect", messageList)
    useEffect(() => {
        // makes the chat scroll to the bottom everytime a new message is sent or received
        scrollToBottom();
    }, [messageList])

    const handleMessageInput = (e) => {
        setCurrentMessage( e.target.value )
    }

    const sendMessage = async () => {
        // Create the object structure
        let messageContent = {
            chatId, 
            content: {
              sender: props.user,
              message: currentMessage,
            },
          };
          
          // emit it so that everyone connected to the same chat receives the message
        await socket.emit("send_message", messageContent);
        setMessageList( [...messageList, messageContent.content])
        setCurrentMessage('')
    }

    
    if (loading) {
        <p>Loading all messages . . .</p>
    }
   /* if(!user){
        navigate("/signin")
    }*/
    return (
        <div>
            <h3>You're in the Chat Page </h3>
            <Link to={"/yourjobs"} >Back to your jobs </Link>
            <div className="chatContainer">
                <div className="messages">
                    {
                        messageList.map((val) => {
                            console.log("my users i dont know what is inside", user)
                            return (
                                <div key={val._id} className="messageContainer" id={val.sender.name == user.name ?"You" : "Other"}>
                                    <div className="messageIndividual">
                                        {val.sender.name}: {val.message}
                                    </div>
                                </div>
                            );
                        })
                    }
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { messagesEnd = el; }}>
                    </div>
                </div>
                <div className="messageInputs">
                    <input value={currentMessage} type="text" placeholder="Message..."
                        onChange={handleMessageInput}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}


export default ChatPage
