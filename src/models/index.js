'use strict';

require('dotenv').config('./src/server');
const POSGRES_URI = process.env.POSTGRES_URI || 'postgres://localhost/saleem-ux';

const { Sequelize, DataTypes } = require('sequelize');

const clothes = require('./clothes');
const food = require('./food');

let sequelize = new Sequelize(POSGRES_URI, {});

module.exports = {
    db: sequelize,
    Clothes: clothes(sequelize, DataTypes),
    Food: food(sequelize, DataTypes)
}