import express, { Request, Response, NextFunction } from "express";
import { marked } from "marked";

const router = express.Router();

router.post(
  "/convert",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { markdown } = req.body;

      if (typeof markdown !== "string") {
        const error = new Error("Invalid markdown input") as any;
        error.status = 400;
        throw error;
      }

      const html = marked.parse(markdown); // Convert Markdown to HTML
      res.json({ success: true, html });
    } catch (error) {
      next(error); // Pass error to centralized error handler
    }
  }
);

export default router;
