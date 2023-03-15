import { NextFunction, Request, Response } from 'express';
import { createUser } from '../services/user.service';

export const handleCreateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email, password, roleId } = req.body;
    try {
        const user = await createUser(email, password, roleId);
        res.status(200).json(user);
    } catch (ex) {
        next(ex);
    }
};
