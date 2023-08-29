import { Outlet, Navigate } from 'react-router-dom';
import getCurrentDate from 'utils/currentDate';

import { useToken } from 'store/selectors';
import routes from 'components/routes.js';

export default function PubliceRoutes() {
  const token = useToken();
  return token ? <Navigate to={`${routes.navFromLogIn}/${getCurrentDate()}`} /> : <Outlet />;
}
