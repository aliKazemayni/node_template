import morgan from "morgan";

export let development = (app) => {
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan("dev"));
    }
}