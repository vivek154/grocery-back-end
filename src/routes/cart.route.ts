import express from 'express';

import { ROUTES } from '../shared/constants/url';
import { handleAddToCart, handleGetUserCart,handleUpdateQuantity,handleDeleteCartById} from '../controllers/cart.controller';

export const cartRouter = express.Router();

cartRouter.post(ROUTES.ADD_TO_CART, handleAddToCart);
cartRouter.post(ROUTES.GET_USER_CART, handleGetUserCart);
cartRouter.patch(ROUTES.UPDATE_CART_QUANTITY, handleUpdateQuantity);
cartRouter.delete(ROUTES.DELETE_ONE_CART_BY_ID, handleDeleteCartById);

