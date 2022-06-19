"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const createToken = (user) => {
    return jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1d',
    });
};
exports.createToken = createToken;
exports.default = { createToken: exports.createToken };
