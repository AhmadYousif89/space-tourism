import { useEffect, useState } from 'react';
import data from '../../data.json';
import { Article } from '../components/layout/article';

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
      <div className="fixed inset-0 -z-10 bg-repeat-x bg-[url(/public/assets/crew/background-crew-mobile.jpg)] md:bg-[url(/public/assets/crew/background-crew-tablet.jpg)] ws:bg-[url(/public/assets/crew/background-crew-desktop.jpg)]">
        <div
          aria-labelledby="backdrop overlay"
          className="fixed inset-0 bg-dark_blue bg-opacity-50"
        />
      </div>

      <section className="h-[100svh] pt-40 [&>*]:w-[32.7rem] flex flex-col items-center gap-[3.2rem]">
        <h5 className="h5 w-full text-center space-x-6">
          <span className="font-bold opacity-25">02</span>
          <span>meet your crew</span>
        </h5>

        {[data.crew[crewNumber]].map(crew => (
          <figure
            key={crew.name}
            className="border-b border-white border-opacity-10 flex items-center justify-center">
            <img
              className="h-[22.2rem]"
              src={crew.images.webp}
              alt={`${crew.role} ${crew.name}`}
              srcSet={`${crew.images.webp}, ${crew.images.png}`}
            />
          </figure>
        ))}

        <Article>
          <div className="flex items-center justify-center gap-6">
            {data.crew.map((crew, idx) => (
              <button
                key={crew.name}
                aria-pressed={crewNumber === idx}
                title={`${crew.role} ${crew.name}`}
                onClick={() => setCrewNumber(idx)}
                className="w-4 h-4 bg-white opacity-20 rounded-full focus-visible:outline-none focus-visible:outline focus-visible:outline-white focus-visible:opacity-50 hover:opacity-50 aria-pressed:opacity-100"
              />
            ))}
          </div>

          {[data.crew[crewNumber]].map(crew => (
            <div key={crew.name}>
              <h4 className="h4 uppercase opacity-50">{crew.role}</h4>
              <h3 className="h3 uppercase">{crew.name}</h3>
              <p className="body-text">{crew.bio}</p>
            </div>
          ))}
        </Article>
      </section>
    </>
  );
};
