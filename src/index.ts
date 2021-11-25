import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
const express = require("express");
import * as bodyParser from "body-parser";
import { User } from "./entity/User";

const app = express();

app.use(bodyParser.json({limit: "200mb"}));
app.use(bodyParser.urlencoded({limit: "200mb", extended: true}));

createConnection().then(async connection => {

    app.get('/', async (req, res) => {
        const repository = getRepository(User);
        const users = await repository.find();
        res.send({ users })
        console.log(users)
    });

    app.post('/', async (req, res) => {
        console.log(req.body)
        const repository = getRepository(User);
        await repository.insert({
            ...req.body
        })

        res.status(200).send({ message: 'Success'});
    });

    app.patch('/', (req,res) => {
        res.send({ route: 'home', data: 'This is patch req' })
    })

    app.put('/', (req, res) => {
        console.log(req.body)
        // res.send({ route: 'home', data: 'this is put req' })
    })

    app.delete('/', (req, res) => {
        res.send({ route: 'home', data: 'This is delete req' })
    })

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log('App listening on port ' + port);
    });
}).catch(error => console.log(error));
