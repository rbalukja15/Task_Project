import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
const express = require("express");
import * as bodyParser from "body-parser";
import {UserRouter} from "./users/user.router";

const app = express();

app.use(bodyParser.json({limit: "200mb"}));
app.use(bodyParser.urlencoded({limit: "200mb", extended: true}));

createConnection().then(async () => {
    UserRouter.configRoutes(app);

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log('App listening on port ' + port);
    });
}).catch(error => console.log(error));
