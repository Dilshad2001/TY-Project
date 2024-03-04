const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        if (err.name === 'MongoNetworkError') {
            console.error('MongoDB connection error: Check your network connection or MongoDB Atlas cluster availability.');
        } else {
            console.error(`Error: ${err.message}`);
        }
        process.exit(1); // Exit the process with a non-zero status code to indicate failure
    }
}

module.exports = connectDB;
