import axios from "axios";
import React, { createRef, useState, useEffect } from "react";
import { API_URL, SOCKET_URL } from "../config";
import "./ChatPage.css";
import io from "socket.io-client";
import { useNavigate, useParams } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
let socket = "";

function ChatPage(props) {
  // Assing a ref to the messages div
  const { user } = props;
  let messagesEnd = createRef();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [messageList, setMessageList] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const { chatId } = useParams();

  const scrollToBottom = () => {
    messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    //setup your socket connection with the server
    socket = io(`${SOCKET_URL}`);
    const getMessages = async () => {
      let response = await axios.get(`${API_URL}/messages/${chatId}`);
      setLoading(false);
      setMessageList(response.data);

      // ensure that the user is connected to a specific chat via webSocket
      socket.emit("join_chat", chatId);

      //Handle incoming messages from webSocket
      socket.on("receive_message", (data) => {
        setMessageList(data);
      });
    };

    getMessages();
  }, []);

  useEffect(() => {
    // makes the chat scroll to the bottom everytime a new message is sent or received
    scrollToBottom();
  }, [messageList]);

  const handleMessageInput = (e) => {
    setCurrentMessage(e.target.value);
  };

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
    setMessageList([...messageList, messageContent.content]);
    setCurrentMessage("");
  };

  if (loading) {
    <p>Loading all messages . . .</p>;
  }
  if (!user) {
    navigate("/signin");
  }

  return (
    <div className="container">
      <div className="chatContainer">
        <div className="messages">
          {messageList.map((val) => {
            console.log(val.sender);
            console.log(user);
            return (
              <div id="name">
                <div
                  key={val._id}
                  className="messageContainer"
                  id={val.sender.name == user.name ? "You" : "Other"}
                >
                  <div className="messageIndividual">
                    {val.sender.name}: {val.message}
                  </div>
                </div>
              </div>
            );
          })}
          <div
            style={{ float: "left", clear: "both" }}
            ref={(el) => {
              messagesEnd = el;
            }}
          >
            {" "}
          </div>
        </div>
        <div className="messageInputs">
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          />
          <TextField
            value={currentMessage}
            type="text"
            placeholder="Message..."
            onChange={handleMessageInput}
            id="outlined-basic"
            label="Message"
            variant="outlined"
          />
          <SendIcon id="sendIcon" onClick={sendMessage}></SendIcon>
        </div>
        <Stack spacing={2} direction="row">
          <Button
            variant="outlined"
            style={{ marginBottom: "10px", color: "black" }}
          >
            <Link
              to={"/yourjobs"}
              style={{ textDecoration: "none", color: "#2e2c2c" }}
            >
              {" "}
              Back to Job list
            </Link>
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default ChatPage;
