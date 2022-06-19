"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    transports: [
        new winston_1.transports.File({
            filename: 'info.log',
            level: 'info',
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
        }),
    ],
});
exports.default = logger;
