
const posts = require('../model/posts');

class SiteController {
    // GET / 
    index(req, res) {
        posts.find({}, (err, po) => {
            if (!err) { res.json(po); }
            else { res.status(400).json({ error: 'Error!!!' }); }
        });
    }

    //GET /search/
    search(request, response) {
        response.render('search');
    }
}
module.exports = new SiteController;