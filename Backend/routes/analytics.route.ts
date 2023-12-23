import express from "express";
import { authoriseRoles, isAuthenticated } from "../middleware/auth";
import { getCoursesAnalytics, getOrderAnalytics, getUsersAnalytics } from "../controllers/Analytics.controller";
const analyticsRouter = express.Router();

analyticsRouter.get("/get-users-analytics", isAuthenticated, authoriseRoles("admin"), getUsersAnalytics);
analyticsRouter.get("/get-courses-analytics", isAuthenticated, authoriseRoles("admin"), getCoursesAnalytics);
analyticsRouter.get("/get-order-analytics", isAuthenticated, authoriseRoles("admin"), getOrderAnalytics);

export default analyticsRouter;
