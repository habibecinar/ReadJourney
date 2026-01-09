import { User } from '@/types/auth.types';

interface UserBarProps {
  user: User | null;
}

const UserBar = ({ user }: UserBarProps) => {
  if (!user) return null;

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '10px',
      padding: '6px 12px',
      backgroundColor: 'var(--color-secondary)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--color-border)'
    }}>
      <div style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--font-size-base)',
        color: 'var(--color-white)'
      }}>
        {user.name.charAt(0).toUpperCase()}
      </div>
      <span style={{
        fontSize: 'var(--font-size-base)',
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--color-text-primary)',
        display: 'none'
      }} className="user-name-desktop">
        {user.name}
      </span>
    </div>
  );
};

export default UserBar;
