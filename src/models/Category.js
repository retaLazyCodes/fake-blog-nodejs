import Sequelize from 'sequelize';
import { sequelize } from '../database/database'


export const Category = sequelize.define('categories', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});



