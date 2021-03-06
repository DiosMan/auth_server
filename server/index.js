//main starting point of the application
const express = require('express');
const http = require ('http');
const bodyParaser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');


//DB setup
mongoose.connect('mongodb://localhost/auth2222');

//App setup
app.use(morgan('combined'));
app.use(bodyParaser.json({ type:'*/*' }));
app.use(cors());
router(app);

//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on port : ', port);