import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../utils/ErrorHandler";

export const ErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal server error';

    // Wrong mongoDB id error
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid:${err.path}`;

    }

    //duplicate key error

    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyvalue)} entered`;
        err = new ErrorHandler(message, 400);
    }
    // wrong jwt error
    if (err.name === 'jsonWebTokenError') {
        const message = `json web token is invalid ,try again`;
        err = new ErrorHandler(message, 400)
    }
    // jwt token expired
    if (err.name === "TokenExpiredError") {
        const message = `json web token is expired `;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        Message: err.message,
    });
};