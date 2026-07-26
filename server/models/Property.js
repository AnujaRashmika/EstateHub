const mongoose = require("mongoose");


const propertySchema = new mongoose.Schema({

    title: String,
    location: String,
    type: String,
    price: Number,
    image: String

}, {
    collection: "properties"
});


module.exports = mongoose.model(
    "Property",
    propertySchema
);