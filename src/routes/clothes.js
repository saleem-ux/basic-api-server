'use strict'; 

const express = require('express');
const router = express.Router();

const {
    getClothes,
    createClothes,
    getAllClothes,
    updateClothes,
    deleteClothes,
} = require('../modules/clothes-routes-implementations');

router.post('/clothes', createClothes);
router.get('/clothes/:id', getClothes);
router.get('/clothes', getAllClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

module.exports = router;