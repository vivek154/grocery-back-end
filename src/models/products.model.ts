import { DataTypes } from "sequelize";
import { auditColumns } from "../shared/utils/sequelize-model-helper";

const ProductsModel=(sequelize:any,_Sequelize:any)=>{

    const Product = sequelize.define(
        'products',{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        categoryId:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING,
            unique:true,
            allowNull:false,
        },
        description:{
            type:DataTypes.TEXT('medium'),
            allowNull:true
        },
        price:{
            type:DataTypes.DOUBLE,
            allowNull:false
        },
        discount:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        imageUrl:{
            type:DataTypes.STRING,
        },
        ...auditColumns
    })
    return Product;

}

export default ProductsModel 