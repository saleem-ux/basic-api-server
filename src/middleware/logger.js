'use strict';

module.exports = (req, res, next) => {
    console.log('REQUEST LOGGER:', req.method, req.path);
    next();
};