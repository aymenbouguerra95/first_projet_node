const mongoose=require('mongoose');

const user=mongoose.model('user', {

    name: {
        type:String
    },
    lastename: {
        type:String
    },
    age :{
        type:Number
    }

})


module.exports= user;