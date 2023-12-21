import express from "express";
import { addAnswer, addQuestion, addReplyToReview, addReview, editCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from "../controllers/course.controller";
import { authoriseRoles, isAuthenticated } from "../middleware/auth";
const CourseRouter = express.Router();

CourseRouter.post("/create-course",isAuthenticated,authoriseRoles("admin"),uploadCourse);
CourseRouter.put("/edit-course/:id",isAuthenticated,authoriseRoles("admin"),editCourse);
CourseRouter.get("/get-course/:id",getSingleCourse);
CourseRouter.get("/get-course",getAllCourses);
CourseRouter.get("/get-course-content/:id",isAuthenticated,getCourseByUser);
CourseRouter.put("/addQuestion",isAuthenticated,addQuestion);
CourseRouter.put("/addAnswer",isAuthenticated,addAnswer);
CourseRouter.put("/addReview/:id",isAuthenticated,addReview);
CourseRouter.put("/addReplyToReview",isAuthenticated,authoriseRoles("admin"),addReplyToReview);
export default CourseRouter;
