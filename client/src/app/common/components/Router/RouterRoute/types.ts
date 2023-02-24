import { RouteProps } from "react-router";

export interface RouterRouteProps extends RouteProps {
  activate?: (() => boolean)[]
}