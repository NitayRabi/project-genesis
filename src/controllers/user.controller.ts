import { CrudController } from '../models/class';
import { User } from '../entity';

class UserController extends CrudController {
    constructor() {
        super(User);
    }
}

export const userController = new UserController();