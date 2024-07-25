import { Router } from "express";
import * as Controller from "./controller";

const router = Router();

router.get("/", Controller.getCategories);
router.get("/:id", Controller.getCategory);
router.post("/", Controller.addCategory);
router.put("/:id", Controller.updateCategory);

export default router;
