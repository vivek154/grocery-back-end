import { DataTypes, Sequelize } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';

/* eslint @typescript-eslint/no-unused-vars: "off" */
const PermissionModel = (sequelize: Sequelize, _Sequelize: any) => {
    const Permission = sequelize.define('Permissions', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        value: {
            type: DataTypes.STRING,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT('medium'),
        },
        ...auditColumns,
    });
    return Permission;
};

export default PermissionModel;
