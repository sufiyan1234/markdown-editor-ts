import express from "express";
import cors from "cors";
import markdownRoutes from "./routes/markdownRoutes";
import errorHandler from "./middleware/errorHandler"; // Import error handler

// Handle Uncaught Exceptions
process.on("uncaughtException", (error) => {
  console.error(" Uncaught Exception:", error);
  process.exit(1); // Exit the process to avoid undefined behavior
});

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", markdownRoutes);

// Error handling middleware (must be at the end)
app.use(errorHandler);

// Handle Unhandled Promise Rejections
process.on("unhandledRejection", (reason: any, promise: Promise<any>) => {
  console.error("🔥 Unhandled Rejection at:", promise, "reason:", reason);
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

// Handle SIGTERM (e.g., when stopping a Docker container or Kubernetes pod)
process.on("SIGTERM", () => {
  console.log(" SIGTERM RECEIVED. Shutting down gracefully...");
  server.close(() => {
    console.log("Process terminated!");
    process.exit(0);
  });
});

// Handle SIGINT (e.g., Ctrl+C in terminal)
process.on("SIGINT", () => {
  console.log("SIGINT RECEIVED. Shutting down...");
  server.close(() => {
    console.log(" Process terminated!");
    process.exit(0);
  });
});
