import {NextFunction, Request, Response} from "express";
import * as Joi from 'joi';

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
}
