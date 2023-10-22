import * as express from "express";
import Paths from "./paths.js";

export let statics = (app) => {

    app.use(express.static(Paths.static_path.bootstrap_path));
    app.use(express.static(Paths.static_path.font_awesome_path));
    app.use(express.static(Paths.static_path.public_path))

}