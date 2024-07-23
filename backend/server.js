const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/transactionRoute.routes');
const app = express();
const loggerMiddleware = require('./middleware/loggerMiddleware');
const ConnectDb = require('./config/db');
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');

require('dotenv').config();
app.use(bodyParser.json());
app.use(loggerMiddleware);

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3002',
  clientID: 'oglfokRvKhAfFYWw4o3fNGwZE9VoKN5h',
  issuerBaseURL: 'https://dev-z20h2zat20mqcozf.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});



app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});




app.use('/api/transactions', expenseRoutes);

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





