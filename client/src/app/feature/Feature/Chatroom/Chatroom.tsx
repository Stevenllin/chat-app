import React, { useState, useEffect } from 'react';
import apiService from 'app/api/service/apiService';
import { useSelector } from "react-redux";
import { RootState } from 'app/store/types';
import { ContactContainer, ContactContent } from 'assets/styledComponents/Feature/Chartroom';
import { GetAllUsersResp } from 'app/api/model/get/getAllUsers';
// import { Contact } from './types';

const Chatroom: React.FC = () => {
  const [contacts, setContacts] = useState<GetAllUsersResp[]>([]);
  const currentUser = useSelector((state: RootState) => state.features.auth.user);
  console.log('currentUser', currentUser);

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
  console.log('contact', contacts)
  return (
    <div className="row p-5 h-100">
      <div className="col-2 h-100">
        <ContactContainer>
          {
            contacts.map((item, index) => (
              <ContactContent key={index} className="m-3 p-3">
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
          <p className="ms-5 my-0 font-1">{currentUser.username.toUpperCase()}</p>
        </div>
      </div>
      <div className="col-10 h-100">2</div>
    </div>
  )
}

export default Chatroom;