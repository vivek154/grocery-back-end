import { WhereOptions } from 'sequelize/types';
import db from '../models';
import { getPasswordHash } from '../shared/utils/auth-utils';

const User: any = db.user;

export const createUser = async (
    email: string,
    password: string,
    roleId: number
) => {
    const hashedPassword = await getPasswordHash(password);
    return await User.create({
        email,
        password: hashedPassword,
        RoleId: roleId,
    });
};

export const getAllUsers = async () => await User.findAll();

export const getUser = async (filter: WhereOptions) =>
    await User.findOne({
        where: filter,
    });

export const getUserByEmailId = async (email: string) =>
    await User.scope('withPassword').findOne({ where: { email } });

export const findOrCreateUser = async (filter: WhereOptions) =>
    await User.findOrCreate({ where: filter });
