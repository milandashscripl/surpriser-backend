import express from "express";
import authMiddleware from "../midllewares/authMiddleware.js";
import { upload } from "../midllewares/upload.js";
import {
  getProfile,
  updateProfile,
} from "../controllers/userController.js";

const router = express.Router();

// USER ROUTES
router.get("/profile", authMiddleware, getProfile);

router.put(
  "/profile",
  authMiddleware,
  upload.single("profileImage"),
  updateProfile
);

export default router;
