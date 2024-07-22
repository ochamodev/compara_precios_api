import type { Request, Response } from "express";
import { success, error } from "../../common";

export function list(_req: Request, res: Response): void {
  try {
    const data = ["item1", "item2", "item3"];
    success({ res, data });
  } catch (err) {
    error({ res, message: err as string });
  }
}
