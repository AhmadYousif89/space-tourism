import { FC, Dispatch, SetStateAction, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/icons/logo.svg';
import close_icon from '../assets/icons/icon-close.svg';
import open_icon from '../assets/icons/icon-hamburger.svg';

type NavigationProps = {
  toggleMenu: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
};

export const Header: FC<PropsWithChildren<NavigationProps>> = ({
  children,
  toggleMenu,
  setToggleMenu,
}) => {
  return (
    <header className="absolute z-50 pt-[2.4rem] px-[2.4rem] w-full flex items-center justify-between md:p-0 md:pl-[3.9rem] ws:pt-16 ws:pl-[5.5rem]">
      <Link to={{ pathname: '/' }}>
        <img className="w-[4rem] h-[4rem]" src={logo} alt="space star logo" />
      </Link>

      <button
        aria-expanded={toggleMenu}
        className="peer z-50 md:hidden"
        aria-controls={'navigation-menu'}
        onClick={e => {
          e.stopPropagation();
          setToggleMenu(pv => !pv);
        }}>
        {!toggleMenu && <img src={open_icon} alt="menu icon" />}
        {toggleMenu && <img src={close_icon} alt="menu icon" />}
      </button>

      {children}
    </header>
  );
};
