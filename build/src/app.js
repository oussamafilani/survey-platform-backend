"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
require("dotenv/config");
const index_1 = __importDefault(require("@/routes/index"));
const db_1 = require("@/config/db");
class App {
    constructor(port) {
        this.express = (0, express_1.default)();
        this.port = port;
        this.initialiseMiddleware();
        this.initialiseDatabaseConnection();
        this.initialApiRouteVersioning();
    }
    initialiseMiddleware() {
        this.express.use((0, cors_1.default)());
        this.express.use((0, helmet_1.default)());
        this.express.use((0, morgan_1.default)('dev'));
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: false }));
    }
    listen() {
        this.express.listen(this.port, () => {
            // logger.log(
            //     'info',
            //     `App listening on  http://localhost:${this.port}`
            // );
            console.log(`App listening on  http://localhost:${this.port}`);
        });
    }
    initialiseDatabaseConnection() {
        db_1.connect
            .initialize()
            .then(() => {
            console.log('Data Source has been initialized!');
        })
            .catch((err) => {
            console.error('Error during Data Source initialization', err);
        });
    }
    initialApiRouteVersioning() {
        this.express.use('/', index_1.default);
        // handle undefined Routes
        this.express.use('*', (req, res, next) => {
            // const err: any = new AppError(404, 'fail', 'undefined route');
            // next(err, req, res, next);
            res.status(401).send('undefined route');
        });
    }
}
exports.default = App;
