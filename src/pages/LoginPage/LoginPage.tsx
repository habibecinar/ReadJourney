import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { login } from '../../features/auth/authSlice';
import { loginSchema } from '../../utils/validation';
import { LoginCredentials } from '../../types/auth.types';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginCredentials) => {
    try {
      await dispatch(login(data)).unwrap();
      toast.success('Login successful!');
      navigate('/recommended');
    } catch (error) {
      toast.error(error as string);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.formSection}>
            <h1 className={styles.title}>
              Expand your mind, reading <span className={styles.highlight}>a book</span>
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Email"
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                />
                {errors.email && <p className={styles.errorText}>{errors.email.message}</p>}
              </div>

              <div className={styles.formGroup}>
                <input
                  {...register('password')}
                  type="password"
                  placeholder="Password"
                  className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
                />
                {errors.password && <p className={styles.errorText}>{errors.password.message}</p>}
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Log In'}
              </button>
            </form>

            <p className={styles.switchText}>
              Don't have an account?{' '}
              <Link to="/register" className={styles.switchLink}>
                Registration
              </Link>
            </p>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.phonePreview}>
              <div className={styles.phoneFrame}>
                <span className={styles.phoneIcon}>📱</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
