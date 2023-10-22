import express from "express";
import HomeController from "../Controllers/Web/HomeController.js";
import AuthController from "../Controllers/AuthController.js";
import passport from "passport";
import DashboardController from "../Controllers/Admin/DashboardController.js";

let router = express.Router();

    router.get('/login' , AuthController.login)
    router.get('/register' , AuthController.register)
    router.get('/logout',  AuthController.sign_out);

    router.post('/login', AuthController.sign_in, AuthController.remember);
    router.post('/register' , AuthController.create)

    router.get('/' , HomeController.index)

export let webRoute =  router;