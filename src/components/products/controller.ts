import type { Request, Response } from "express";
import { success, error } from "../../common";
import prisma from "../../db";

export async function getProducts(_req: Request, res: Response): Promise<void> {
  try {
    const data = await prisma.products.findMany({
      include: {
        category: true,
      },
    });
    success({ res, data });
  } catch (err) {
    error({ res, message: err as string });
  }
}

export async function getProduct(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const data = await prisma.products.findUnique({
      where: { id: Number(id) },
      include: {
        category: true,
      },
    });
    success({ res, data });
  } catch (err) {
    error({ res, message: err as string });
  }
}

export async function addProduct(req: Request, res: Response): Promise<void> {
  try {
    const data = await prisma.products.create({ data: req.body });
    success({ res, data });
  } catch (err) {
    error({ res, message: err as string });
  }
}

export async function updateProduct(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    const data = await prisma.products.update({
      where: { id: Number(id) },
      data: req.body,
    });
    success({ res, data });
  } catch (err) {
    error({ res, message: err as string });
  }
}
