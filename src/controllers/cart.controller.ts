import { NextFunction, Request, Response } from "express";
import { addToCart, deleteCartById, getUserCart, updateCartQuantity } from "../services/cart.service";

export const handleAddToCart = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { productId, count, userId } = req.body;
    try {
        const cart = await addToCart({ productId, quantity: count, userId })
        res.status(200).json(cart);
    } catch (err) {
        next(err);
    }

};
export const handleGetUserCart = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { userId } = req.body;

    try {
        const cart = await getUserCart(userId)
        res.status(200).json(cart);
    } catch (err) {
        next(err);
    }

};

export const handleUpdateQuantity = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { productId, userId, action } = req.body
    try {
        const cart = await updateCartQuantity(productId, userId, action)
        res.status(200).json(cart);
    } catch (err) {
        next(err);
    }

};
export const handleDeleteCartById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { cartId } = req.params
    console.log("cartId-------",cartId);
    
    try {
        const cart = await deleteCartById(cartId)
        res.status(200).json(cart);
    } catch (err) {
        next(err);
    }

};