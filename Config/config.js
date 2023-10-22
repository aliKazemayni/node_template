import {configDotenv} from "dotenv";

import {development} from "./development.js";
import {connection} from "./database.js";
import {statics} from "./statics.js";
import {view} from "./view.js";
import Paths from "./paths.js";

import {adminRoute} from "../Routes/admin.js";
import {urlencoded} from "express";
import {webRoute} from "../Routes/web.js";
import {sessions} from "./session.js";
import {authMiddleware} from "../Middleware/auth.js";

export let config = (app) => {

    configDotenv({path : Paths.general_paths.env_path})

    view(app);
    statics(app);
    development(app)
    sessions(app)
    connection()
    // middlewares()

    app.use(urlencoded({extended:false}));
    /* -------- | Routes | -------- */
    app.use('/admin' , authMiddleware , adminRoute);
    app.use('/' , webRoute);
    app.use((request , response) => response.render(
        "pages/error/404" , { pageTitle : "پیدا نشد" , path : "/404"}
    ))

}