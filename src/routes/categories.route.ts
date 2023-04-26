import express from 'express';
import { handleCreateCategory,handleGetAllCategories,handleGetCategoryByName,handleGetMostSearchedCategories } from '../controllers/categories.controller';
import { ROUTES } from '../shared/constants/url';

export const categoriesRouter= express.Router();

categoriesRouter.post(ROUTES.CREATE_CATEGORY,handleCreateCategory);
categoriesRouter.get(ROUTES.GET_ALL_CATEGORIES,handleGetAllCategories);
categoriesRouter.get(ROUTES.GET_MOST_SEARCHED_CATEGORIES,handleGetMostSearchedCategories);
categoriesRouter.get(ROUTES.GET_CATEGORY_BY_NAME,handleGetCategoryByName);

