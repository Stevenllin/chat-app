import { register, login, setAvatar, getAllUsers } from '../controller/userController';
import { Router } from "express";

const userRouter = Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/setavatar/:id', setAvatar);
userRouter.get('/allusers/:id', getAllUsers)

export default userRouter