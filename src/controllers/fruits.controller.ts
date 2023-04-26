import { Request,Response,NextFunction } from "express";
import { AddNewItem,getAllItems } from "../services/fruits.service";


export const handleAddNewItem =async (req:Request,res:Response,next:NextFunction)=>{

    const {  title ,description,price,discount,image   } = req.body;
    try{
        const Fruits = await AddNewItem(title,description,price,discount,image);
        res.status(200).json(Fruits);
    }
    catch(error){
        next(error)
    }

}

export const handleGetAllItems= async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const Fruits = await getAllItems();
        res.status(200).json(Fruits)
    }
    catch(error){
        next(error);
    }
}