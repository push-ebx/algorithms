import { ReactNode } from "react";
import style from './style.module.scss'
 
type Props = {
  children: ReactNode
}

export const Title = ({children}: Props) => {
  return (
    <div className={style.title}>{children}</div>
  );
};