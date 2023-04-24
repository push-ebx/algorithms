import style from './style.module.scss'
import { Input, Logo } from "shared/ui";
import SwitchTheme from '../../../features/switchTheme';
import { Link } from 'react-router-dom';
import { ReactComponent as CollapseButton} from './CollapseButton.svg'
import { ReactComponent as User } from './User.svg'
import { setShowOffCanvas } from 'shared/ui/customOffCanvas/customOffCanvasSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {
  const dispatch = useDispatch()
  // fix
  // @ts-ignore
  const theme = useSelector(state => state.theme)

  return (
    <header className={style.header}>
      <div 
        className={style.wrapper_collapse_btn}
        onClick={() => dispatch(setShowOffCanvas(true))}
      >
        <CollapseButton
          className={style.collapse_btn}
        />
      </div>
      <Link to="/"><Logo className={style.logo}>Algs</Logo></Link>
      <div className={style.search_theme_user}>
        <Input onChange={()=>{}} className={style.input} placeholder="Поиск..." />
        <SwitchTheme />
        <User stroke={theme === 'dark' ? 'white' : 'black'}/>
      </div>
    </header>
  );
};