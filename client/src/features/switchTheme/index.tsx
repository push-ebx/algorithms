import { useEffect } from 'react';
import style from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { set } from 'entities/theme/themeSlice';
import { IconButton } from 'shared/ui/iconButton';
import IconSun from './sun.svg'
import IconMoon from './moon.svg'

const SwitchTheme = () => {
  // fix
  // @ts-ignore
  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(set(next))
  }

  return (
    <IconButton
      src={theme === 'dark' ? IconSun : IconMoon}
      onClick={handleChange}
    />
  );
}

export default SwitchTheme;