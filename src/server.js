'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const clothesRoutes = require('./routes/clothes');
const foodRoutes = require('./routes/food');

const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);

app.use(clothesRoutes);
app.use(foodRoutes);

app.get('/', (req,res)=>{
    res.status(200).send('lets start');
});

app.get('/bad', (req, res, next)=>{
    next('error bad end point');
});

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports={
    server: app,
    start: port =>{
        app.listen(port, ()=> console.log(`listen on port ${port}`));
    },
};