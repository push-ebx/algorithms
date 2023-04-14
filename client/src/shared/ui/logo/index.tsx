import { ReactNode } from "react";
import style from './style.module.scss'
 
type Props = {
  children: ReactNode,
  className?: string
}

export const Logo = ({children, className}: Props) => {
  return (
    <span className={`${style.logo} ${className}`}>{children}</span>
  );
};