import { Op } from 'sequelize';
import db from '../models';

const UserOTP: any = db.userOTP;

export const createUserOTP = async (otp: string, expirationTime: Date) => await UserOTP.create({ otp, expirationTime });

export const findUserOTP = async (id: string) => await UserOTP.findOne({ where: { id } });

/* eslint no-param-reassign: off */
export const markUserOTPAsVerified = async (otpRecord: any) => {
    otpRecord.verified = true;
    await otpRecord.save();
};

export const deleteOldUserOTPs = async () => {
    await UserOTP.destroy({
        where: {
            createdAt: {
                [Op.lt]: new Date(Date.now() - (60 * 60 * 1000))
            }
        }
    });
}
