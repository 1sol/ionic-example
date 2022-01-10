import { RouteProps, Redirect } from "react-router-dom";
import {
  authRouteConfigs,
  encyclopediaRouteConfigs,
  hospitalRouteConfigs,
  mainRouteConfigs,
  mypageRouteConfigs,
  skinAnalysisRouteConfigs,
  skinChangeRouteConfigs,
  skinRecordRouteConfigs,
  videoRouteConfigs,
} from "@configs";

export const REDIRECT_PATH: string = "/";

const routeConfigs: RouteProps[] | any = [
  ...authRouteConfigs,
  ...encyclopediaRouteConfigs,
  ...hospitalRouteConfigs,
  ...mainRouteConfigs,
  ...mypageRouteConfigs,
  ...skinAnalysisRouteConfigs,
  ...skinChangeRouteConfigs,
  ...skinRecordRouteConfigs,
  ...videoRouteConfigs,

  {
    exact: true,
    path: "/",
    component: () => <Redirect to={REDIRECT_PATH} />,
  },
];

export default routeConfigs;
