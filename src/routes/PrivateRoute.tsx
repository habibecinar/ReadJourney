import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@store/hooks';
import { ROUTES } from '@utils/constants';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAppSelector(state => state.auth);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
