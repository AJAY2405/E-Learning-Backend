import express from "express";
import {
  createCourse,
  createLecture,
  editCourse,
  editLecture,
  getCourseById,
  getCourseLecture,
  getCreaterCourses,
  getPublishedCourse,
  removeLecture,
  togglePublishedCourse,
} from "../controller/course.controller.js";
import { isAuthenticated } from "../middlewires/isAuthenticated.js";
import { singleUpload } from "../middlewires/multer.js";

const router = express.Router();

router.post("/", isAuthenticated, createCourse);
router.get("/published-courses",getPublishedCourse);
router.get("/",isAuthenticated, getCreaterCourses);
router.put("/:courseId",isAuthenticated,singleUpload,editCourse);
router.get("/:courseId",isAuthenticated, getCourseById);
router.post("/:courseId/lecture",isAuthenticated,createLecture);
router.get("/:courseId/lecture",isAuthenticated,getCourseLecture);
router.post("/:courseId/lecture/:lectureId",isAuthenticated,editLecture);
router.delete("/lecture/:lectureId",isAuthenticated,removeLecture);
router.patch("/:courseId", isAuthenticated, togglePublishedCourse);
//

// router.patch("/:courseId", isAuthenticated, togglePublishCourse);

export default router;
