import multer from "multer";
import {Express, NextFunction, Request, Response} from "express";
import File from "../modules/File";

const upload = multer();
const fileEvents = File.events;

// Handle the test route
const handleApiTestRoute = (req: Request, res: Response) => {
  res.json({message: "Test endpoint"});
}

/**
 * Get API routes
 * @param app
 */
export default function getApiRoutes(app: Express) {
  app.get("/api/test", function(req: Request, res: Response) {
    return handleApiTestRoute(req, res);
  });

  app.post("/api/analyzefile", upload.single("upfile"), async function(req: Request, res: Response, next: NextFunction) {
    return fileEvents.handleAnalyzeFile(req, res, next);
  });
}