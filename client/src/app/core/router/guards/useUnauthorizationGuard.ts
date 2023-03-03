import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { ROUTES } from "../path";
import { RootState } from "app/store/types";

const useUnauthorizationGuard = () => {
  const routerHistory = useHistory();
  const authorizationState = useSelector((state: RootState) => state.features.auth.user.token);
  const isAccessible = !authorizationState;
  if (!isAccessible) routerHistory.replace(ROUTES.FEATURES)
  return isAccessible
}

export default useUnauthorizationGuard;