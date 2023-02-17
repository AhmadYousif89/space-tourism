import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-no-repeat bg-[url(/public/assets/home/background-home-mobile.jpg)] md:bg-[url(/public/assets/home/background-home-tablet.jpg)] ws:bg-[url(/public/assets/home/background-home-desktop.jpg)]" />

      <section className="pt-40 flex flex-col items-center justify-between gap-[3.2rem]">
        <div className="w-[32.7rem] space-y-[1.6rem]">
          <h5 className="h5 text-light_blue text-center">so, you want to travel to</h5>
          <h1 className="h1 text-center">space</h1>
          <p className="body-text text-center">
            Let's face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we'll give you a truly out of this world experience!
          </p>
        </div>

        <button
          onClick={() => navigate('/destination')}
          className="relative explore-btn mt-24">
          <span>explore</span>
        </button>
      </section>
    </>
  );
};
