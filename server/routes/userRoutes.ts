import { register, login } from '../controller/userController';
import { Router } from "express";

const userRouter = Router();

userRouter.post('/register', register);
userRouter.post('/login', login)

export default userRouter