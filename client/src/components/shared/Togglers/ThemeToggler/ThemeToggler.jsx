import { ToggleThemeBtn, IconLight, IconDark } from './ThemeToggler.styled';
import { useThemeColors } from './ThemeContextProvider';

const ThemeToggler = () => {
  const changeTheme = useThemeColors().changeTheme;

  const handlerChangeTheme = () => {
    changeTheme();
  };
  const type = useThemeColors().type;
  return (
    <>
      <ToggleThemeBtn onClick={handlerChangeTheme}>
        {type === 'dark' ? <IconLight /> : <IconDark />}
      </ToggleThemeBtn>
    </>
  );
};

export default ThemeToggler;
