import { ReactNode } from "react";
import style from './style.module.scss'
 
type Props = {
  children: ReactNode,
  className?: string,
}

export const Title = (props: Props) => {
  return (
    <div className={`${style.title} ${props.className}`}>
      {props.children}
    </div>
  );
};