import { DataTypes } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';

/* eslint @typescript-eslint/no-unused-vars: "off" */
const UserModel = (sequelize: any, _Sequelize: any) => {
    const User = sequelize.define(
        'Users',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: true,
            },
            phoneNumber: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING,
            },
            roleId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'Roles',
                    key: 'id',
                },
            },
            fullName: {
                type: DataTypes.STRING,
            },
            ...auditColumns,
        },
        {
            defaultScope: {
                attributes: { exclude: ['password'] },
            },
            scopes: {
                withPassword: {
                    attributes: { exclude: [] },
                },
            },
            hooks: {
                afterCreate: (record: any) => {
                    /* eslint no-param-reassign: "off" */
                    delete record.dataValues.password;
                },
                afterUpdate: (record: any) => {
                    /* eslint no-param-reassign: "off" */
                    delete record.dataValues.password;
                },
            },
        }
    );
    return User;
};

export default UserModel;
