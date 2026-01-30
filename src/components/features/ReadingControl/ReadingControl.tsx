import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { readingPageSchema } from '../../../utils/validation';
import styles from './ReadingControl.module.css';

interface ReadingControlData {
  page: number;
}

interface ReadingControlProps {
  isReading: boolean;
  maxPages: number;
  onStart: (page: number) => void;
  onStop: (page: number) => void;
  isLoading?: boolean;
}

const ReadingControl = ({
  isReading,
  maxPages,
  onStart,
  onStop,
  isLoading = false,
}: ReadingControlProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReadingControlData>({
    resolver: yupResolver(readingPageSchema),
  });

  const handleFormSubmit = (data: ReadingControlData) => {
    if (data.page > maxPages) {
      return;
    }

    if (isReading) {
      onStop(data.page);
    } else {
      onStart(data.page);
    }
    reset();
  };

  return (
    <div className={styles.readingControl}>
      <h2 className={styles.title}>
        {isReading ? 'Stop page:' : 'Start page:'}
      </h2>
      <p className={styles.description}>
        {isReading
          ? `Here you will select the page where you stopped reading the book. Maximum ${maxPages} pages.`
          : `Here you will select the page from which you want to start reading the book. Maximum ${maxPages} pages.`}
      </p>

      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Page number:</label>
          <input
            {...register('page', { valueAsNumber: true })}
            type="number"
            placeholder="0"
            min="1"
            max={maxPages}
            className={`${styles.input} ${errors.page ? styles.inputError : ''}`}
          />
          {errors.page && (
            <p className={styles.errorText}>{errors.page.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          <span className={styles.buttonIcon}>⭐</span>
          {isLoading ? 'Loading...' : isReading ? 'To stop' : 'To start'}
        </button>
      </form>
    </div>
  );
};

export default ReadingControl;
