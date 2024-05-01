const express = require ("express");
const mongoose = require ("mongoose");
require("dotenv").config();
const userroutes = require("./routes/user");

const app = express();
const port = process.env.port || 8080;

//midleware
app.use(express.json());
app.use('/api', userroutes);


//routes
app.get("/", (req, res) => {
    res.send("Bienvenido a mi api");
});

//mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("connected to MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));