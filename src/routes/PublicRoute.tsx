import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@store/hooks';
import { ROUTES } from '@utils/constants';

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuthenticated } = useAppSelector(state => state.auth);

  if (isAuthenticated) {
    return <Navigate to={ROUTES.RECOMMENDED} replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
