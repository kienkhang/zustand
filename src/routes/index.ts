import { createBrowserRouter, RouteObject } from "react-router-dom";
import addMainRoute from "./mainRoute";

const initRoutes = () => {
  const appRoutes: RouteObject[] = [];
  addMainRoute(appRoutes);

  return appRoutes;
};
export const appRoutes = initRoutes();
const router = createBrowserRouter(appRoutes);
export default router;
