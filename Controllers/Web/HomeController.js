import Paths from "../../Config/paths.js";

class HomeController{

    index(request , response){
        response.render('pages/web/index' ,
            {
                pageTitle : "Home",
                message : request.flash("success_msg"),
                error : request.flash("error"),
            }
        )
    }

}

export default new HomeController()