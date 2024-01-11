const express = require("express");
const connectDB = require("./data/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
dotenv.config();

const app = express();

app.use(express.json()); 
app.use("/api/user", userRoutes);

// Endpoints
app.get('/', (req, res)=>{
    return res.send("This is home")
})

// Database
connectDB();

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`)
});