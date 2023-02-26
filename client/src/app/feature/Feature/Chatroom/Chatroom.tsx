import React, { useState, useEffect } from 'react';
import apiService from 'app/api/service/apiService';
import { useSelector } from "react-redux";
import { RootState } from 'app/store/types';

const Chatroom: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.features.auth.user);
  console.log('current', currentUser);

  useEffect(() => {
    (async () => {
      if (currentUser.id) {
        console.log('currentUser', currentUser);
        const response = await apiService.getAllUsers({}, currentUser.id)
        console.log('response', response);
      }
    })();
  }, []);
  return (
    <div className="row p-5 h-100">
      <div className="col-2 h-100">1</div>
      <div className="col-10 h-100">2</div>
    </div>
  )
}

export default Chatroom;