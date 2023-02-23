import mongoose, { model } from 'mongoose';
import { UserState } from './types';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  token: {
    type: String,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false
  },
  avatarImage: {
    type: String,
    default: ''
  }
})

const User = model<UserState>('User', userSchema);

export default User;