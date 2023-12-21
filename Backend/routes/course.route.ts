import express from "express";
import { editCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from "../controllers/course.controller";
import { authoriseRoles, isAuthenticated } from "../middleware/auth";
const CourseRouter = express.Router();

CourseRouter.post("/create-course",isAuthenticated,authoriseRoles("admin"),uploadCourse);
CourseRouter.put("/edit-course/:id",isAuthenticated,authoriseRoles("admin"),editCourse);
CourseRouter.get("/get-course/:id",getSingleCourse);
CourseRouter.get("/get-course",getAllCourses);
CourseRouter.get("/get-course-content/:id",isAuthenticated,getCourseByUser);

export default CourseRouter;
