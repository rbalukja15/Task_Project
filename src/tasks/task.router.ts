import * as express from 'express';
import {ValidateMiddleware} from "./middlewares/validate.middleware";
import {TaskController} from "./controllers/task.controller";

export class TaskRouter {
    public static configRoutes = (app: express.Application): void => {
        app.get('/tasks', [TaskController.getTasks]);

        app.post('/task', [ValidateMiddleware.validateInput, TaskController.insertTask]);

        app.patch('/tasks/:taskId', [
            ValidateMiddleware.checkForExistence,
            ValidateMiddleware.validateCompletedUpdate,
            TaskController.completeTask
        ])
        //
        // app.put('/projects/:projectId', [
        //     ValidateMiddleware.checkForExistence,
        //     ValidateMiddleware.validateInput,
        //     UserController.updateUser
        // ]);
        //
        // app.delete('/projects', [UserController.deleteUser])
    }
}
