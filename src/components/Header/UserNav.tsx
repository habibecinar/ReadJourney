import { NavLink } from 'react-router-dom';
import { ROUTES } from '@utils/constants';

interface UserNavProps {
  currentPath: string;
}

const UserNav = ({ currentPath }: UserNavProps) => {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: 'var(--spacing-md)', listStyle: 'none' }}>
        <li>
          <NavLink
            to={ROUTES.RECOMMENDED}
            className={currentPath === ROUTES.RECOMMENDED ? 'active' : ''}
          >
            Recommended
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.LIBRARY}
            className={currentPath === ROUTES.LIBRARY ? 'active' : ''}
          >
            My Library
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
