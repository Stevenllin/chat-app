import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from 'app/store/types';

const Chatroom: React.FC = () => {
  const authorizationState = useSelector((state: RootState) => state.features.auth.user);
  console.log('authorizationState', authorizationState);
  return (
    <div>12</div>
  )
}

export default Chatroom;