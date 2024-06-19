import express from "express";
import { registerUser, loginUser, getCurrentUser, logoutUser } from "../controllers/authController.js";
import { protectedMiddleware, ownerMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);


router.post("/login", loginUser);

router.get("/logout", logoutUser);

router.get("/getuser", protectedMiddleware, getCurrentUser);

router.get("/admin", protectedMiddleware, ownerMiddleware, (req, res) => {
  res.status(200).json({ message: "Admin access granted" });
});

export default router;
