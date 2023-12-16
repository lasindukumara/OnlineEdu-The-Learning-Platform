import express, { Express } from "express";
import {activateUser, registrationUser} from '../controllers/user.controller';
const UserRouter = express.Router();

UserRouter.post('/registration',registrationUser);
UserRouter.post('/activate-user',activateUser);

export default UserRouter;