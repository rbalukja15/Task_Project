import "reflect-metadata";
import {createConnection} from "typeorm";
const express = require("express");

const app = express();

createConnection().then(async connection => {
    app.get('/', (req, res) => {
        res.send({ route: 'home' })
        console.log('home route')
    });

    app.post('/', (req, res) => {
        res.send({ route: 'home', data: 'our data' });
    });

    app.patch('/', (req,res) => {
        res.send({ route: 'home', data: 'This is patch req' })
    })

    app.put('/', (req, res) => {
        res.send({ route: 'home', data: 'this is put req' })
    })

    app.delete('/', (req, res) => {
        res.send({ route: 'home', data: 'This is delete req' })
    })

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log('App listening on port ' + port);
    });
}).catch(error => console.log(error));
