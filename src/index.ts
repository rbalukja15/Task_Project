import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
const express = require("express");
import * as bodyParser from "body-parser";
import { User } from "./entity/User";

const app = express();

app.use(bodyParser.json({limit: "200mb"}));
app.use(bodyParser.urlencoded({limit: "200mb", extended: true}));

createConnection().then(async connection => {

    app.get('/users', async (req, res) => {
        const repository = getRepository(User);
        const users = await repository.find();
        res.send({ users })
        console.log(users)
    });

    app.post('/users', async (req, res) => {
        console.log(req.body)
        const repository = getRepository(User);
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
                const repository = getRepository(User);
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

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log('App listening on port ' + port);
    });
}).catch(error => console.log(error));
