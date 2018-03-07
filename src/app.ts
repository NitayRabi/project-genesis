import { Application } from 'express';
import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
//
import { dbService, handlerService } from './services';
import { userRouter } from './routers';

class App {

    express: Application;

    constructor() {
        this.express = express();
        this.initDbConnection();
        this.initMiddlewares();
        this.initRoutes();
        this.initHandlers();
    }

    async initDbConnection() {
        try {
            await dbService.connect();
        } catch(err) {
            console.error('DB Connection Error');
            console.error(err);
            process.exit(1);
        }
    }

    initMiddlewares(){
        /**
         * App Level middlewares
         */
        this.express.use(compression());
        this.express.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
            next();
        });
        this.express.use(bodyParser.json({ limit: '50mb' }));
        this.express.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    }

    initRoutes(){
        this.express.use(userRouter.prefix, userRouter.router);
    }

    initHandlers(){
        this.express.use(handlerService.genericResponseHandler);
    }
}

/**
 * Export the express application to be used in index.
 * @type {e.Application}
 */
export const app = new App().express;