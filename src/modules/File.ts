import {NextFunction, Request, Response} from "express";
import {FileStats, MulterFileRequest} from "../types";
import File from "../modules/File";

/**
 * File Module
 */
export default {
  events: {
    /**
     * getFileStats()
     * @param file
     * Get file state for a given file
     */
    handleGetFileStats: async (file: any): Promise<FileStats>  => ({
      name: file.originalname,
      type: file.mimetype,
      size: file.size
    }),
    /**
     * handleAnalyzeFile()
     * @param req
     * @param res
     * @param next
     * Handle analyzing the uploaded file.
     */
    handleAnalyzeFile: async (req: Request, res: Response, next?: NextFunction) => {
      const file: MulterFileRequest = req.file;
      let fileStats: FileStats;

      if (!file) {
        res.status(400).send("No file uploaded.");
      } else {
        fileStats = await File.events.handleGetFileStats(file);
        res.json(fileStats);
      }

      if (next) next();
    }
  },
}
