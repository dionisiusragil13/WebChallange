import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { dashboard } from "../controller/dashboard.controller.js";

const router = express.Router();

router.get("/", protectRoute, dashboard);

export default router;