import express from 'express';
import { handleCreateUser } from '../controllers/user.controller';
import { EMPTY_ROUTE, ROUTES } from '../shared/constants/url';

const userRouter = express.Router();

userRouter.post(ROUTES.CREATE_USER, handleCreateUser);
export default userRouter;
