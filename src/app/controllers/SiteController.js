
const posts = require('../model/posts');
const {multipleMongooseToObject} =require('../../config/mongoose/mongoose');
class SiteController {
    // GET / 
    index(req, res, next) {
        posts.find({})
            .then(postsblog =>{
                res.render('home',{
                    postsblog:multipleMongooseToObject(postsblog)
                });
            })
            .catch(next);
    }

    //GET /search/
    search(request, response) {
        response.render('search');
    }
}
module.exports = new SiteController();