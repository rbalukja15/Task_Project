import {NextFunction, Request, Response} from "express";
import * as Joi from 'joi';
import {getRepository} from "typeorm";
import {TaskEntity} from "../entity/task.entity";

export class ValidateMiddleware {
    public static validateInput = (request: Request, response: Response, next: NextFunction) => {
        const schema = Joi.object({
            title: Joi.string().min(6).max(12).required(),
            description: Joi.string().min(5).required(),
            duration: Joi.number().required(),
        });

        const result = schema.validate(request.body, { abortEarly: true });

        if (typeof result.error === 'undefined') {
            next();
        } else {
            return response.send({ status: 400, message: result.error });
        }
    }

    public static checkForExistence = async (request: Request, response: Response, next: NextFunction) => {
        const taskId = +request.params.taskId;
        try {
            const repository = getRepository(TaskEntity);
            const project = await repository.findOne({ id: taskId });

            if (!project) {
                return response.send({ status: 404, message: 'Task not found' });
            } else {
                next();
            }
        } catch (e) {
            return response.send({ status: 500, message: 'Internal Server Error' });
        }
    }

    public static validateCompletedUpdate = (request: Request, response: Response, next: NextFunction) => {
        const schema = Joi.object({
            is_complete: Joi.boolean().required(),
        });

        const result = schema.validate(request.body, { abortEarly: true });

        if (typeof result.error === 'undefined') {
            next();
        } else {
            return response.send({ status: 400, message: result.error });
        }
    }
}
