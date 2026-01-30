import styles from './Loader.module.css';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  fullScreen?: boolean;
}

const Loader = ({ size = 'medium', fullScreen = false }: LoaderProps) => {
  const sizeClass = styles[size];

  if (fullScreen) {
    return (
      <div className={styles.fullScreenWrapper}>
        <div className={`${styles.loader} ${sizeClass}`}>
          <div className={styles.spinner}></div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.loader} ${sizeClass}`}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
};

export default Loader;
