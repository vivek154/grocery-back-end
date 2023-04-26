import { NextFunction, Request, Response } from 'express';
import {
    createCategory,
    getAllCategories,
    getCategoryByName,
    getMostSearchedCategories,
} from '../services/categories.service';

export const handleCreateCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { roleId, name } = req.body;
    if (roleId === 1) {
        try {
            let category = await createCategory(name);
            res.status(200).json(category);
        } catch (err) {
            console.log(err);
        }
    } else {
        res.send('Not autorised to create category');
    }
};

export const handleGetAllCategories = async (req: Request, res: Response) => {
    let categories = await getAllCategories();
    res.status(200).json(categories);
};

export const handleGetCategoryByName = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let categoryName = req.params.categoryName.toLowerCase();
    console.log('categoryName------handleGetCategoryByName-', categoryName);
    if (categoryName) {
        let category = await getCategoryByName(categoryName);
        res.status(200).json(category);
    }
};

export const handleGetMostSearchedCategories = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        console.log("controller")
        let response = await getMostSearchedCategories();
        console.log('get Most searched categories', response);
        res.status(200).json(response);
    } catch (ex) {
        next(ex);
    }
};
