const express = require('express')
const dotenv = require('dotenv');
const colors = require('colors');

//Bring in the route files
const scales = require('./routes/scales')

//Load env vars
dotenv.config({path: './config/config.env'});

const app = express();

//Mount routers
app.use('/api/v1/scales', scales)

const PORT = process.env.PORT || 4000;






app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.underline.bold));