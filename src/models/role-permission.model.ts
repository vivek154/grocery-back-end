import { DataTypes, Sequelize } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';
import RoleModel from './role.model';

/* eslint @typescript-eslint/no-unused-vars: "off" */
const RolePermissionModel = (sequelize: Sequelize, _Sequelize: any) => {
    const RolePermission = sequelize.define('RolePermissions', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        RoleId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Roles',
                key: 'id',
            },
        },
        PermissionId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Permissions',
                key: 'id',
            },
        },
        ...auditColumns,
    });
    return RolePermission;
};

export default RolePermissionModel;
