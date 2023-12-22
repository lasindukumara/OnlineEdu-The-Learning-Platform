import express from "express";
import { authoriseRoles, isAuthenticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/order.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder);
orderRouter.post("/getAllOrders", isAuthenticated,authoriseRoles("admin"), getAllOrders);

export default orderRouter;
