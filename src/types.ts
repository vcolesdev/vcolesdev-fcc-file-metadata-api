export type MulterFileRequest = Express.Multer.File | undefined

export interface FileStats {
  name: string;
  type: string;
  size: number;
}