const dns = require("dns");


// Fix MongoDB SRV DNS issue
dns.setServers([
    "8.8.8.8",
    "8.8.4.4"
]);

dns.setDefaultResultOrder("ipv4first");


require("dotenv").config();


const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const propertyRoutes = require("./routes/propertyRoutes");


const app = express();


// MongoDB Connection
connectDB();


// Middleware
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://estate-hub-gilt.vercel.app/"
    ]
}));
app.use(express.json());


// Routes
app.use("/api/properties", propertyRoutes);


// Test Route
app.get("/", (req, res) => {

    res.send("EstateHub Backend Running");

});


// Server
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});