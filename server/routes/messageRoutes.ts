import { addMessages, getMessages } from '../controller/messageController';

import { Router } from "express";

const messageRouter = Router();

messageRouter.post('/addmsg/', addMessages);
messageRouter.post('/getmsg/', getMessages);

export default messageRouter;
