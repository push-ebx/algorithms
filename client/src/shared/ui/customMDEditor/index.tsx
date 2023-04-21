import { CSSProperties } from 'react';
import style from './style.module.scss'
import MDEditor from '@uiw/react-md-editor'; 
import { useSelector } from 'react-redux';

type Props = {
  className?: string,
  style?: CSSProperties,
  value?: string,
  setValue? : (value?: string) => void
}

const CustomMDEditor = (props: Props) => {
  // fix
  // @ts-ignore
  const theme = useSelector(state => state.theme)
  
  return (
    <MDEditor
      className={`${style['md-editor']} ${props.className}`}
      value={props.value}
      visibleDragbar={false}
      onChange={props.setValue}
      data-color-mode={theme}
      preview='edit'
      style={props.style}
    />
  );
};

export default CustomMDEditor;