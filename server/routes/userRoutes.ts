import { register, login, setAvatar } from '../controller/userController';
import { Router } from "express";

const userRouter = Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/setavatar/:id', setAvatar);

export default userRouter