import * as express from 'express';
import {UserController} from "./controllers/user.controller";
import {ValidateMiddleware} from "./middlewares/validate.middleware";

export class UserRouter {
    public static configRoutes = (app: express.Application): void => {
        app.get('/users', [UserController.getUsers]);

        app.post('/users', [ValidateMiddleware.validateInput, UserController.insertUser]);

        app.patch('/users/:userId', [UserController.updateUsername])

        app.put('/users/:userId', [UserController.updateUser])

        app.delete('/users', [UserController.deleteUser])
    }
}
