import { User } from '@/types/auth.types';

interface UserBarProps {
  user: User | null;
}

const UserBar = ({ user }: UserBarProps) => {
  if (!user) return null;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
      }}>
        {user.name.charAt(0).toUpperCase()}
      </div>
      <span>{user.name}</span>
    </div>
  );
};

export default UserBar;
