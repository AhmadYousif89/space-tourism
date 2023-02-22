import { useEffect, useState } from 'react';

import { data } from '../data';
import bg_mob from '../assets/images/technology/background-technology-mobile.jpg';
import bg_tab from '../assets/images/technology/background-technology-tablet.jpg';
import bg_desk from '../assets/images/technology/background-technology-desktop.jpg';

import { Article } from '../components/article';
import { Section } from '../components/section';

export const Technology = () => {
  const [techNumber, setTechNumber] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const dataLength = data.technology.length - 1;
      if (e.key === 'ArrowRight') {
        setTechNumber(pv => (pv === dataLength ? 0 : pv + 1));
      }
      if (e.key === 'ArrowLeft') {
        setTechNumber(pv => (pv === 0 ? dataLength : pv - 1));
      }
    };

    addEventListener('keydown', handler);

    return () => removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <picture className="fixed inset-0 -z-10">
        <div
          aria-labelledby="backdrop overlay"
          className="fixed inset-0 bg-dark_blue bg-opacity-25"
        />
        <img
          className="w-full h-full"
          src={bg_mob}
          srcSet={`${bg_mob} 375w, ${bg_tab} 768w, ${bg_desk} 1440w`}
          sizes="(min-width: 30vw) 70vw, 100vw"
          alt="space technologies"
        />
      </picture>

      <Section
        header={['03', 'space launch 101']}
        className="ws:gap-y-4 ws:w-[128rem] ws:gap-x-4 ws:ml-auto ws:mx-0 ws:justify-items-stretch">
        {[data.technology[techNumber]].map(tech => (
          <figure
            key={tech.name}
            className="row-start-2 col-start-1 flex ws:col-start-2 ws:justify-end">
            <img className="ws:hidden" src={tech.images.landscape} alt={`${tech.name}`} />
            <img
              className="hidden h-fit ws:block"
              src={tech.images.portrait}
              alt={`${tech.name}`}
            />
          </figure>
        ))}

        <Article className="md:pb-20 ws:flex-row ws:items-center ws:text-left ws:gap-32">
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
            <div
              key={tech.name}
              className="flex flex-col md:w-[57rem] mx-auto animate-slide-down ws:animate-slide-right">
              <h4 className="subHeading-2 uppercase text-light_blue ws:mb-4">
                the terminology ...
              </h4>
              <h3 className="h3 uppercase mb-4">{tech.name}</h3>
              <p className="body-text">{tech.description}</p>
            </div>
          ))}
        </Article>
      </Section>
    </>
  );
};
