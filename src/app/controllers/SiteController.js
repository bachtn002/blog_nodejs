class SiteController{
    // GET /
    index(request,response){
        response.render('home');
    }

    //GET /search/
    search(request,response){
        response.render('search');
    }
}
module.exports = new SiteController;