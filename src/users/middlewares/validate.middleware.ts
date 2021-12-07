import {NextFunction, Request, Response} from "express";
import * as Joi from 'joi';
import {UserEntity} from "../entity/user.entity";
import {getRepository} from "typeorm";

export class ValidateMiddleware {
    public static validateInput = (request: Request, response: Response, next: NextFunction) => {
        const schema = Joi.object({
            username: Joi.string().min(6).max(12).required(),
            name: Joi.string().required(),
            surname: Joi.string().required(),
            email: Joi.string().email().required(),
            profile_picture: [Joi.string().optional(), Joi.allow(null)],
            role: Joi.string().required()
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
            const repository = getRepository(UserEntity);
            const user = await repository.findOne({ id: userId });

            if (!user) {
                return response.send({ status: 404, message: 'User not found' });
            } else {
                next();
            }
        } catch (e) {
            return response.send({ status: 500, message: 'Internal Server Error' });
        }
    }

    public static validateUsernameUpdate = (request: Request, response: Response, next: NextFunction) => {
        const schema = Joi.object({
            username: Joi.string().min(6).max(12).required(),
        });

        const result = schema.validate(request.body, { abortEarly: true });

        if (typeof result.error === 'undefined') {
            next();
        } else {
            return response.send({ status: 400, message: result.error });
        }
    }
}
