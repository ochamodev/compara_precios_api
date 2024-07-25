import type { Request, Response } from "express";
import { success, error } from "../../common";
import prisma from "../../db";

export async function getCategories(
  _req: Request,
  res: Response
): Promise<void> {
  try {
    const data = await prisma.categories.findMany();
    success({ res, data });
  } catch (err) {
    error({ res, message: err as string });
  }
}

export async function getCategory(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const data = await prisma.categories.findUnique({
      where: { id: Number(id) },
    });
    success({ res, data });
  } catch (err) {
    error({ res, message: err as string });
  }
}

export async function addCategory(req: Request, res: Response): Promise<void> {
  try {
    const data = await prisma.categories.create({ data: req.body });
    success({ res, data });
  } catch (err) {
    error({ res, message: err as string });
  }
}

export async function updateCategory(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    const data = await prisma.categories.update({
      where: { id: Number(id) },
      data: req.body,
    });
    success({ res, data });
  } catch (err) {
    error({ res, message: err as string });
  }
}
