import type { Response } from "express";

export interface SuccessResponse {
  res: Response;
  status?: number;
  data: any;
}

export interface ErrorResponse {
  res: Response;
  status?: number;
  message: string;
}
