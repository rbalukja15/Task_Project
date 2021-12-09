import * as express from 'express';
import {UserController} from "./controllers/user.controller";
import {ValidateMiddleware} from "./middlewares/validate.middleware";
import {UserProjectController} from "./controllers/user.project.controller";

export class UserRouter {
    public static configRoutes = (app: express.Application): void => {
        app.get('/users', [UserController.getUsers]);

        app.post('/users', [ValidateMiddleware.validateInput, UserController.insertUser]);

        app.patch('/users/:userId', [
            ValidateMiddleware.checkForExistence,
            ValidateMiddleware.validateUsernameUpdate,
            UserController.updateUsername
        ])

        app.put('/users/:userId', [
            ValidateMiddleware.checkForExistence,
            ValidateMiddleware.validateInput,
            UserController.updateUser
        ]);

        app.delete('/users', [UserController.deleteUser])

        // User project routes
        app.get('/users/:userId/projects', [UserProjectController.getUserProjects])
        app.post('/user-project', [UserProjectController.insertUserProject])
    }
}
