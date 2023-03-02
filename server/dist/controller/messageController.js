"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMessages = exports.getMessages = void 0;
const messageModel_1 = __importDefault(require("../model/message/messageModel"));
const getMessages = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { from, to } = req.body;
        const messages = yield messageModel_1.default.find({
            users: {
                $all: [from, to]
            },
        }).sort({ updatedAt: 1 });
        const projectedMessages = messages.map((msg) => {
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text
            };
        });
        return resp.json({
            projectedMessages
        });
    }
    catch (ex) {
        next(ex);
    }
});
exports.getMessages = getMessages;
const addMessages = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { from, to, message } = req.body;
        const newMessage = new messageModel_1.default({
            message: { text: message },
            users: [from, to],
            sender: from,
        });
        yield newMessage.save();
        return resp.json({ msg: "Message added successfully." });
    }
    catch (ex) {
        next(ex);
    }
});
exports.addMessages = addMessages;
