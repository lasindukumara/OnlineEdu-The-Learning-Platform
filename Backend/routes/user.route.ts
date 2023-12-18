import express, { Express } from "express";
import {activateUser, getUserInfo, loginUser, logoutUser, registrationUser, socialAuth, updateAccessToken, updatePassword, updateProfilePicture, updateUserInfo} from '../controllers/user.controller';
import { isAuthenticated } from "../middleware/auth";
import { getUserById } from "../services/user.service";
const UserRouter = express.Router();

UserRouter.post('/registration',registrationUser);
UserRouter.post('/activate-user',activateUser);
UserRouter.post('/login',loginUser);
UserRouter.get('/logout',isAuthenticated,logoutUser);
UserRouter.get('/refresh',updateAccessToken);
UserRouter.get('/me',isAuthenticated,getUserInfo);
UserRouter.post('/socialAuth',socialAuth);
UserRouter.put('/update-user-info',isAuthenticated,updateUserInfo);
UserRouter.put('/update-user-password',isAuthenticated,updatePassword);
UserRouter.put('/update-user-avatar',isAuthenticated,updateProfilePicture);



export default UserRouter;