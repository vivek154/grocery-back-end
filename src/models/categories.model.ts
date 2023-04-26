import { DataTypes } from "sequelize";
import { auditColumns } from "../shared/utils/sequelize-model-helper";


/* eslint @typescript-eslint/no-unused-vars: "off" */
const CategoriesModel=(sequelize:any,_Sequelize: any)=>{
    const Categories=sequelize.define(
        'categories',{
        
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            name:{
                type:DataTypes.STRING,
            },
            searched:{
                type:DataTypes.INTEGER,
                defaultValue:0
            },
            ...auditColumns
        })
    return Categories
}

export default CategoriesModel