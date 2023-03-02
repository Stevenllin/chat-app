import axios from 'axios';
import { GetAvatarReq, GetAvatarResp } from '../model/get/getAvatar';
import { GetAllUsersReq, GetAllUsersResp } from '../model/get/getAllUsers';
import { PostGetAllMessagesReq, PostGetAllMessagesResp } from '../model/post/postGetAllMessages';
import { PostAuthRegisterReq, PostAuthRegisterResp } from 'app/api/model/post/postAuthRegister';
import { PostAuthLoginReq, PostAuthLoginResp } from 'app/api/model/post/postAuthLogin';
import { PostAuthSetAvatarReq, PostAuthSetAvatarResp } from '../model/post/postAuthSetAvatar';
import { PostAddMessagesReq, PostAddMessagesResp } from '../model/post/postAddMessages';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAvatar: async (args: GetAvatarReq) => {
    return axios.get<GetAvatarResp>(`https://api.multiavatar.com/4645646/${Math.round(Math.random() * 1000)}`, args)
      .then((response) => response.data);
  },
  getAllUsers: async (args: GetAllUsersReq, id: string) => {
    return axios.get<GetAllUsersResp[]>(`/api/auth/allusers/${id}`, args)
      .then((response) => response.data)
  },
  postAuthRegister: async (args: PostAuthRegisterReq) => {
    return axios.post<PostAuthRegisterResp>('/api/auth/register', args)
    .then((response) => response.data)
  },
  postAuthLogin: async (args: PostAuthLoginReq) => {
    return axios.post<PostAuthLoginResp>('/api/auth/login', args)
    .then((response) => response.data)
  },
  postAuthSetAvatar: async (args: PostAuthSetAvatarReq, id: string) => {
    return axios.post<PostAuthSetAvatarResp>(`/api/auth/setavatar/${id}`, args)
    .then((response) => response.data);
  },
  postAllMessage: async (args: PostGetAllMessagesReq) => {
    return axios.post<PostGetAllMessagesResp>('/api/messages/getmsg', args)
      .then((response) => response.data.messages)
  },
  postAddMessages: async (args: PostAddMessagesReq) => {
    return axios.post<PostAddMessagesResp>('/api/messages/addmsg', args)
      .then((response) => response.data)
  }
}