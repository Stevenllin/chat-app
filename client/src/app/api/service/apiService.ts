import axios from 'axios';
import { GetAvatarReq, GetAvatarResp } from '../model/get/getAvatar';
import { PostAuthRegisterReq, PostAuthRegisterResp } from 'app/api/model/post/postAuthRegister';
import { PostAuthLoginReq, PostAuthLoginResp } from 'app/api/model/post/postAuthLogin';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAvatar: async (args: GetAvatarReq) => {
    return axios.get<GetAvatarResp>(`https://api.multiavatar.com/4645646/${Math.round(Math.random() * 1000)}`, args)
      .then((response) => response.data);
  },
  postAuthRegister: async (args: PostAuthRegisterReq) => {
    return axios.post<PostAuthRegisterResp>('/api/auth/register', args)
      .then((response) => response.data)
  },
  postAuthLogin: async (args: PostAuthLoginReq) => {
    return axios.post<PostAuthLoginResp>('/api/auth/login', args)
      .then((response) => response.data)
  }
}