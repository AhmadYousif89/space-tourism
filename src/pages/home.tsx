import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed inset-0 bg-cover -z-10 bg-[url(/public/assets/home/background-home-mobile.jpg)] md:bg-[url(/public/assets/home/background-home-tablet.jpg)] ws:bg-[url(/public/assets/home/background-home-desktop.jpg)]" />

      <section className="pt-40 flex flex-col items-center gap-[3.2rem] md:pt-80 ws:pt-[37.7rem] ws:flex-row ws:justify-center ws:gap-[38rem]">
        <div className="w-[32.7rem] text-center md:w-[45rem] space-y-[1.6rem] ws:text-left">
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
          className="relative explore-btn mt-24 md:mt-44 ws:mt-48">
          <span>explore</span>
        </button>
      </section>
    </>
  );
};
