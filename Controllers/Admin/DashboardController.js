class DashboardController{

    index(request , response){
        response.render('pages/web/index' ,
            {
                pageTitle : "Dashboard",
                path : '/admin/',
                message : request.flash("success_msg"),
                error : request.flash("error"),
                username : ""
            }
        )
        //request.user.username
    }
}

export default new DashboardController()