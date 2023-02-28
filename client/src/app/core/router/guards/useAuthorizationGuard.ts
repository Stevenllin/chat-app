import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { ROUTES } from "../path";
import { RootState } from 'app/store/types';

const useAuthorizationGuard = () => {
  const routerHistory = useHistory();
  const authorizationState = useSelector((state: RootState) => state.features.auth.user.token);
  const isAccessible = !!authorizationState;
  console.log('useAuthorizationGuard')
  if (!isAccessible) routerHistory.replace(ROUTES.AUTH_LOGIN);
  return isAccessible;
}

export default useAuthorizationGuard;
