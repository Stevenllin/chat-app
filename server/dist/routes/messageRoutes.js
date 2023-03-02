"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messageController_1 = require("../controller/messageController");
const express_1 = require("express");
const messageRouter = (0, express_1.Router)();
messageRouter.post('/addmsg/', messageController_1.addMessages);
messageRouter.post('/getmsg/', messageController_1.getMessages);
exports.default = messageRouter;
