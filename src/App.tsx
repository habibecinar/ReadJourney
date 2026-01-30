import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from './hooks/redux';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RecommendedPage from './pages/RecommendedPage/RecommendedPage';
import MyLibraryPage from './pages/MyLibraryPage/MyLibraryPage';
import ReadingPage from './pages/ReadingPage/ReadingPage';
import MainLayout from './components/layout/MainLayout/MainLayout';
import PrivateRoute from './components/common/PrivateRoute/PrivateRoute';
import PublicRoute from './components/common/PublicRoute/PublicRoute';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';

function App() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <>
          <Routes>
            {/* Public routes */}
            <Route
              path="/"
              element={
                <PublicRoute>
                  <WelcomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />

            {/* Private routes */}
            <Route
              element={
                <PrivateRoute>
                  <MainLayout />
                </PrivateRoute>
              }
            >
              <Route path="/recommended" element={<RecommendedPage />} />
              <Route path="/library" element={<MyLibraryPage />} />
              <Route path="/reading" element={<ReadingPage />} />
              <Route path="/reading/:bookId" element={<ReadingPage />} />
            </Route>

            {/* 404 Not Found route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
