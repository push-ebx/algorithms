import style from './style.module.scss'
 
type Props = {
  onClick?: () => void
  children?: string
}

export const Button = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className={style.button}
    >
      {props.children}
    </div>
  );
};