import {UserModel} from "../Models/UserModel.js";
import passport from "passport";

class AuthController {
    login(request , response){
        response.render('pages/auth/login' , {
            pageTitle : "ورود کاربر",
            message : request.flash("success_msg"),
            error : request.flash("error")
        })
    }

    sign_in(request , response , next) {
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true,
        })(request, response, next);
    }

    remember(request , response){
        if (request.body.rememberMe == "on")
            request.session.cookie.originalMaxAge = 15*27*60*60*1000 ;
        else request.session.cookie.expire = null;
        response.redirect("/admin")
    }

    sign_out(request , response , next) {
        request.session = null;
        request.logout(()=>{});
        request.flash("success_msg" , "با موققیت خارج شدید .")
        response.redirect("/login")
    }

    register(request , response) {
        (new AuthController()).register_view(response , undefined)
    }

    register_view(response , errors) {
        response.render('pages/auth/register' , {
            pageTitle : "ثبت نام کاربر",
            path : "/register",
            errors,
            error : ""
        })
    }

    async create(request , response){
        try {
            await UserModel.storeValidation(request.body)
            await UserModel.create(request.body)
            request.flash("success_msg" , "ثبت نام با موفقیت انجام شد . خوش آمدید")
            response.redirect("/login")
        }catch (errors){
            (new AuthController()).register_view(response , errors.inner)
        }
    }

}

export default new AuthController();