import { where } from "sequelize";
import db from "../models";

const Products = db.products;
const Cart = db.cart;

export const addToCart = async ({ productId, quantity, userId }: any) => {
    const product = await Products.findByPk(productId)
    if (product) {
        const totalPrice = product.price * (quantity ?? 1)
        return await Cart.create({
            product: product,
            quantity,
            userId,
            totalPrice
        })
    }
    else throw new Error(`Product with id:${productId} not found `)
}
export const getUserCart = async (userId: string) => {
    const carts = Cart.findAll({
        where: {
            userId: userId
        },
        order: [["createdAt", "desc"]]
    })
    return carts
}

export const updateCartQuantity = async (productId: string, userId: string, action: number) => {

    const cart = await Cart.findOne({
        where: {
            userId,
            'product.id': productId
        }
    })
    const newQ = action > 0 ? cart?.quantity + 1 : action < 0 && cart?.quantity > 0 ? cart.quantity - 1 : 0

    return await Cart.update({
        quantity: newQ
    }, {
        where: {
            id: cart.id
        }
    })
}

export const deleteCartById = async (cartId:string)=>{
    return await Cart.destroy({
        where:{
            id:cartId
        }
    })
}