import spriteUrl from '@assets/icons/sprite.svg';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Icon = ({ name, size = 24, className = '', style }: IconProps) => {
  return (
    <svg width={size} height={size} className={className} fill="currentColor" style={style}>
      <use href={`${spriteUrl}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
