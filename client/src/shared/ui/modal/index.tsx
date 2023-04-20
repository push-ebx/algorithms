import { CSSProperties, ReactNode } from 'react';
import style from './style.module.scss'
import { Button } from '../Button';
import CrossIcon from "./x.svg"
import { useSelector } from 'react-redux';

type Props = {
  className?: string,
  style?: CSSProperties,
  children: ReactNode,
  active: boolean,
  handleClickOk: () => void,
  handleClickClose: () => void,
  title?: string
}

export const Modal = (props: Props) => {
  // @ts-ignore
  const theme = useSelector(state => state.theme)

  return (
    <div 
      style={props.style} 
      className={`${style.modal} ${props.className} ${props.active ? style.active : ''}`}
      onClick={() => props.handleClickClose()}
    >
      <div
        className={style.content}
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <span className={style.title}>{props.title}</span>
          <img
            src={CrossIcon}
            className={style.cross}
            style={{filter: `invert(${theme === 'dark' ? 1 : 0})`}}
            onClick={() => props.handleClickClose()}
          />
        </header>
        <div>
          {props.children}
        </div>
        <nav>
          <Button onClick={() => props.handleClickOk()}>Ок</Button>
        </nav>
      </div>
    </div>
  );
};