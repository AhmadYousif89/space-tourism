import { useNavigate } from 'react-router-dom';

import bg_mob from '../assets/images/home/background-home-mobile.jpg';
import bg_tab from '../assets/images/home/background-home-tablet.jpg';
import bg_desk from '../assets/images/home/background-home-desktop.jpg';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <picture className="fixed inset-0 -z-10">
        <img
          className="w-full h-full"
          src={bg_mob}
          srcSet={`${bg_mob} 375w, ${bg_tab} 768w, ${bg_desk} 1440w`}
          sizes="(min-width: 30vw) 70vw, 100vw"
          alt="travel to space"
        />
      </picture>

      <section className="pt-40 flex flex-col items-center gap-[3.2rem] md:pt-80 ws:pt-[37.7rem] ws:flex-row ws:justify-center ws:gap-[38.6rem]">
        <div className="w-[32.7rem] text-center md:w-[45rem] space-y-[1.6rem] animate-slide-down ws:animate-slide-right ws:text-left">
          <h5 className="h5 text-light_blue">so, you want to travel to</h5>
          <h1 className="h1">space</h1>
          <p className="body-text md:px-4">
            Let's face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we'll give you a truly out of this world experience!
          </p>
        </div>

        <button
          onClick={() => navigate('/destination')}
          className="relative explore-btn mt-[5.9rem] md:mt-[10.6rem] ws:mt-[11.8rem]">
          <span>explore</span>
        </button>
      </section>
    </>
  );
};
