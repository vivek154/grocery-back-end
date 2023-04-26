import db from "../models";

const Fruits = db.fruits;

export const AddNewItem = async (
    title: String,
    description: String,
    price: String,
    discount: String,
    image: String) => await Fruits.create({
    title,
    description,
    price,
    discount,
    image
})

export const getAllItems = async () => await Fruits.findAll()
