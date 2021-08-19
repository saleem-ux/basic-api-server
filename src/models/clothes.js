'use strict';

const Clothes = (sequelize, DataTypes) => sequelize.define('Clothes', {
    clothes: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    jacket: {
        type: DataTypes.STRING,
    }
});

module.exports = Clothes;
