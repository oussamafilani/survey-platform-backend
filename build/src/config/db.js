"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
const User_1 = require("../database/entities/User");
exports.connect = new typeorm_1.DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [User_1.User],
});
