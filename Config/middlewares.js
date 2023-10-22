import {authMiddleware} from "../Middleware/auth.js";

export let middlewares = () => {
    authMiddleware()
}