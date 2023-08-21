import { lazy, Suspense } from 'react';

import LoadingScreen from 'components/LoadingScreen';
import DashboardLayout from './layouts/DashboardLayout';

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
}; // dashboards

const Error = Loadable(lazy(() => import('./pages/404')));

const routes = () => {
  return [
    ...authRoutes,
    {
      path: 'dashboard',
      element: <DashboardLayout />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ];
};

const authRoutes = [];

export default routes;
