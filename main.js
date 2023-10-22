import express from 'express';
import {config} from "./Config/config.js";

let app = express();

config(app)

app.listen( process.env.PORT || 3000, () => console.log("server in running !!"));