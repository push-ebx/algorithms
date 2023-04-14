import { ReactNode } from "react";
import style from './style.module.scss'
 
type Props = {
  placeholder?: string
}

export const Input = (props: Props) => {
  return (
    <input
      placeholder={props.placeholder}
      className={style.input} 
      type="text" 
    />
  );
};