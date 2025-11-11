//require the express module
const express = require('express');

//dotenv configuration
require('dotenv').config();

//create an express application
const app = express();

//body parser middleware to parse JSON requests
app.use(express.json());

//get the port number from environment variables or use default
const PORT = process.env.PORT || 5002;

//connect to the database
const connectDB = require('./config/connectDB');
connectDB();

const cors = require('cors');

const FRONT_PORT = process.env.PORT_FRONT || 5173;
const FRONT_ORIGIN = process.env.FRONT_ORIGIN || `http://localhost:${FRONT_PORT}`;

app.use(cors({
  origin: FRONT_ORIGIN,
  credentials: true,
}));

  
//health route
app.get("/", (req, res) => res.send({ status: "ok" }));

//import projet routes
app.use("/api/projet", require("./routes/projet"));
// auth routes
app.use("/api/auth", require("./routes/auth"));
// contact routes
app.use("/api/contact", require("./routes/contact"));
// cart routes
app.use("/api/cart", require("./routes/cart"));

//start server after middleware and routes are set
app.listen(PORT, (error) => {
    error
      ? console.log("Error occurred: ", error)
      : console.log(`Server is running on http://127.0.0.1:${PORT} ✅✅✅`);
})

