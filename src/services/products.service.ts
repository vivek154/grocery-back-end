import { Op } from 'sequelize';
import db from '../models';
import { queryGetSearchedProducts } from './query';

const Products = db.products;

export const createProduct = async (
    categoryId: number,
    name: string,
    description: string,
    price: number,
    discount: number,
    imageUrl: string
) =>
    await Products.create({
        categoryId,
        name,
        description,
        price,
        discount,
        imageUrl,
    });

export const getAllCategoryProducts = async (categoryId: number) =>
    await Products.findAll({
        where: {
            categoryId,
        },
    });

export const getAllProducts = async () => await Products.findAll();

export const getAllMatchingProducts = async (keyWord: string) => {
    const response = await db.sequelize.query(
        queryGetSearchedProducts(keyWord),
        {
            type: db.Sequelize.QueryTypes.SELECT,
        }
    );

    return response;
};

export const getFilteredProducts = async (categories: any) => {
    const response = await Products.findAll({
        where: {
            categoryId: {
                [Op.or]: categories,
            },
        },
    });

    return response;
};
