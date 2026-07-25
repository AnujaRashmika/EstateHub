const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(

    {

        title:{
            type:String,
            required:true
        },

        location:{
            type:String,
            required:true
        },

        type:{
            type:String,
            required:true
        },

        price:{
            type:Number,
            required:true
        },

        bedrooms:{
            type:Number,
            default:0
        },

        bathrooms:{
            type:Number,
            default:0
        },

        area:{
            type:Number,
            default:0
        },

        description:{
            type:String,
            default:""
        },

        image:{
            type:String,
            default:""
        }

    },

    {
        timestamps:true
    }

);

module.exports = mongoose.model("Property",propertySchema);