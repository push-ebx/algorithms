import style from './style.module.scss'
import { Logo } from "shared/ui/logo";
import { Input } from "shared/ui/input";
import SwitchTheme from 'features/ui/switchTheme';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.collapse_btn}>|||</div>
      <Logo className={style.logo}>Algs</Logo>
      <div className={style.search_theme_user}>
        <Input className={style.input} placeholder="Поиск..." />
        <SwitchTheme />
        <div style={{width: '30px', height: '30px', background: '#777', borderRadius: '50%'}} />
      </div>
    </header>
  );
};