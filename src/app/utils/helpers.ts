import { IRoutes } from "global"

export function getDynamicRoutes<T>(type: IRoutes, ...args: T[]) {
  const params = ""
  args.map((arg) => params.concat(`/${arg}`))
  return {
    arg_length: arguments.length,
    rest: args,
  }
}
