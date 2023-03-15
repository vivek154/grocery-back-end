import { DataTypes, Sequelize } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';

/* eslint @typescript-eslint/no-unused-vars: "off" */
const RoleModel = (sequelize: Sequelize, _Sequelize: any) => {
    const Role = sequelize.define('Roles', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
    return Role;
};

export default RoleModel;
