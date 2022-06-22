import express from "express";
import {
    getBlog,
    createBlog,
    getBlogById,
    deleteBlog,
    editPost,
    getBlogBySearch,
    likeBlog
} from "../controllers/blog";
import isAuth from "../middleware/auth";



const router = express.Router();
router.get("/search", isAuth ,getBlogBySearch);
router.get("/", getBlog);
router.post("/", isAuth, createBlog);
router.get("/:id",isAuth ,getBlogById);
router.delete("/:id",isAuth ,deleteBlog);
router.patch("/:id",isAuth ,editPost);
router.patch("/:id/likeblog", isAuth,likeBlog);


export default router;