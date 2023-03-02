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

  // img {
  //   border-radius: 5rem;
  //   animation-name: animated-border;
  //   animation-duration: 1.5s;
  //   animation-iteration-count: infinite;
  // }

  // @keyframes animated-border {
  //   0% {
  //     box-shadow: 0px 0px 0px 0px #4e0eff;
  //   }
  //   100% {
  //     box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.2);
  //   }
  // }
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

  .message {
    display: flex;
    align-items: center;
    .content {
      max-width: 40%;
      overflow-wrap: break-word;
      padding: 1rem;
      font-size: 1.1rem;
      border-radius: 1rem;
      color: #d1d1d1;
    }
  }
  .sended {
    justify-content: flex-end;
    .content {
      background-color: #145d6c;
    }
  }
  .recieved {
    justify-content: flex-start;
    .content {
      background-color: #143d6c;
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

    aside.emoji-picker-react {
      border-radius: 0.5rem;
      box-shadow: 0px 0px 0px white !important;
    }

    .emoji-picker-react {
      position: absolute;
      left: 50px;
      top: -350px;
      background-color: #ffffff0a;
      
      .emoji-scroll-wrapper {
        overflow-x: hidden !important;
      }

      .emoji-scroll-wrapper::-webkit-scrollbar {
        width: 5px;
        &-thumb {
          border-radius: 0.5rem;
          background-color: white;
        }
      }

      .active-category-indicator {
        background-color: white;
      }
      
      .emoji-categories {
        button {
          padding: 10px;
          filter: invert(87%) sepia(89%) saturate(3%) hue-rotate(187deg) brightness(111%) contrast(97%);
        }
      }

      .emoji-categories .active {
        filter: invert(20%) sepia(61%) saturate(5093%) hue-rotate(173deg) brightness(100%) contrast(98%);
      }

      .emoji-search {
        background-color: transparent;
        border-color: white;
        margin-left: 15px;
        margin-bottom: 15px;
        color: white;
      }

      .emoji-group {
        width: 278.5px;
      }
      
      .emoji-group:before {
        padding: 0 5px;
        color: white;
        font-family: 'Montserrat', sans-serif;
        border-radius: 0.5rem !important;
        background-color: #03818e;
      }

      img.emoji-img {
        margin: 5px;
      }

      button[aria-label]:before {
        color: white !important;
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