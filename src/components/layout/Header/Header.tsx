import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { logout } from '../../../features/auth/authSlice';
import { toast } from 'react-toastify';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link to="/recommended" className={styles.logo}>
          <span className={styles.logoIcon}>📚</span>
          <span className={styles.logoText}>READ JOURNEY</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link
            to="/recommended"
            className={`${styles.navLink} ${location.pathname === '/recommended' ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link
            to="/library"
            className={`${styles.navLink} ${location.pathname === '/library' ? styles.active : ''}`}
          >
            My Library
          </Link>
          <Link
            to="/reading"
            className={`${styles.navLink} ${location.pathname.startsWith('/reading') ? styles.active : ''}`}
          >
            Reading
          </Link>
        </nav>

        <div className={styles.userSection}>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>
              <img src="/src/assets/icons/👍.png" alt="User" className={styles.avatarIcon} />
            </div>
            <span className={styles.userName}>{user?.name || 'User'}</span>
          </div>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Log out
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.burgerBtn}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuOverlay} onClick={closeMobileMenu}></div>
            <div className={styles.mobileMenuContent}>
              <button className={styles.closeBtn} onClick={closeMobileMenu}>
                ×
              </button>
              <nav className={styles.mobileNav}>
                <Link
                  to="/recommended"
                  className={`${styles.mobileNavLink} ${location.pathname === '/recommended' ? styles.active : ''}`}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  to="/library"
                  className={`${styles.mobileNavLink} ${location.pathname === '/library' ? styles.active : ''}`}
                  onClick={closeMobileMenu}
                >
                  My Library
                </Link>
                <Link
                  to="/reading"
                  className={`${styles.mobileNavLink} ${location.pathname.startsWith('/reading') ? styles.active : ''}`}
                  onClick={closeMobileMenu}
                >
                  Reading
                </Link>
              </nav>
              <div className={styles.mobileUserSection}>
                <div className={styles.userInfo}>
                  <div className={styles.userAvatar}>
                    <img src="/src/assets/icons/👍.png" alt="User" className={styles.avatarIcon} />
                  </div>
                  <span className={styles.userName}>{user?.name || 'User'}</span>
                </div>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                  Log out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
