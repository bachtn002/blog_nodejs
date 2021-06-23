class ErrorController{

    index(request, response){
        response.render('error');
    }
    // [GET] /error/:slug
    show(request, response){
        response.send('Hello, World!');
    }
}
module.exports = new ErrorController; //tạo một instance của ErrorController và export ra ngoài
