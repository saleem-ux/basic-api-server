'use strict';

const express = require('express');
const router = express.Router();

const {
    getFood,
    createFood,
    getAllFood,
    updateFood,
    deleteFood,
} = require('../modules/food-routes-implementations');

router.post('/food', createFood);
router.get('/food/:id', getFood);
router.get('/food', getAllFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

module.exports = router;