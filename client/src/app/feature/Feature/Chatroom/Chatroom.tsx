import React, { useState, useEffect } from 'react';
import apiService from 'app/api/service/apiService';
import { useSelector } from "react-redux";
import { RootState } from 'app/store/types';
import { BiPowerOff } from "react-icons/bi";
import { ContactContainer, ContactContent, ChatContainer, LogoutIcon } from 'assets/styledComponents/Feature/Chartroom';
import { GetAllUsersResp } from 'app/api/model/get/getAllUsers';

// import { Contact } from './types';

const Chatroom: React.FC = () => {
  const [contacts, setContacts] = useState<GetAllUsersResp[]>([]);
  const [selectedContact, setSelectedContact] = useState<GetAllUsersResp|null>(null);
  const currentUser = useSelector((state: RootState) => state.features.auth.user);

  useEffect(() => {
    (async () => {
      if (currentUser._id) {
        const response = await apiService.getAllUsers({}, currentUser._id)
        if (response) {
          setContacts(response);
        }
      }
    })();
  }, []);
  const handleSelectContact = (item: GetAllUsersResp) => {
    setSelectedContact(item);
  }
  console.log('selectedContact', selectedContact);
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
                <LogoutIcon>
                  <BiPowerOff />
                </LogoutIcon>
              </div>
            </ChatContainer>
          )
        }
      </div>
    </div>
  )
}

export default Chatroom;