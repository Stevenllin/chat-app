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
  background-color: #ffffff0a;
  cursor: pointer;

  &:hover {
    background-color: #03818e;
  }
  
  svg {
    width: 32px;
    height: 32px;
    color: white;
  }
`

const MessageContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.2rem;
    &-thumb {
      background-color: #ffffff39;
      width: 0.1rem;
      border-radius: 1rem;
    }
  }
`

const EmojiInputContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;

  svg {
    color: white;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  .icons {
    padding: 1rem;
    border-radius: 1rem;
    background-color: #ffffff0a;

    &:hover {
      background-color: #03818e;
    }
  }

  .emoji {
    position: relative;

    .emoji-picker-react {
      position: absolute;
      left: 50px;
      top: -350px;
      background-color: #080420;
      box-shadow: 0 5px 10px #9a86f3;
      border-color: #9a86f3;
      .emoji-scroll-wrapper::-webkit-scrollbar {
        background-color: #080420;
        width: 5px;
        &-thumb {
          background-color: #9a86f3;
        }
      }
      .emoji-categories {
        button {
          filter: contrast(0);
        }
      }
      .emoji-search {
        background-color: transparent;
        border-color: #9a86f3;
      }
      .emoji-group:before {
        background-color: #080420;
      }
    }
  }

  input {
    width: 100%;
    padding: 0.6rem;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    border: 1.5px solid #ffffff39;
    border-radius: 0.4rem;
    color: #141e60;
    background-color: #ffffff39;
    opacity: 0.5;

    &:focus{
      outline: none;
      border: 3px solid #2597ba;
    }
  }
`

export { ContactContainer, ContactContent, ChatContainer, LogoutIcon, MessageContainer, EmojiInputContainer }