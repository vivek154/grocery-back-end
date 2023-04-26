import db from '../models';
import { WhereOptions } from 'sequelize/types';
import { queryMostSearchedCategories } from './query';

let Categories = db.categories;

export const createCategory = async (name: string) => {
    return await Categories.create({
        name,
    });
};

export const getAllCategories = async () => await Categories.findAll();

export const getCategoryByName = async (categoryName: string) => {
    return await Categories.findOne({
        where: {
            name: categoryName.trim().toLowerCase(),
        },
    });
};

export const getMostSearchedCategories = async() => {
    console.log("before query service")
    let response= await db.sequelize.query(queryMostSearchedCategories(),{type:db.Sequelize.QueryTypes.SELECT})
    //let response= await db.sequelize.query(`SELECT * FROM categories ORDER BY searched DESC`)
    /*let response=Categories.findAll({
        order:[
            ['searched','DESC']
        ]
    })*/
    console.log("desc search",response)
    return response;
}
