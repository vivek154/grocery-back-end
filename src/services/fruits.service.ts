import db from "../models";

const Fruits = db.fruits;

export const AddNewItem = async (
    title: String,
    description: String,
    price: String,
    discount: String,
    image: String) => {

    return await Fruits.create({
        title,
        description,
        price,
        discount,
        image
    })
}

export const getAllItems = async () => {
    
    return await Fruits.findAll();
}
