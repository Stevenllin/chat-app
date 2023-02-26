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
exports.getAllUsers = exports.setAvatar = exports.login = exports.register = void 0;
const userModel_1 = __importDefault(require("../model/user/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const register = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const usernameCheck = yield userModel_1.default.findOne({ username });
        if (usernameCheck)
            return resp.json({ msg: 'Username already used', status: false });
        const emailCheck = yield userModel_1.default.findOne({ email });
        if (emailCheck)
            return resp.json({ msg: 'Email already used', status: false });
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const jwtKey = "my_secret_key";
        const token = jsonwebtoken_1.default.sign({ username }, jwtKey, {
            algorithm: "HS256",
            expiresIn: '2h'
        });
        const newUser = new userModel_1.default({
            username,
            email,
            token,
            password: hashedPassword
        });
        yield newUser.save();
        const user = yield userModel_1.default.findOne({ username });
        return resp.json({ status: true, user });
    }
    catch (error) {
        next(error);
    }
});
exports.register = register;
const login = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield userModel_1.default.findOne({ username });
        if (!user)
            return resp.json({ msg: 'Incorrect username or password', status: false });
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid)
            return resp.json({ msg: 'Incorrect username or password', status: false });
        return resp.json({ status: true, user: user });
    }
    catch (error) {
        next(error);
    }
});
exports.login = login;
const setAvatar = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const avatarImage = req.body.image;
        const userData = yield userModel_1.default.findByIdAndUpdate(userId, {
            isAvatarImageSet: true,
            avatarImage,
        }, { new: true });
        return resp.json({
            isAvatarImageSet: userData && userData.isAvatarImageSet,
            avatarImage: userData && userData.avatarImage,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.setAvatar = setAvatar;
const getAllUsers = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentUserId = req.params.id;
        const users = yield userModel_1.default.find({ _id: { $ne: currentUserId } }).select([
            "email",
            "username",
            "avatarImage",
            "_id",
        ]);
        return resp.json(users);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllUsers = getAllUsers;
