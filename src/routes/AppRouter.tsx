import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from '@utils/constants';
import WelcomePage from '@pages/WelcomePage/WelcomePage';
import RegisterPage from '@pages/RegisterPage/RegisterPage';
import LoginPage from '@pages/LoginPage/LoginPage';
import RecommendedPage from '@pages/RecommendedPage/RecommendedPage';
import LibraryPage from '@pages/LibraryPage/LibraryPage';
import ReadingPage from '@pages/ReadingPage/ReadingPage';
import MainLayout from '@/layouts/MainLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<PublicRoute><WelcomePage /></PublicRoute>} />
      <Route path={ROUTES.REGISTER} element={<PublicRoute><RegisterPage /></PublicRoute>} />
      <Route path={ROUTES.LOGIN} element={<PublicRoute><LoginPage /></PublicRoute>} />
      
      <Route element={<PrivateRoute><MainLayout /></PrivateRoute>}>
        <Route path={ROUTES.RECOMMENDED} element={<RecommendedPage />} />
        <Route path={ROUTES.LIBRARY} element={<LibraryPage />} />
        <Route path={ROUTES.READING} element={<ReadingPage />} />
      </Route>

      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
};

export default AppRouter;
