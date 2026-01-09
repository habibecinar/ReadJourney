import { Link } from 'react-router-dom';
import RegisterForm from '@components/Auth/RegisterForm';
import { ROUTES } from '@utils/constants';

const RegisterPage = () => {
  return (
    <div className="auth-page">
      <div className="container">
        <h1>Register</h1>
        <RegisterForm />
        <p>
          Already have an account?{' '}
          <Link to={ROUTES.LOGIN}>Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
