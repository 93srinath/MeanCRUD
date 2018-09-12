const express = require('express');
// require('./config/passportConfig');
require('./db.js');

var router = express.Router()
const bodyParser = require('body-parser');
const cors = require('cors');
// const passport = require('passport');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

var employeeController = require('./controller/employeeController.js');
// var userController = require('./controller/userController')

app.use(cors({
    origin: 'http://localhost:4200',
    credentials : true
    }
));

// app.use(passport.initialize());

app.listen(3000, () => console.log('Server started at port : 3000'));



app.use('/employees', employeeController);
// app.use('/user', userController);
