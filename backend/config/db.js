const mongoose = require('mongoose');
require('dotenv').config();

const ConnectDb = async () => {
    try {
        const connectionString = process.env.MONGODB_URI;

        // Check if the connection string is present
        if (!connectionString) {
            throw new Error('MONGODB_URI environment variable is not set');
        }

        // Validate the connection string format
        if (!connectionString.startsWith('mongodb://') && !connectionString.startsWith('mongodb+srv://')) {
            throw new Error('Invalid MongoDB connection string format. It must start with "mongodb://" or "mongodb+srv://"');
        }

        // Attempt to connect to MongoDB
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true // Recommended for newer MongoDB drivers
        });

        console.log('MongoDB Connection Successful');

    } catch (err) {
        // Log the error details
        console.error('MongoDB Connection Error:', err.message);
        console.error('Stack Trace:', err.stack);

        // Optionally, add more details based on error types if needed
        if (err.name === 'MongoParseError') {
            console.error('There is a problem with the connection string format.');
        } else if (err.name === 'MongoNetworkError') {
            console.error('Network error while connecting to MongoDB.');
        }

        process.exit(1); // Exit the process with failure code
    }
};

module.exports = ConnectDb;
