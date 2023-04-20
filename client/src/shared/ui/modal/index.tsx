import { CSSProperties } from 'react';
import style from './style.module.scss'

type Props = {
  className?: string,
  style?: CSSProperties
}

export const Loader = (props: Props) => {
  return (
    <div style={props.style} className={`${style.loader} ${props.className}`} >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};