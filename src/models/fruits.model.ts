import {DataTypes } from "sequelize";

/* eslint @typescript-eslint/no-unused-vars: "off" */
const FruitsModel=(sequelize:any,_Sequelize: any)=>{

    const Fruits=sequelize.define(
        "Fruits",{
            id:{
                type:DataTypes.UUID,
                defaultValue:DataTypes.UUIDV4, 
                primaryKey:true
            },
            title:{
                type:DataTypes.STRING,
                allowNull:false
            },
            description:{
                type:DataTypes.STRING,
                allowNull:true
            },
            price:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            discount:{
                type:DataTypes.STRING,
                allowNull:true
            },
            image:{
                type:DataTypes.STRING,
                allowNull:true
            }
        }
    );

    return Fruits
}

export default FruitsModel;