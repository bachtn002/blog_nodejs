const express=require('express');
const router=express.Router();

const errorController=require('../app/controllers/ErrorController');

router.get('/:slug',errorController.show);
router.get('/',errorController.index);

module.exports=router;