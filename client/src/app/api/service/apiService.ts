import axios from 'axios';
import { PostAuthRegisterReq, PostAuthRegisterResp } from 'app/api/model/post/postAuthRegister';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  postAuthRegister: async (args: PostAuthRegisterReq) =>{
    return axios.post<PostAuthRegisterResp>('/api/auth/register', args)
      .then((response) => response.data)
  }
}