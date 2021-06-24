module.exports={
    multipleMongooseToObject: function(mongoose){
        return mongoose.map(mongoose=>mongoose.toObject());
    },
    singleMongooseToObject: function(mongoose){
        if(mongoose){return mongoose.toObject()}
        else return mongoose;
    }
}