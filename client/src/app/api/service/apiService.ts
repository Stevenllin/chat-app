import axios from 'axios';
import { GetAvatarReq, GetAvatarResp } from '../model/get/getAvatar';
import { GetAllUsersReq, GetAllUsersResp } from '../model/get/getAllUsers';
import { PostAuthRegisterReq, PostAuthRegisterResp } from 'app/api/model/post/postAuthRegister';
import { PostAuthLoginReq, PostAuthLoginResp } from 'app/api/model/post/postAuthLogin';
import { PostAuthSetAvatarReq, PostAuthSetAvatarResp } from '../model/post/postAuthSetAvatar';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAvatar: async (args: GetAvatarReq) => {
    return axios.get<GetAvatarResp>(`https://api.multiavatar.com/4645646/${Math.round(Math.random() * 1000)}`, args)
      .then((response) => response.data);
  },
  getAllUsers: async (args: GetAllUsersReq, id: string) => {
    return axios.get<GetAllUsersResp>(`/api/auth/allusers/${id}`, args)
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
  }
}