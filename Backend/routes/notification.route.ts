import express from "express";
import { authoriseRoles, isAuthenticated } from "../middleware/auth";
import { getNotifications, updateNotification } from "../controllers/notification.controller";
const notificationRoute = express.Router();

notificationRoute.get("/get-all-notifications", isAuthenticated, authoriseRoles("admin"), getNotifications);
notificationRoute.put("/update-notification-status/:id", isAuthenticated, authoriseRoles("admin"),updateNotification);

export default notificationRoute;
