const Property = require("../models/Property");


// GET ALL PROPERTIES

const getProperties = async(req,res)=>{

    try{

        const properties = await Property.find();

        res.json(properties);

    }catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};



// ADD PROPERTY

const addProperty = async(req,res)=>{

    try{

        const property = await Property.create(req.body);

        res.status(201).json(property);

    }catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};


module.exports = {

    getProperties,

    addProperty

};