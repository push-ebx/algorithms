import { ReactNode } from "react";
import style from './style.module.scss'
 
type Props = {
  children: ReactNode,
  className?: string,
}

export const Subtitle = (props: Props) => {
  return (
    <h2 className={`${style.subtitle} ${props.className}`}>
      {props.children}
    </h2>
  );
};