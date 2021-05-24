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

Category.findAll({
    where: {
        id: 1
    }
});

const categories = ['programming', 'videogames', 'social networks', 'series', 'random', 'other']

const existsCategories = async () => {

    const categoryExist = await Category.findAll({
        where: {
            id: 1
        }
    })
    if (categoryExist.length === 0) {
        categories.forEach(category => {
            Category.create({ description: `${category}` });
        })
    }
}

existsCategories()



