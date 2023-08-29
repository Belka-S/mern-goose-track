import { Outlet, Navigate } from 'react-router-dom';

import { useToken } from 'store/selectors';

import routes from 'components/routes.js';
export default function PrivateRoutes() {
  const token = useToken();
  return token ? <Outlet /> : <Navigate to={routes.mainPage} />;
}
