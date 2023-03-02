import mongoose, { model } from 'mongoose';
import { MessageState } from './types';

const messageSchema = new mongoose.Schema(
  {
    message: {
      text: { type: String, required: true },
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Messages = model<MessageState>('Messages', messageSchema);

export default Messages;