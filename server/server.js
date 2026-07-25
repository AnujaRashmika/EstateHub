const express = require("express");
const cors = require("cors");
const propertyRoutes = require("./routes/propertyRoutes");
require("dotenv").config();


const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/properties",propertyRoutes);


app.get("/", (req,res)=>{

    res.send("EstateHub Backend Running");

});



const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`);

});