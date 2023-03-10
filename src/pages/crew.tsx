import { useEffect, useState } from 'react';

import { data } from '../data';
import bg_mob from '../assets/images/crew/background-crew-mobile.jpg';
import bg_tab from '../assets/images/crew/background-crew-tablet.jpg';
import bg_desk from '../assets/images/crew/background-crew-desktop.jpg';

import { Article } from '../components/article';
import { Section } from '../components/section';

export const Crew = () => {
  const [crewNumber, setCrewNumber] = useState(0);

  useEffect(() => {
    const dataLength = data.crew.length - 1;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCrewNumber(pv => (pv === dataLength ? 0 : pv + 1));
      if (e.key === 'ArrowLeft') setCrewNumber(pv => (pv === 0 ? dataLength : pv - 1));
    };

    addEventListener('keydown', handler);

    return () => removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <picture className="fixed inset-0 -z-10">
        <div
          aria-labelledby="backdrop overlay"
          className="fixed inset-0 bg-dark_blue bg-opacity-50"
        />
        <img
          className="w-full h-full"
          src={bg_mob}
          srcSet={`${bg_mob} 375w, ${bg_tab} 768w, ${bg_desk} 1440w`}
          sizes="(min-width: 30vw) 70vw, 100vw"
          alt="space crew"
        />
      </picture>

      <Section header={['02', 'meet your crew']} className="">
        {[data.crew[crewNumber]].map(crew => (
          <figure
            key={crew.name}
            className="row-start-2 col-start-1 border-b border-white border-opacity-10 flex justify-center w-[32.7rem] md:w-full md:border-0 md:row-start-3 ws:row-start-2 ws:col-start-2">
            <img
              className="h-[22.3rem] md:h-[53.2rem]"
              alt={`${crew.role} ${crew.name}`}
              srcSet={`${crew.images.webp}, ${crew.images.png}`}
            />
          </figure>
        ))}

        <Article className="row-start-3 col-start-1 md:flex-col-reverse md:row-start-2 md:max-w-[55rem] ws:justify-around ws:items-start ws:text-left max-md:pb-10">
          <div className="flex items-center justify-center gap-6">
            {data.crew.map((crew, idx) => (
              <button
                key={crew.name}
                aria-pressed={crewNumber === idx}
                title={`${crew.role} ${crew.name}`}
                onClick={() => setCrewNumber(idx)}
                className="w-4 h-4 bg-white opacity-20 rounded-full focus:outline-none focus-visible:outline focus-visible:outline-white focus-visible:opacity-50 hover:opacity-50 aria-pressed:opacity-100"
              />
            ))}
          </div>

          {[data.crew[crewNumber]].map(crew => (
            <div key={crew.name} className="animate-slide-down ws:animate-slide-right">
              <h4 className="h4 uppercase opacity-50 md:text-3xl ws:mb-2">{crew.role}</h4>
              <h3 className="h3 uppercase mb-4">{crew.name}</h3>
              <p className="body-text">{crew.bio}</p>
            </div>
          ))}
        </Article>
      </Section>
    </>
  );
};
