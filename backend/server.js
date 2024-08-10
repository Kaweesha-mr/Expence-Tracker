const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/userRoutes.routes');
const userRoutes = require('./routes/userRoutes.routes');
const app = express();
const loggerMiddleware = require('./middleware/loggerMiddleware');
const ConnectDb = require('./config/db');


require('dotenv').config();
app.use(bodyParser.json());

//use loggedmiddleware
app.use(loggerMiddleware);





app.use(cors({
    origin: 'http://localhost:3000',  // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    credentials: true                  // Allow cookies to be sent with requests
}));

app.use('/api/transactions', expenseRoutes);
app.use('/Auth', userRoutes);

ConnectDb()

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})





