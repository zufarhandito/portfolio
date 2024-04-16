declare module "global" {
  import { ROUTES } from "@/constants/global"
  type IRoutes = keyof typeof ROUTES
}
