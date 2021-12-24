import styled from "styled-components";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #f5f6f8;
  height: 100%;
  margin: 0 !important;

  & #chat-wrap {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
    padding: 2rem 1rem;
  }
`;

export default ChatContainer;
