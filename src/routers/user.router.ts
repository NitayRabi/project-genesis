import { Router } from 'express';
import { CONSTANTS } from '../models';
import { userController } from '../controllers';

class UserRouter {

    public router = Router();
    public prefix = CONSTANTS.ROUTES_PREFIXES.USERS;

    constructor() {
        this.initMiddlewares();
        this.initRoutes();
    }

    initMiddlewares() {
        /**
         * Router level middleware
          */
    };

    initRoutes() {
        this.router.route('/')
            .get(userController.getAll)
            .post(userController.create)
            .put(userController.update);
        this.router.route('/:id')
            .get(userController.getById)
            .delete(userController.deleteById);
        this.router.route('/query')
            .get(userController.query)
            .post(userController.query);
    };
}

export const userRouter = new UserRouter();