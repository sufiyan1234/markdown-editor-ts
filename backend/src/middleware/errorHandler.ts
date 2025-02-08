import { Request, Response, NextFunction } from "express";

// Custom error type for better error handling
interface AppError extends Error {
  status?: number;
}

// Centralized error handler middleware
const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error:", err.message); // Log the error (for debugging)

  const statusCode = err.status || 500; // Default to 500 if no status is set
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;
