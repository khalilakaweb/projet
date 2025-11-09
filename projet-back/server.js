//require the express module
const express = require('express');

//create an express application
const app = express();

//body parser middleware to parse JSON requests
app.use(express.json());

//dotenv configuration
require('dotenv').config();

//get the port number from environment variables or use default
const PORT = process.env.PORT || 5002;

//define a route for the root URL
app.listen(PORT, (error) => {
    error
      ? console.log("Error occurred: ", error)
      : console.log(`Server is running on https://127.0.0.1:${PORT} ✅✅✅`);
})

//connect to the database
const connectDB = require('./config/connectDB');
connectDB();

//import projet routes
app.use("/api/projet", require("./routes/projet"));

const cors = require('cors');

app.use(cors(
  {origin: `http://localhost:${process.env.PORT_FRONT}`,
  Credentials: true,}
));


