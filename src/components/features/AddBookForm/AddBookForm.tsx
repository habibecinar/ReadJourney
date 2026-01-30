import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addBookSchema } from '../../../utils/validation';
import { AddBookData } from '../../../types/book.types';
import styles from './AddBookForm.module.css';

interface AddBookFormProps {
  onSubmit: (data: AddBookData) => void;
  isLoading?: boolean;
}

const AddBookForm = ({ onSubmit, isLoading = false }: AddBookFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddBookData>({
    resolver: yupResolver(addBookSchema),
  });

  const handleFormSubmit = (data: AddBookData) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className={styles.addBookForm}>
      <h2 className={styles.title}>Create your library:</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Book title:</label>
          <input
            {...register('title')}
            type="text"
            placeholder="I See You Are Interested In The Dark"
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
            placeholder="Erman Misirlisoy"
            className={`${styles.input} ${errors.author ? styles.inputError : ''}`}
          />
          {errors.author && (
            <p className={styles.errorText}>{errors.author.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Number of pages:</label>
          <input
            {...register('totalPages', { valueAsNumber: true })}
            type="number"
            placeholder="300"
            min="1"
            className={`${styles.input} ${errors.totalPages ? styles.inputError : ''}`}
          />
          {errors.totalPages && (
            <p className={styles.errorText}>{errors.totalPages.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Book cover URL (optional):</label>
          <input
            {...register('imageUrl')}
            type="url"
            placeholder="https://example.com/book-cover.jpg"
            className={`${styles.input} ${errors.imageUrl ? styles.inputError : ''}`}
          />
          {errors.imageUrl && (
            <p className={styles.errorText}>{errors.imageUrl.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add book'}
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
