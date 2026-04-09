import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import helmet from "helmet";

import authRoutes from "./routes/auth.route.js"
import dashboardRoutes from "./routes/dashboard.route.js"
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(helmet());

app.use("/api/auth",authRoutes)
app.use("/dashboard",dashboardRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port http://localhost:" + PORT);
  connectDB();
});
