import path from "path";
import {fileURLToPath} from 'url';

class Paths {

    dir = path.dirname(fileURLToPath(import.meta.url))

    general_paths = {
        env_path : path.join(this.dir , '..' ,'.env'),
    }

    static_path = {
            public_path :  path.join(this.dir , '..' , 'Public'),
            bootstrap_path : path.join(this.dir , '..' ,'node_modules' , 'bootstrap' , 'dist'),
            font_awesome_path : path.join(this.dir , '..' ,'node_modules' , 'font-awesome'),
        }

    layouts_path = {
        main :  path.join(this.dir , '..' , 'Views' , 'layouts' , 'main' , 'main.ejs'),
        dashboard :  path.join(this.dir , '..' , 'Views' , 'layouts' , 'dashboard' , 'dashboard.ejs'),
        web :  path.join(this.dir , '..' , 'Views' , 'layouts' , 'web' , 'home.ejs')
    }

}


export default new Paths();