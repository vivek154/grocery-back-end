import db from '../models';
import { queryMostSearchedCategories } from './query';

const Categories = db.categories;

export const createCategory = async (name: string) =>
    await Categories.create({
        name,
    });

export const getAllCategories = async () => await Categories.findAll();

export const getCategoryByName = async (categoryName: string) =>
    await Categories.findOne({
        where: {
            name: categoryName.trim().toLowerCase(),
        },
    });

export const getMostSearchedCategories = async () => {
    const response = await db.sequelize.query(queryMostSearchedCategories(), {
        type: db.Sequelize.QueryTypes.SELECT,
    });

    return response;
};
