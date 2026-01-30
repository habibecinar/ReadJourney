import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { register as registerAction } from '../../features/auth/authSlice';
import { registerSchema } from '../../utils/validation';
import { RegisterCredentials } from '../../types/auth.types';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterCredentials) => {
    try {
      await dispatch(registerAction(data)).unwrap();
      toast.success('Registration successful!');
      navigate('/recommended');
    } catch (error) {
      toast.error(error as string);
    }
  };

  return (
    <div className={styles.registerPage}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.formSection}>
            <h1 className={styles.title}>
              Expand your mind, reading <span className={styles.highlight}>a book</span>
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="Name"
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                />
                {errors.name && <p className={styles.errorText}>{errors.name.message}</p>}
              </div>

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
                {isLoading ? 'Loading...' : 'Registration'}
              </button>
            </form>

            <p className={styles.switchText}>
              Already have an account?{' '}
              <Link to="/login" className={styles.switchLink}>
                Log In
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

export default RegisterPage;
