import styled from "styled-components";

const ContactContainer = styled.div`
  height: 90%;
  background: #ffffff0a;
  border-radius: 2rem;
  overflow: scroll;
`

const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border-radius: 0.5rem;
  cursor: pointer;

  p {
    font-size: 20px;
    color: white;
    margin: 0;
  }

  img {
    border-radius: 5rem;
    box-shadow: 0px 0px 0px 4px #4e0eff;
  }
`

const ChatContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
`

const LogoutIcon = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background-color: #0395a4;
  cursor: pointer;
  
  svg {
    width: 32px;
    height: 32px;
    color: white;
  }
`

export { ContactContainer, ContactContent, ChatContainer, LogoutIcon }