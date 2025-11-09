//require mongoose module
const mongoose = require('mongoose');

//connect to MongoDB using the connection string from environment variables
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully ⚡⚡⚡");
    } catch (error) {
        console.error('MongoDB connection error: ', error);
        process.exit(1); // Exit process with failure
    }
}

//export the connectDB function
module.exports = connectDB;