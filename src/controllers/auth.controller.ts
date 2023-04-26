import { NextFunction, Request, Response } from 'express';
import HTTPResponse from '../interfaces/http-response.success';
import {
    createUserOTP,
    findUserOTP,
    markUserOTPAsVerified,
} from '../services/user-otp.service';
import {
    findOrCreateUser,
    getUser,
    getUserByEmailId,
} from '../services/user.service';
import { BadRequestError } from '../shared/errors/bad-request.error';
import { InvalidCredentialsError } from '../shared/errors/invalid-credentials.error';
import {
    comparePassword,
    decode,
    encode,
    generateAccessToken,
    generateOTP,
    generateRefreshToken,
    verifyRefreshToken,
} from '../shared/utils/auth-utils';

export const handleAuthOTPInit = async (
    req: Request,
    res: Response<HTTPResponse>,
    next: NextFunction
) => {
    try {
        const { phoneNumber, roleId } = req.body;

        if (!phoneNumber) {
            throw new BadRequestError('phoneNumber is required');
        }

        await findOrCreateUser({ phoneNumber, roleId });

        const { otp, expiry } = generateOTP();
        const userOTPRecord = await createUserOTP(otp, expiry);

        const details = {
            timestamp: new Date(),
            key: phoneNumber,
            id: userOTPRecord.id,
        };
        const encoded = encode(JSON.stringify(details));
        // await sendAuthInitOTPSMS(phoneNumber, otp);
        res.status(200).json({ data: encoded });
    } catch (ex) {
        next(ex);
    }
};

export const handleAuthOTPVerify = async (
    req: Request,
    res: Response<HTTPResponse>,
    next: NextFunction
) => {
    try {
        const { phoneNumber, verificationKey, otp } = req.body;

        if (!phoneNumber) {
            throw new BadRequestError('phoneNumber is required');
        }

        if (!verificationKey) {
            throw new BadRequestError('verificationKey is required');
        }

        if (!otp) {
            throw new BadRequestError('otp is required');
        }

        let decoded;

        try {
            decoded = JSON.parse(decode(verificationKey));
        } catch (err: any) {
            throw new BadRequestError('Bad verificationKey');
        }

        if (decoded.key !== phoneNumber) {
            throw new BadRequestError('OTP was not sent to given phoneNumber');
        }

        const otpRecord = await findUserOTP(decoded.id);
        if (otpRecord) {
            if (otpRecord.verified) {
                throw new BadRequestError('OTP already used');
            } else if (new Date() < otpRecord.expirationTime) {
                console.log(otp); console.log(otpRecord.otp);

                if (Number(otp) === Number(otpRecord.otp)) {
                    await markUserOTPAsVerified(otpRecord);
                    const user = await getUser({ phoneNumber });
                    if (user && user.id) {
                        const accessToken = generateAccessToken(user);
                        const refreshToken = generateRefreshToken(user);
                        res.status(200).json({
                            data: {
                                accessToken,
                                refreshToken,
                                user
                            },
                        });
                    }
                    if (user && user.id) {
                        const accessToken = generateAccessToken(user);
                        const refreshToken = generateRefreshToken(user);
                        res.status(200).json({
                            data: {
                                accessToken,
                                refreshToken,
                                user
                            },
                        });
                    } else {
                        throw new BadRequestError(
                            'No user phone with given phoneNumber'
                        );
                    }
                } else {
                    throw new BadRequestError('OTP Not matched');
                }
            } else {
                throw new BadRequestError('OTP expired');
            }
        } else {
            throw new BadRequestError('Bad request');
        }
    } catch (ex) {
        next(ex);
    }
};

export const handleSignInViaEmailIdPassword = async (
    req: Request,
    res: Response<HTTPResponse>,
    next: NextFunction
) => {
    try {
        const user = await getUserByEmailId(req.body.email);

        if (!user) {
            throw new InvalidCredentialsError('Invalid email or password');
        }

        const verifiedPassword = await comparePassword(
            user.password,
            req.body.password
        );

        if (!verifiedPassword) {
            throw new InvalidCredentialsError('Invalid email or password');
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.status(200).json({
            data: {
                accessToken,
                refreshToken,
            },
        });
    } catch (ex) {
        next(ex);
    }
};

export const refreshAccessToken = (
    req: Request,
    res: Response<HTTPResponse>,
    next: NextFunction
) => {
    try {
        const { refreshToken } = req.body;
        const tokenDetails: any = verifyRefreshToken(refreshToken);
        const accessToken = generateAccessToken({ id: tokenDetails.userId });
        res.status(200).json({
            data: {
                accessToken,
            },
        });
    } catch (ex) {
        next(ex);
    }
};
