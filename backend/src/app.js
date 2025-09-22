import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { logger, stream } from "./middleware/logger.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("combined", { stream })); // logs http requests

// Routes
app.use("/api/users", userRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Backend is running ✅" });
});

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
