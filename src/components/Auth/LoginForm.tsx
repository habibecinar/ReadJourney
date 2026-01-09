import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '@utils/validation';
import { useAppDispatch } from '@store/hooks';
import { login as loginAction } from '@store/slices/authSlice';
import { LoginData } from '@/types/auth.types';
import { ROUTES } from '@utils/constants';
import { toast } from 'react-toastify';
import styles from './Auth.module.css';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    try {
      await dispatch(loginAction(data)).unwrap();
      toast.success('Login successful!');
      navigate(ROUTES.RECOMMENDED);
    } catch (error) {
      // Error is already handled by the toast in api interceptor
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <input
            type="email"
            placeholder="Email"
            className={`${styles.input} ${errors.email ? styles.error : ''}`}
            {...register('email')}
          />
        </div>
        <div className={styles.errorMessage}>
          {errors.email?.message || ' '}
        </div>
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <input
            type="password"
            placeholder="Password"
            className={`${styles.input} ${errors.password ? styles.error : ''}`}
            {...register('password')}
          />
        </div>
        <div className={styles.errorMessage}>
          {errors.password?.message || ' '}
        </div>
      </div>

      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
};

export default LoginForm;
