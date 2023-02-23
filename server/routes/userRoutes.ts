import { register } from '../controller/userController';
import { Router } from "express";

const userRouter = Router();

userRouter.post('/register', register);

export default userRouter