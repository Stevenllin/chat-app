"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const messageRoutes_1 = __importDefault(require("./routes/messageRoutes"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
require('dotenv').config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/auth', userRoutes_1.default);
app.use('/api/messages', messageRoutes_1.default);
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect((_b = (_a = process.env) === null || _a === void 0 ? void 0 : _a.MONGO_URL) !== null && _b !== void 0 ? _b : '').then(() => {
    console.log('DB Connection is successful');
}).catch((error) => {
    console.log(error.message);
});
const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on Port ${process.env.PORT}`);
});
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
});
const globalUsersChat = global;
globalUsersChat.onlineUsers = new Map();
io.on('connection', (socket) => {
    globalUsersChat.chatSocket = socket;
    socket.on('add-user', (userId) => {
        globalUsersChat.onlineUsers.set(userId, socket.id);
    });
    socket.on('send-msg', (data) => {
        const sendUserSocket = globalUsersChat.onlineUsers.get(data.to);
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit('msg-recieve', data.message);
        }
    });
});
