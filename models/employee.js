const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Employee = sequelize.define('employees', {
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    gender: {
        type: Sequelize.ENUM('M', 'F'),
    },
    hire_date: {
        type: Sequelize.DATE,
    }
}, {
    underscored: true,
});

module.exports = Employee;