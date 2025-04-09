import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("country/:id", "routes/country.$id.tsx"),
] satisfies RouteConfig;
