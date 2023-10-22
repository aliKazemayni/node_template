import express from "express";
import DashboardController from "../Controllers/Admin/DashboardController.js";

let router = express.Router();
    router.get('/' , DashboardController.index)
export let adminRoute =  router;