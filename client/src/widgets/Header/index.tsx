import style from './style.module.scss'
import { Logo } from "shared/ui/logo";
import { Input } from "shared/ui/input";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.collapse_btn}>|||</div>
      <Logo className={style.logo}>Algs</Logo>
      <div className={style.search_theme_user}>
        <Input placeholder="Поиск..." />
        <div>s</div>
        <div>u</div>
      </div>
    </header>
  );
};