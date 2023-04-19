import { Sequelize,DataTypes } from "sequelize";
import { auditColumns } from "../shared/utils/sequelize-model-helper";


const VegetableModel=(sequelize:any,_Sequelize:any)=>{
    const Vegetables = sequelize.define(
        'Vegetables',
        {
           id: {
                type:DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey:true,
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
            },
            ...auditColumns,
        }
    )

    return Vegetables;

}

export default VegetableModel;
