import express, { Application } from 'express';
import { Router, Request, Response, NextFunction } from 'express';

import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'dotenv/config';
import route from '@/routes/index';
import { connect } from '@/config/db';

import logger from '@/logger/index';
class App {
    get(arg0: string, arg1: (req: Request, res: Response) => Promise<void>) {
        throw new Error('Method not implemented.');
    }
    public express: Application;
    public port: number;

    constructor(port: number) {
        this.express = express();
        this.port = port;

        this.initialiseMiddleware();
        this.initialiseDatabaseConnection();
        this.initialApiRouteVersioning();
    }

    private initialiseMiddleware(): void {
        this.express.use(cors());
        this.express.use(helmet());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            // logger.log(
            //     'info',
            //     `App listening on  http://localhost:${this.port}`
            // );
            console.log(`App listening on  http://localhost:${this.port}`);
        });
    }

    private initialiseDatabaseConnection(): void {
        connect
            .initialize()
            .then(() => {
                console.log('Data Source has been initialized!');
            })
            .catch((err) => {
                console.error('Error during Data Source initialization', err);
            });
    }

    private initialApiRouteVersioning(): void {
        this.express.use('/', route);

        // handle undefined Routes
        this.express.use(
            '*',
            (req: Request, res: Response, next: NextFunction) => {
                // const err: any = new AppError(404, 'fail', 'undefined route');
                // next(err, req, res, next);
                res.status(401).send('undefined route');
            }
        );
    }
}

export default App;
