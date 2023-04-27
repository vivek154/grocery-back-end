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
            const category = await createCategory(name);
            res.status(200).json(category);
        } catch (err) {
            next(err);
        }
    } else {
        res.send('Not autorised to create category');
    }
};

export const handleGetAllCategories = async (req: Request, res: Response) => {
    const categories = await getAllCategories();
    res.status(200).json(categories);
};

export const handleGetCategoryByName = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const categoryName = req.params.categoryName.toLowerCase();

        if (categoryName) {
            const category = await getCategoryByName(categoryName);
            res.status(200).json(category);
        }
    } catch (err) {
        next(err);
    }
};

export const handleGetMostSearchedCategories = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await getMostSearchedCategories();
        res.status(200).json(response);
    } catch (ex) {
        next(ex);
    }
};
