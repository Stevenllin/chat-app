import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes';
import messageRouter from './routes/messageRoutes';
import { Server, Socket } from 'socket.io';

const app: Express = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api/auth', userRouter);
app.use('/api/messages', messageRouter);

mongoose.set('strictQuery', false);
mongoose.connect(process.env?.MONGO_URL ?? '').then(() => {
  console.log('DB Connection is successful')
}).catch((error) => {
  console.log(error.message)
})

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on Port ${process.env.PORT}`)
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

const globalUsersChat = global as typeof globalThis & {
  onlineUsers: Map<string, string>;
  chatSocket: Socket;
};

globalUsersChat.onlineUsers = new Map();

io.on('connection', (socket: Socket) => {
  globalUsersChat.chatSocket = socket;

  socket.on('add-user', (userId: string) => {
    globalUsersChat.onlineUsers.set(userId, socket.id)
  })

  socket.on('send-msg', (data) => {
    const sendUserSocket = globalUsersChat.onlineUsers.get(data.to)
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('msg-recieve', data.message)
    }
  })
})
