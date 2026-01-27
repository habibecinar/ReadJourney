import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { logout } from '@store/slices/authSlice';
import { ROUTES } from '@utils/constants';
import Icon from '@components/Icon/Icon';
import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = async () => {
    await dispatch(logout());
    closeMenu();
  };

  return (
    <>
      <button 
        className={styles.burgerBtn} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Icon name={isOpen ? 'close' : 'menu'} size={28} />
      </button>

      {isOpen && (
        <>
          <div className={styles.backdrop} onClick={closeMenu} />
          <div className={styles.menu}>
            <nav className={styles.nav}>
              <NavLink
                to={ROUTES.RECOMMENDED}
                className={({ isActive }) => 
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink
                to={ROUTES.LIBRARY}
                className={({ isActive }) => 
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
                onClick={closeMenu}
              >
                My Library
              </NavLink>
              <NavLink
                to={ROUTES.READING}
                className={({ isActive }) => 
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
                onClick={closeMenu}
              >
                Reading
              </NavLink>
            </nav>

            <div className={styles.userSection}>
              <div className={styles.userInfo}>
                <Icon name="user" size={24} />
                <span className={styles.userName}>{user?.name || 'User'}</span>
              </div>
              <button onClick={handleLogout} className={styles.logoutBtn}>
                Log out
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BurgerMenu;
