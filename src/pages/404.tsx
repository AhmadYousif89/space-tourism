import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <section className="font-barlow h-screen flex flex-col items-center justify-center gap-8 text-center text-white bg-repeat-x bg-[url(assets/home/background-home-mobile.jpg)] md:bg-[url(assets/home/background-home-tablet.jpg)] ws:bg-[url(assets/home/background-home-desktop.jpg)]">
      <h1 className="text-9xl">404</h1>
      <h2 className="text-5xl capitalize tracking-widest">page not found</h2>
      <Link to={'/'} className="nav-link link-animated p-2 capitalize">
        take me home
      </Link>
    </section>
  );
};
