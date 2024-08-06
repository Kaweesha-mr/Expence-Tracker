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




app.use('/api/transactions', expenseRoutes);
app.use('/Auth', userRoutes);

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

ConnectDb()

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})





