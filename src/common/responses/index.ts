import { ErrorResponse, SuccessResponse } from "../../core/types";
import type { Response } from "express";

export function success({
  res,
  status = 200,
  data,
}: SuccessResponse): Response {
  return res.status(status).json({ data });
}

export function error({ res, status = 500, message }: ErrorResponse): Response {
  return res.status(status).json({ message });
}
