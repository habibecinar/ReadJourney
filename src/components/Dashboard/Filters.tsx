import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { filterBooksSchema } from '@utils/validation';
import styles from './Dashboard.module.css';

interface FiltersProps {
  onFilter: (filters: { title?: string; author?: string }) => void;
}

const Filters = ({ onFilter }: FiltersProps) => {
  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(filterBooksSchema),
  });

  const onSubmit = (data: { title?: string; author?: string }) => {
    onFilter(data);
  };

  return (
    <div className={styles.filterSection}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.filters}>
          <input
            type="text"
            placeholder="Book title"
            className={styles.input}
            {...register('title')}
          />
          <input
            type="text"
            placeholder="The author"
            className={styles.input}
            {...register('author')}
          />
        </div>
        <button type="submit" className={styles.button}>
          To apply
        </button>
      </form>
    </div>
  );
};

export default Filters;
