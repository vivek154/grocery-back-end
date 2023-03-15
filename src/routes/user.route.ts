import express from 'express';
import { handleCreateUser } from '../controllers/user.controller';
import { EMPTY_ROUTE } from '../shared/constants/url';

const userRouter = express.Router();

userRouter.post(EMPTY_ROUTE, handleCreateUser);

export default userRouter;
