import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(arcjetProtection);

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

router.get("/check", protectRoute, (req, res) => {
  res.status(200).json({ message: "Authorized", user: req.user });
});

export default router;
