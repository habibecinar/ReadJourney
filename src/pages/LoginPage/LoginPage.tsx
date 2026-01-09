import { Link } from 'react-router-dom';
import LoginForm from '@components/Auth/LoginForm';
import { ROUTES } from '@utils/constants';

const LoginPage = () => {
  return (
    <div className="auth-page">
      <div className="container">
        <h1>Log In</h1>
        <LoginForm />
        <p>
          Don't have an account?{' '}
          <Link to={ROUTES.REGISTER}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
