import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { logout } from '@store/slices/authSlice';
import { ROUTES } from '@utils/constants';
import UserNav from './UserNav';
import UserBar from './UserBar';
import styles from './Header.module.css';

const Header = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { user } = useAppSelector(state => state.auth);

  const handleLogout = async () => {
    await dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link to={ROUTES.RECOMMENDED} className={styles.logo}>
            Read Journey
          </Link>

          <UserNav currentPath={location.pathname} />

          <div className={styles.userSection}>
            <UserBar user={user} />
            <button onClick={handleLogout} className={styles.logoutBtn}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
