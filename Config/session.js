import session from "express-session";
import flash from "connect-flash";
import MongoStore from "connect-mongo";

export let sessions = (app) => {
    app.use(
        session(
            {
                secret : process.env.SESSION_SECRET,
                cookie : {
                    maxAge : 60000
                },
                saveUninitialized : false,
                resave : false ,
                unset : "destroy" ,
                store : new MongoStore({
                    mongoUrl : process.env.DATABASE_URI
                })
            }
        )
    );
    app.use(flash())
}