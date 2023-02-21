"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
require('dotenv').config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect((_b = (_a = process.env) === null || _a === void 0 ? void 0 : _a.MONGO_URL) !== null && _b !== void 0 ? _b : '').then(() => {
    console.log('DB Connection is successful');
}).catch((error) => {
    console.log(error.message);
});
const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on Port ${process.env.PORT}`);
});
