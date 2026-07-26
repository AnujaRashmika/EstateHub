const express = require("express");

const router = express.Router();

const {

    getProperties,

    getProperty,

    addProperty,

    updateProperty,

    deleteProperty

} = require("../controllers/propertyController");



router.get("/",getProperties);

router.post("/",addProperty);

router.get("/:id", getProperty);

router.put("/:id", updateProperty);

router.delete("/:id", deleteProperty);



module.exports = router;