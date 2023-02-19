import { FC, Dispatch, SetStateAction, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

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
    <header className="absolute z-50 pt-[2.4rem] px-[2.4rem] w-full flex items-center justify-between md:p-0 md:pl-[3.9rem] ws:pt-16">
      <Link to={{ pathname: '/' }}>
        <img
          className="w-[4rem] h-[4rem]"
          src="assets/icons/logo.svg"
          alt="space star logo"
        />
      </Link>

      <button
        className="peer z-50 md:hidden"
        aria-expanded={toggleMenu}
        aria-controls={'navigation-menu'}
        onClick={e => {
          e.stopPropagation();
          setToggleMenu(pv => !pv);
        }}>
        {!toggleMenu && <img src="assets/icons/icon-hamburger.svg" alt="menu icon" />}
        {toggleMenu && <img src="assets/icons/icon-close.svg" alt="menu icon" />}
      </button>

      {children}
    </header>
  );
};