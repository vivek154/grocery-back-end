import { Sequelize } from 'sequelize';
import config from '../config/db.config';
import PermissionModel from './permission.model';
import RolePermissionModel from './role-permission.model';
import RoleModel from './role.model';
import UserOTPModel from './user-otp.model';
import UserModel from './user.model';

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: <any>0,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
    },
});
const db = {
    Sequelize,
    sequelize,
    user: UserModel(sequelize, Sequelize),
    userOTP: UserOTPModel(sequelize, Sequelize),
    role: RoleModel(sequelize, Sequelize),
    permission: PermissionModel(sequelize, Sequelize),
    rolePermission: RolePermissionModel(sequelize, Sequelize),
};

db.role.belongsToMany(db.permission, { through: db.rolePermission });
db.permission.belongsToMany(db.role, { through: db.rolePermission });

db.role.hasMany(db.user);
db.user.belongsTo(db.role);

export default db;
