import { Router } from "express";
import * as Controller from "./controller";

const router = Router();

router.get("/", Controller.getProducts);
router.get("/:id", Controller.getProduct);
router.post("/", Controller.addProduct);
router.put("/:id", Controller.updateProduct);

export default router;
