import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '@utils/validation';
import { useAppDispatch } from '@store/hooks';
import { login as loginAction } from '@store/slices/authSlice';
import { LoginData } from '@/types/auth.types';
import { ROUTES } from '@utils/constants';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="email" placeholder="Email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <input type="password" placeholder="Password" {...register('password')} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
