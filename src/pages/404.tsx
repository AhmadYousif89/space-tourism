import { Link } from 'react-router-dom';

import bg_mob from '../assets/images/home/background-home-mobile.jpg';
import bg_tab from '../assets/images/home/background-home-tablet.jpg';
import bg_desk from '../assets/images/home/background-home-desktop.jpg';

export const NotFound = () => {
  return (
    <>
      <picture className="fixed inset-0 -z-10">
        <img
          className="w-full h-full"
          src={bg_mob}
          srcSet={`${bg_mob} 375w, ${bg_tab} 768w, ${bg_desk} 1440w`}
          sizes="(min-width: 30vw) 70vw, 100vw"
          alt="space and beyand"
        />
      </picture>

      <section className="font-barlow h-screen flex flex-col items-center justify-center gap-8 text-center text-white">
        <h1 className="text-9xl">404</h1>
        <h2 className="text-5xl capitalize tracking-widest">page not found</h2>
        <Link to={'/'} className="nav-link link-animated p-2 capitalize">
          take me home
        </Link>
      </section>
    </>
  );
};
