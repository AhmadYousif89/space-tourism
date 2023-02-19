import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavMenu } from './components/nav-menu';
import { Header } from './components/header';

export const Layout: FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <main className="relative min-h-[100svh]">
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}>
        <NavMenu setToggleMenu={setToggleMenu} />
      </Header>
      <Outlet />
    </main>
  );
};
