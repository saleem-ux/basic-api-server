'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
    food: {
        type: DataTypes.STRING,
        allowNull: false
    },
    drink: {
        type: DataTypes.STRING,
    },

});

module.exports = Food;