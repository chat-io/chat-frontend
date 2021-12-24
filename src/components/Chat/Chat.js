import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import ChatContainer from "./components/ChatContainer";
const Chat = () => {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <ChatContainer>
      <Navbar />
      <div id="chat-wrap">Data</div>
    </ChatContainer>
  );
};

export default Chat;
