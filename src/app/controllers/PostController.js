
const { singleMongooseToObject } = require('../../config/mongoose/mongoose');
const postsBlog = require('../model/posts');
class PostController {
    // GET /post/slug
    async show(req, res) {
        let result = await postsBlog.findOne({ slug: req.params.slug }).exec();
        //return res.render('posts/show',{postsblog:singleMongooseToObject(result)});
        return res.json(result);
    }
}

module.exports = new PostController(); 