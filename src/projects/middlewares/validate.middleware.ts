import {NextFunction, Request, Response} from "express";
import * as Joi from 'joi';
import {getRepository} from "typeorm";
import {ProjectEntity} from "../entity/project.entity";

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
        const userId = +request.params.id;
        try {
            const repository = getRepository(ProjectEntity);
            const project = await repository.findOne({ id: userId });

            if (!project) {
                return response.send({ status: 404, message: 'Project not found' });
            } else {
                next();
            }
        } catch (e) {
            return response.send({ status: 500, message: 'Internal Server Error' });
        }
    }

    public static validateDescriptionUpdate = (request: Request, response: Response, next: NextFunction) => {
        const schema = Joi.object({
            description: Joi.string().min(5).required(),
        });

        const result = schema.validate(request.body, { abortEarly: true });

        if (typeof result.error === 'undefined') {
            next();
        } else {
            return response.send({ status: 400, message: result.error });
        }
    }
}
