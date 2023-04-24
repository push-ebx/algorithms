import style from './style.module.scss'
import { Input, IconButton, Logo } from "shared/ui";
import SwitchTheme from '../../../features/switchTheme';
import { Link } from 'react-router-dom';
import CollapseButton from './CollapseButton.svg'
import { setShowOffCanvas } from 'shared/ui/customOffCanvas/customOffCanvasSlice';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const dispatch = useDispatch()

  return (
    <header className={style.header}>
      <IconButton
        src={CollapseButton}
        className={style.collapse_btn}
        onClick={() => dispatch(setShowOffCanvas(true))}
      />
      <Link to="/"><Logo className={style.logo}>Algs</Logo></Link>
      <div className={style.search_theme_user}>
        <Input onChange={()=>{}} className={style.input} placeholder="Поиск..." />
        <SwitchTheme />
        <div style={{width: '30px', height: '30px', background: '#777', borderRadius: '50%'}} />
      </div>
    </header>
  );
};