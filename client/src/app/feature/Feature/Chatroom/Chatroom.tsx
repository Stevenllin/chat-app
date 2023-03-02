import React, { useState, useEffect } from 'react';
import apiService from 'app/api/service/apiService';
import storageService from 'app/core/service/storageService';
import Picker, { IEmojiData } from "emoji-picker-react";
import { useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { RootState } from 'app/store/types';
import { useHistory } from 'react-router';
import { ROUTES } from 'app/core/router/path';
import { StorageKeysEnum } from 'app/core/enum/storage/storageKeysEnum';
import { BiPowerOff } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import { FiSmile } from "react-icons/fi";
import { ContactContainer, ContactContent, ChatContainer, LogoutIcon, MessageContainer, EmojiInputContainer } from 'assets/styledComponents/Feature/Chartroom';
import { GetAllUsersResp } from 'app/api/model/get/getAllUsers';
import { Messages } from 'app/api/model/post/postGetAllMessages';
import { FormValues } from './types';

const Chatroom: React.FC = () => {
  const routerHistory = useHistory();
  const [contacts, setContacts] = useState<GetAllUsersResp[]>([]);
  const [selectedContact, setSelectedContact] = useState<GetAllUsersResp|null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [messages, setMessages] = useState<Messages[]>([]);
  const currentUser = useSelector((state: RootState) => state.features.auth.user);

  const reactHookForm = useForm<FormValues>({
    defaultValues: {
      msg: ''
    }
  });

  useEffect(() => {
    (async () => {
      if (currentUser._id) {
        const response = await apiService.getAllUsers({}, currentUser._id)
        if (response) {
          setContacts(response);
        }
      }
    })();
  }, [currentUser]);

  useEffect(() => {
    (async () => {
      if (selectedContact) {
        const response = await apiService.postAllMessage({
          from: currentUser._id ?? '',
          to: selectedContact._id
        })
        console.log('response', response);
        setMessages(response);
      }
    })()
  }, [currentUser, selectedContact])

  const handleSelectContact = (item: GetAllUsersResp) => {
    setSelectedContact(item);
  }

  const handleLogoutBtn = () => {
    storageService.removeItem(StorageKeysEnum.Authorization);
    routerHistory.push(ROUTES.AUTH_LOGIN)
  }

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  }

  const handleEmojiClick = (event: React.MouseEvent<Element, MouseEvent>, emojiObject: IEmojiData) => {
    reactHookForm.setValue('msg', reactHookForm.getValues('msg') + emojiObject.emoji)
  }

  const handleFormSubmit = reactHookForm.handleSubmit(async (formValues) => {
    const response = await apiService.postAddMessages({
      from: currentUser?._id ?? '',
      to: selectedContact?._id ?? '',
      message: formValues.msg
    })
    console.log('response', response)
  });

  return (
    <div className="row p-5 h-100">
      {/** contacts */}
      <div className="col-2 h-100">
        <ContactContainer>
          {
            contacts.map((item, index) => (
              <ContactContent key={index} className="m-4 p-3" onClick={() => handleSelectContact(item)}>
                <img
                  width="60"
                  height="60"
                  src={`data:image/svg+xml;base64,${item.avatarImage}`}
                  alt="avatar"
                />
                <p>{item.username}</p>
              </ContactContent>
            ))
          }
        </ContactContainer>
        <div className="d-flex justify-content-center align-items-center m-3 p-3">
          <img
            width="80"
            height="80"
            src={`data:image/svg+xml;base64,${currentUser.avatarImage}`}
            alt="avatar"
          />
          <p className="ms-5 my-0 font-1 color-white">{currentUser.username.toUpperCase()}</p>
        </div>
      </div>
      {/** chatroom */}
      <div className="col-10 h-100">
        {
          selectedContact === null && (
            <div className="d-flex justify-content-center align-items-center h-100">
              <p className="color-main text-center font-1">
                Welcome <span className="font-2 fw-bold">{currentUser.username.toUpperCase()} !!</span>
                <br/>
                Please select a chat to Start messaging
              </p>
            </div>
          )
        }
        {
          selectedContact !== null && (
            <ChatContainer>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    width="80"
                    height="80"
                    src={`data:image/svg+xml;base64,${selectedContact.avatarImage}`}
                    alt="avatar"
                  />
                  <p className="ms-5 my-0 font-1 color-white">{selectedContact.username}</p>
                </div>
                <LogoutIcon onClick={handleLogoutBtn}>
                  <BiPowerOff />
                </LogoutIcon>
              </div>
              <MessageContainer>
                {
                  messages.map((message, index) => {
                    return (
                      <div key={index} className={`message ${message.fromSelf ? 'sended' : 'recieved'}`}>
                        <div className="content">
                          <p>{message.message}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </MessageContainer>
              <EmojiInputContainer>
                <div className="d-flex justify-content-center align-items-center icons emoji">
                  <FiSmile onClick={handleEmojiPickerhideShow} />
                  {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
                </div>
                <form className="d-flex" onSubmit={handleFormSubmit}>
                  <input
                    className="w-95 mx-4"
                    {...reactHookForm.register('msg')}
                    value={reactHookForm.watch('msg')}
                  />
                  <button
                    type="submit"
                    className="d-flex justify-content-center align-items-center icons"
                  >
                    <IoMdSend />
                  </button>
                </form>
              </EmojiInputContainer>
            </ChatContainer>
          )
        }
      </div>
    </div>
  )
}

export default Chatroom;