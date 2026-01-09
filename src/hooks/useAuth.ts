import { useAppSelector } from '@store/hooks';

const useAuth = () => {
  const { user, isAuthenticated, isLoading } = useAppSelector(state => state.auth);

  return {
    user,
    isAuthenticated,
    isLoading,
  };
};

export default useAuth;
