import style from './style.module.scss'
 
type Props = {
  onClick?: () => void
  children?: string,
  className?: string,
}

export const Button = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${style.button} ${props.className}`}
    >
      {props.children}
    </div>
  );
};