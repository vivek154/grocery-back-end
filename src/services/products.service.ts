import db from '../models';
import { queryGetSearchedProducts } from './query';
import { WhereOptions,Op } from 'sequelize';


let Products = db.products;

export const createProduct = async (
    categoryId: number,
    name: string,
    description: string,
    price: number,
    discount: number,
    imageUrl: string
) => {
    return await Products.create({
        categoryId,
        name,
        description,
        price,
        discount,
        imageUrl,
    });
};

export const getAllCategoryProducts = async (categoryId: number) => {
    return await Products.findAll({
        where: {
            categoryId: categoryId,
        },
    });
};

export const getAllProducts = async () => await Products.findAll();

export const getAllMatchingProducts = async (keyWord: string) => {
    console.log('Entered in service file keyword2', keyWord);
   
    const response = await db.sequelize.query(queryGetSearchedProducts(keyWord), {
        type: db.Sequelize.QueryTypes.SELECT,
    });
    console.log('After query execution', response);
    return response;
};

export const getFilteredProducts = async(categories:any) =>{
    const response = await Products.findAll({
        where:{
            categoryId:{
                [Op.or]:categories
            }
        }
    })
    
    return response
}
 