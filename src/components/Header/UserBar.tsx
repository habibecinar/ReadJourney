import { User } from '@/types/auth.types';
import styles from './UserBar.module.css';

interface UserBarProps {
  user: User | null;
}

const UserBar = ({ user }: UserBarProps) => {
  if (!user) return null;

  return (
    <div className={styles.userBar}>
      <div className={styles.avatar}>
        {user.name.charAt(0).toUpperCase()}
      </div>
      <span className={styles.userName}>
        {user.name}
      </span>
    </div>
  );
};

export default UserBar;
