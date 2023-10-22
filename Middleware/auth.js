import passport from "passport";

export let authMiddleware = (request , response , next) => {
    next()
    /*if (request.isAuthenticated()) next()
    else response.redirect('/404')*/
}