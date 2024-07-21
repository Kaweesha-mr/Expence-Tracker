const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/transactionRoute.routes');
const app = express();
require('dotenv').config();
app.use(bodyParser.json());

//default route to check if the server is running
app.get('/',(req,res)=>{
    res.send('Server is running');
})

app.use('/api/transactions', expenseRoutes);

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})





