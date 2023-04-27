import express from 'express';
import {
    handleCreateProduct,
    handleGetAllProducts,
    handleGetCategoryProducts,
    handleSearchProducts,
    handleFilterProducts,
} from '../controllers/products.controller';
import { ROUTES } from '../shared/constants/url';

export const productsRouter = express.Router();

productsRouter.post(ROUTES.CREATE_PRODUCT, handleCreateProduct);
productsRouter.get(ROUTES.GET_ALL_PRODUCTS, handleGetAllProducts);
productsRouter.get(ROUTES.GET_CATEGORY_PRODUCTS, handleGetCategoryProducts);
productsRouter.get(ROUTES.SEARCH_PRODUCTS, handleSearchProducts);
productsRouter.post(ROUTES.FILTER_PRODUCTS, handleFilterProducts);
