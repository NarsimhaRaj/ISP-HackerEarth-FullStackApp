const mongoose =require('mongoose');

const ispSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    lowest_price: {
        type:Number,
        required:true,
        default:0
    },
    rating: {
        type:Number,
        required:true,
        default:3
    },
    max_speed:{
        type:Number,
        default:1
    }, 
    description:{
        type:String,
        default:"Internet Service Provider"
    }, 
    contact_no:{
        type:Number,
        required:true,
        min:100000000,
        max:9999999999
    }, 
    email:{
        type:String,
        unique:true,
        required:true
    }, 
    image:String, 
    url:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("ISPSchema",ispSchema);