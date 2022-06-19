"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePsw = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function comparePsw(arg, arg1) {
    return bcryptjs_1.default.compareSync(arg, arg1);
}
exports.comparePsw = comparePsw;
