import style from './style.module.scss'
 
type Props = {
  src: string,
  alt?: string,
  onClick?: () => void
}

export const IconButton = ({src, alt, onClick}: Props) => {
  return (
    <img 
      src={src}
      alt={alt}
      onClick={onClick}
      className={style.button}
    />
  );
};