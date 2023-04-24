import style from './style.module.scss'
 
type Props = {
  src: string,
  alt?: string,
  onClick?: () => void,
  className?: string,
}

export const IconButton = (props: Props) => {
  return (
    <img 
      src={props.src}
      alt={props.alt}
      onClick={props.onClick}
      className={`${style.button} ${props.className}`}
    />
  );
};