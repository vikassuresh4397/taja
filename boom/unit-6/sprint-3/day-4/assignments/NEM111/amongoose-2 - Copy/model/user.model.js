const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    adult:Boolean,
    followers:Number
},{
    versionKey:false,
})

const UserModel=mongoose.model('user',userSchema)

module.exports={UserModel}