import { DataTypes } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';

/* eslint @typescript-eslint/no-unused-vars: "off" */
const CartModel = (sequelize: any, _Sequelize: any) => {
    const Cart = sequelize.define('cart', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        userId:{
            type:DataTypes.UUID
        },
        product:{
            type:DataTypes.JSONB
        },
        quantity:{
            type:DataTypes.INTEGER,
            defaultValue:1
        },
        totalPrice:{
            type:DataTypes.DECIMAL
        },
        ...auditColumns,
    });
    return Cart;
};

export default CartModel;
