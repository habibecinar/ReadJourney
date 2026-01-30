import styles from './Icon.module.css';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon = ({ name, className = '', size = 24 }: IconProps) => {
  return (
    <svg className={`${styles.icon} ${className}`} width={size} height={size}>
      <use href={`/sprite.svg#icon-${name}`} />
    </svg>
  );
};

export default Icon;
