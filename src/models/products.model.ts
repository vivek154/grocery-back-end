import { DataTypes } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';

/* eslint @typescript-eslint/no-unused-vars: "off" */
const ProductsModel = (sequelize: any, _Sequelize: any) => {
    const Product = sequelize.define('products', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            
        },
        description: {
            type: DataTypes.TEXT('medium'),
            
        },
        price: {
            type: DataTypes.DOUBLE,
            
        },
        discount: {
            type: DataTypes.INTEGER,
            
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        ...auditColumns,
    });
    return Product;
};

export default ProductsModel;
