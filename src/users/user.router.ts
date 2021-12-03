import * as express from 'express';
import {getRepository} from "typeorm";
import {UserEntity} from "./entity/user.entity";

export class UserRouter {
    public static configRoutes = (app: express.Application): void => {
        app.get('/users', async (req, res) => {
            const repository = getRepository(UserEntity);
            const users = await repository.find();
            res.send({ users })
        });

        app.post('/users', async (req, res) => {
            const repository = getRepository(UserEntity);
            await repository.insert({
                ...req.body
            })

            res.status(200).send({ message: 'Success'});
        });

        app.patch('/users/:userId', (req,res) => {
            res.send({ route: 'home', data: 'This is patch req' })
        })

        app.put('/users/:userId', async (req, res) => {
            const userId = +req.params.userId;

            try {
                if (!userId) {
                    return res.send({ status: 400, message: 'userId is not provided'});
                } else {
                    const repository = getRepository(UserEntity);
                    const user = await repository.findOne({ id: userId });
                    if (!user) {
                        return res.send({ status: 404, message: `User with id ${userId} not found`});
                    } else {
                        const savedRes = await repository.merge(user, req.body);
                        await repository.save(savedRes);
                        return res.send({ status: 200, message: `User with id ${userId} saved successfully`});
                    }
                }
            } catch (error) {
                console.log(error)
                return res.send({ status: 500, message: `Server error`});
            }
        })

        app.delete('/users', (req, res) => {
            res.send({ route: 'home', data: 'This is delete req' })
        })
    }
}
