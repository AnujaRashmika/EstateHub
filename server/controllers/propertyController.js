const Property = require("../models/Property");

// GET ALL PROPERTIES
const getProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// GET SINGLE PROPERTY
const getProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({
                message: "Property not found",
            });
        }

        res.json(property);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// ADD PROPERTY
const addProperty = async (req, res) => {
    try {
        const property = await Property.create(req.body);

        res.status(201).json(property);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// UPDATE PROPERTY
const updateProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!property) {
            return res.status(404).json({
                message: "Property not found",
            });
        }

        res.json(property);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// DELETE PROPERTY
const deleteProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);

        if (!property) {
            return res.status(404).json({
                message: "Property not found",
            });
        }

        res.json({
            message: "Property deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getProperties,
    getProperty,
    addProperty,
    updateProperty,
    deleteProperty,
};