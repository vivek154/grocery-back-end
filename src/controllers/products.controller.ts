import { NextFunction, Request, Response } from 'express';
import {
    createProduct,
    getAllProducts,
    getAllCategoryProducts,
    getAllMatchingProducts,
    getFilteredProducts
} from '../services/products.service';

export const handleCreateProduct = async (
    req: Request,
    res: Response,
    
) => {
    const { categoryId, name, description, price, discount, imageUrl, roleId } =
        req.body;
    console.log('req.body', req.body);

    if (roleId === 1) {
        try {
            const product = await createProduct(
                categoryId,
                name,
                description,
                price,
                discount,
                imageUrl
            );
            return res.status(200).json(product);
        } catch (err) {
            return console.log(err);
        }
    } else {
        return res.send('Not Authorised to add Product');
    }
};

export const handleGetAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await getAllProducts();
        return res.status(200).json(products);
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
};

export const handleGetCategoryProducts = async (
    req: Request,
    res: Response
) => {
    try {
        const categoryId = Number(req.params.categoryId);
        const products = await getAllCategoryProducts(categoryId);
        return res.status(200).json(products);
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
};

export const handleSearchProducts = async (req: Request, res: Response) => {
    try {       
        const {keyWord} = req.params;
        const searchResults = await getAllMatchingProducts(keyWord);
        return res.status(200).json(searchResults);
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
};

export const handleFilterProducts = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const {categories}=req.body;
        const response= await getFilteredProducts(categories);
        return res.status(200).json(response)
    }
    catch(error){
        console.log(error)
        return next(error)
    }
}
