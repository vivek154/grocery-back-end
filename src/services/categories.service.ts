
import db from '../models';
import { queryMostSearchedCategories } from './query';

const Categories = db.categories;

export const createCategory = async (name: string) => await Categories.create({
    name,
});

export const getAllCategories = async () => await Categories.findAll();

export const getCategoryByName = async (categoryName: string) => await Categories.findOne({
    where: {
        name: categoryName.trim().toLowerCase(),
    },
});

export const getMostSearchedCategories = async() => {
    console.log("before query service")
    const response= await db.sequelize.query(queryMostSearchedCategories(),{type:db.Sequelize.QueryTypes.SELECT})
    // let response= await db.sequelize.query(`SELECT * FROM categories ORDER BY searched DESC`)
    /* let response=Categories.findAll({
        order:[
            ['searched','DESC']
        ]
    }) */
    console.log("desc search",response)
    return response;
}
