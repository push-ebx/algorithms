import { CSSProperties } from 'react';
import style from './style.module.scss'
 
type Props = {
  placeholder?: string,
  className?: string,
  style?: CSSProperties
}

export const Input = (props: Props) => {
  return (
    <input
      placeholder={props.placeholder}
      className={`${style.input} ${props.className}`} 
      style={style}
      type="text" 
    />
  );
};