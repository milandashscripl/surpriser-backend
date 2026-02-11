// routes/authRoutes.js
import express from "express";
import {
  register,
  login,
  verifyOtp,
} from "../controllers/authController.js";
import upload from "../midllewares/upload.js";

const router = express.Router();

// AUTH ROUTES
router.post("/register", upload.single("profilePic"), register);
router.post("/login", login);
router.post("/verify-otp", verifyOtp);

export default router;
