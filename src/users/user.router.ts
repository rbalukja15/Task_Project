import * as express from 'express';
import {UserController} from "./controllers/user.controller";

export class UserRouter {
    public static configRoutes = (app: express.Application): void => {
        app.get('/users', [UserController.getUsers]);

        app.post('/users', [UserController.insertUser]);

        app.patch('/users/:userId', [UserController.updateUsername])

        app.put('/users/:userId', [UserController.updateUser])

        app.delete('/users', [UserController.deleteUser])
    }
}
