import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavMenu } from './components/nav-menu';
import { Header } from './components/header';

export const Layout: FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <main className="relative min-h-[100svh] mx-auto w-[37.5rem] md:w-[76.8rem] ws:w-[144rem]">
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}>
        <NavMenu setToggleMenu={setToggleMenu} />
      </Header>
      <Outlet />
    </main>
  );
};
