import expressLayout from 'express-ejs-layouts';
import Paths from "./paths.js";
export let view = (app) => {
    app.use(expressLayout);
    app.set('layout' , Paths.layouts_path.main)
    app.set('view engine' , 'ejs');
    app.set('views' , 'Views');
}