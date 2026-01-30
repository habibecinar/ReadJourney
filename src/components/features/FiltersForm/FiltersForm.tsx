import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { filterSchema } from '../../../utils/validation';
import styles from './FiltersForm.module.css';

interface FiltersFormData {
  title: string;
  author: string;
}

interface FiltersFormProps {
  onSubmit: (data: FiltersFormData) => void;
}

const FiltersForm = ({ onSubmit }: FiltersFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FiltersFormData>({
    resolver: yupResolver(filterSchema) as any,
    defaultValues: {
      title: '',
      author: '',
    },
  });

  const handleReset = () => {
    reset();
    onSubmit({ title: '', author: '' });
  };

  const handleFormSubmit: SubmitHandler<FiltersFormData> = (data) => {
    onSubmit(data);
  };

  return (
    <div className={styles.filtersForm}>
      <h2 className={styles.title}>Filters</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Book title:</label>
          <input
            {...register('title')}
            type="text"
            placeholder="Enter book title"
            className={`${styles.input} ${errors.title ? styles.inputError : ''}`}
          />
          {errors.title && (
            <p className={styles.errorText}>{errors.title.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Author:</label>
          <input
            {...register('author')}
            type="text"
            placeholder="Enter author name"
            className={`${styles.input} ${errors.author ? styles.inputError : ''}`}
          />
          {errors.author && (
            <p className={styles.errorText}>{errors.author.message}</p>
          )}
        </div>

        <div className={styles.buttons}>
          <button type="submit" className={styles.applyButton}>
            To apply
          </button>
          <button
            type="button"
            onClick={handleReset}
            className={styles.resetButton}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default FiltersForm;
