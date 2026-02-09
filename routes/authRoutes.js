// routes/authRoutes.js
import express from "express";
<<<<<<< HEAD
import { register, login } from "../controllers/authController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/register", upload.single("profilePic"), register);
=======
import {
  register,
  login,
  verifyOtp,
} from "../controllers/authController.js";

const router = express.Router();

// AUTH ROUTES
router.post("/register", register);
>>>>>>> 908465d (mmm)
router.post("/login", login);
router.post("/verify-otp", verifyOtp);

export default router;
