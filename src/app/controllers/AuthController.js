
const users=require('../model/user');


class AuthController{
    async register(req, res){
        const user= new users({
            name: req.body.name,
            mobile: req.body.mobile,
            email:req.body.email,
            password: req.body.password
        });
        try {
            const savedUser=await user.save();
            res.send(savedUser);
        } catch (error) {
            res.status(400).send(error);            
        }
    }
}

module.exports = new AuthController;