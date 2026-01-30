import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return !isAuthenticated ? <>{children}</> : <Navigate to="/recommended" replace />;
};

export default PublicRoute;
