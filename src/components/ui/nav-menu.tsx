import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { paths } from '../../App';

type SideMenuProps = {
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
};

export const NavMenu: FC<SideMenuProps> = ({ setToggleMenu }) => {
  const sideMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sideMenu = sideMenuRef.current;
    const listener = (e: Event) => {
      if (!sideMenu?.contains(e.target as Node)) setToggleMenu(false);
    };
    addEventListener('click', listener);
    return () => removeEventListener('click', listener);
  }, []);

  const link = 'nav-link link-animated pb-2 text-white flex items-center gap-4';
  const styleNavLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${link} after:scale-100 after:bg-white` : `${link}`;

  return (
    <nav
      ref={sideMenuRef}
      id="navigation-menu"
      className={`peer-aria-expanded:translate-x-0 translate-x-full md:hidden fixed h-screen w-[25.4rem] right-0 top-0 z-20 bg-gradient-to-b from-dark_blue/10 via-light_blue/5 to-white/10 backdrop-blur-2xl transition-all duration-[var(--duration)] origin-right`}>
      <ul className="absolute top-[min(20vh,11.8rem)] left-[3.2rem] flex flex-col gap-10">
        {paths.map((path, idx) => (
          <li key={path}>
            <NavLink to={{ pathname: path }} className={styleNavLink}>
              <span aria-hidden={'true'} className="font-bold">{`0${idx}`}</span>
              <span>{path}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
