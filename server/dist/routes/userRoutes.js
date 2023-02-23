"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controller/userController");
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.post('/register', userController_1.register);
exports.default = userRouter;
