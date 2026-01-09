import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from '@utils/validation';
import { useAppDispatch } from '@store/hooks';
import { register as registerAction } from '@store/slices/authSlice';
import { RegisterData } from '@/types/auth.types';
import { ROUTES } from '@utils/constants';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterData) => {
    try {
      await dispatch(registerAction(data)).unwrap();
      toast.success('Registration successful!');
      navigate(ROUTES.RECOMMENDED);
    } catch (error) {
      // Error is already handled by the toast in api interceptor
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" placeholder="Name" {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <input type="email" placeholder="Email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <input type="password" placeholder="Password" {...register('password')} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Registration</button>
    </form>
  );
};

export default RegisterForm;
