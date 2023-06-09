import { ReactNode } from "react";
import style from './style.module.scss'
 
type Props = {
  children: ReactNode
}

export const Paragraph = ({children}: Props) => {
  return (
    <h1 className={style.paragraph}>{children}</h1>
  );
};