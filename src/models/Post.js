import Sequelize from "sequelize";
import { sequelize } from '../database/database'
import { Category } from './Category'

export const Post = sequelize.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

Post.belongsTo(Category, { foreignKey: 'categoryId' })