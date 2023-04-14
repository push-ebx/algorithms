import { ReactNode } from "react";
import style from './style.module.scss'
 
type Props = {
  children: ReactNode
}

export const Subtitle = ({children}: Props) => {
  return (
    <h1 className={style.subtitle}>{children}</h1>
  );
};