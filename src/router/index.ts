import { Router } from "express";
import { CategoriesRouter, ProductsRouter } from "../components";

const routes = [
  ["/categories", CategoriesRouter],
  ["/products", ProductsRouter],
];

const router = Router();

routes.forEach(([path, route]) => {
  router.use(`/${path}`, route as Router);
});

export default router;
