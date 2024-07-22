import { Router } from "express";
import { homeRouter } from "../components";

const routes = [["/", homeRouter]];

const router = Router();

routes.forEach(([path, route]) => {
  router.use(`/${path}`, route as Router);
});

export default router;
