import { DataTypes, Sequelize } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';

/* eslint @typescript-eslint/no-unused-vars: "off" */
const UserOTPModel = (sequelize: Sequelize, _Sequelize: any) => {
    const UserOTP = sequelize.define('UserOTPs', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        otp: {
            type: DataTypes.STRING,
        },
        expirationTime: {
            type: DataTypes.DATE,
        },
        verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        ...auditColumns,
    });
    return UserOTP;
};

export default UserOTPModel;
