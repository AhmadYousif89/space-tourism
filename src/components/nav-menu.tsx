import { FC, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { paths } from '../App';

type SideMenuProps = {
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
};

export const NavMenu: FC<SideMenuProps> = ({ setToggleMenu }) => {
  const sideMenuRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLSpanElement>(null);
  const [toggleHint, setToggleHint] = useState(false);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const sideMenu = sideMenuRef.current;
    const hint = hintRef.current;
    const listener = (e: Event) => {
      if (!sideMenu?.contains(e.target as Node)) setToggleMenu(false);
      if (!hint?.contains(e.target as Node)) {
        setToggleHint(false);
      } else {
        setToggleHint(pv => !pv);
      }
    };
    addEventListener('click', listener);
    return () => removeEventListener('click', listener);
  }, []);

  useEffect(() => {
    const navLinkLength = paths.length - 1;

    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'ArrowRight') {
        if (location.pathname === '/destination') {
          setPage(2);
          navigate(paths[2]);
        } else setPage(pv => (pv === navLinkLength ? 0 : pv + 1));
      }
      if (e.ctrlKey && e.key === 'ArrowLeft') {
        if (location.pathname === '/destination') {
          setPage(0);
          navigate(paths[0]);
        } else setPage(pv => (pv === 0 ? navLinkLength : pv - 1));
      }
    };
    addEventListener('keydown', handler);

    return () => removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    navigate(paths[page]);
  }, [page]);

  const link = 'nav-link link-animated pb-2 text-white flex items-center gap-4';
  const styleNavLink = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${link} after:scale-100 after:bg-white [&>span]:text-light_blue`
      : `${link}`;

  return (
    <nav
      ref={sideMenuRef}
      id="navigation-menu"
      className={`relative max-md:fixed peer-aria-expanded:translate-x-0 translate-x-full h-screen w-[25.4rem] right-0 top-0 z-20 bg-gradient-to-b from-dark_blue/10 via-light_blue/5 to-white/10 backdrop-blur-2xl transition-all duration-[var(--duration)] origin-right md:translate-x-0 md:w-[45rem] md:h-[9.6rem] md:flex md:items-center md:justify-center ws:w-[83rem]`}>
      <div className="hidden absolute top-1/2 -left-[45.1rem] -translate-y-1/2 w-[49.9rem] h-1 bg-white/20 rounded-full ws:block">
        <span
          title="hint"
          ref={hintRef}
          className="absolute -top-[6px] -left-6 w-6 h-6 bg-light_blue rounded-full hover:cursor-pointer animate-pulse hover:animate-none"
        />
        <div
          className={`absolute -top-7 left-8 text-white text-2xl font-barlow transition-all duration-[var(--duration)] ${
            toggleHint ? '-translate-y-4 opacity-100' : 'opacity-0'
          }`}>
          <p>
            Navigate between pages using
            <span className="ring-1 rounded ring-light_blue shadow shadow-light_blue px-2 mx-2">
              ⬅
            </span>
            and
            <span className="ring-1 rounded ring-light_blue shadow shadow-light_blue px-2 mx-2">
              ➡
            </span>
            +
            <span className="ring-1 rounded ring-light_blue shadow shadow-light_blue px-2 mx-2">
              ctrl
            </span>
          </p>
        </div>
        <div
          className={`absolute top-0 left-8 opacity-0 text-white text-2xl font-barlow transition-all duration-[var(--duration)] ${
            toggleHint ? 'translate-y-4 opacity-100' : ''
          }`}>
          <p>
            Switch between content using
            <span className="ring-1 rounded ring-light_blue shadow shadow-light_blue px-2 mx-2">
              ⬅
            </span>
            and
            <span className="ring-1 rounded ring-light_blue shadow shadow-light_blue px-2 mx-2">
              ➡
            </span>
          </p>
        </div>
      </div>

      <ul className="max-md:absolute top-[min(20vh,11.8rem)] left-[3.2rem] flex flex-col gap-10 md:flex-row ws:gap-20">
        {paths.map((path, idx) => (
          <li key={path} className="flex items-center">
            <NavLink to={{ pathname: path }} className={styleNavLink}>
              <span
                aria-hidden="true"
                className="font-bold md:max-ws:hidden">{`0${idx}`}</span>
              {path}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
