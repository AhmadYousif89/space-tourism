import { useEffect, useState } from 'react';
import data from '../../data.json';
import { Article } from '../components/article';
import { Section } from '../components/section';

export const Technology = () => {
  const [techNumber, setTechNumber] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const dataLength = data.technology.length - 1;
      if (e.key === 'ArrowRight') setTechNumber(pv => (pv === dataLength ? 0 : pv + 1));
      if (e.key === 'ArrowLeft') setTechNumber(pv => (pv === 0 ? dataLength : pv - 1));
    };

    addEventListener('keydown', handler);

    return () => removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-repeat-x bg-[url(/public/assets/technology/background-technology-mobile.jpg)] md:bg-[url(/public/assets/technology/background-technology-tablet.jpg)] ws:bg-[url(/public/assets/technology/background-technology-desktop.jpg)]">
        <div
          aria-labelledby="backdrop overlay"
          className="fixed inset-0 bg-dark_blue bg-opacity-25"
        />
      </div>

      <Section
        header={['03', 'space launch 101']}
        className="ws:gap-y-4 ws:w-[128rem] ws:ml-auto ws:mx-0 ws:justify-items-stretch">
        {[data.technology[techNumber]].map(tech => (
          <figure
            key={tech.name}
            className="row-start-2 col-start-1 flex ws:col-start-2 ws:justify-end">
            <img className="ws:hidden" src={tech.images.landscape} alt={`${tech.name}`} />
            <img
              className="hidden ws:block h-fit"
              src={tech.images.portrait}
              alt={`${tech.name}`}
            />
          </figure>
        ))}

        <Article className="md:gap-[6rem] md:pb-20 ws:flex-row ws:items-center ws:text-left">
          <div className="flex items-center justify-center gap-6 md:gap-12 ws:flex-col">
            {data.technology.map((tech, idx) => (
              <button
                key={tech.name}
                aria-pressed={techNumber === idx}
                title={tech.name}
                onClick={() => setTechNumber(idx)}
                className="w-16 h-16 md:w-24 md:h-24 ws:w-32 ws:h-32 rounded-full font-bellefair text-[1.6rem] md:text-[2rem] ws:text-[3.2rem] text-center text-white outline outline-2 outline-white/25 bg-dark_blue hover:outline-white/50 focus:outline-none focus-visible:outline-white aria-pressed:bg-white aria-pressed:text-dark_blue aria-pressed:outline-none">
                {idx + 1}
              </button>
            ))}
          </div>

          {[data.technology[techNumber]].map(tech => (
            <div key={tech.name} className="flex flex-col gap-4 md:max-w-[57rem] mx-auto">
              <h4 className="h4 uppercase font-barlow_condensed tracking-widest text-light_blue ws:text-2xl">
                the terminology ...
              </h4>
              <h3 className="h3 uppercase">{tech.name}</h3>
              <p className="body-text">{tech.description}</p>
            </div>
          ))}
        </Article>
      </Section>
    </>
  );
};
