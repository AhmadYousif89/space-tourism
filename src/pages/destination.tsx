import { useEffect, useState } from 'react';

import { data } from '../data';
import bg_mob from '../assets/images/destination/background-destination-mobile.jpg';
import bg_tab from '../assets/images/destination/background-destination-tablet.jpg';
import bg_desk from '../assets/images/destination/background-destination-desktop.jpg';

import { Article } from '../components/article';
import { Section } from '../components/section';

export const Destination = () => {
  const [destinyNumber, setDestinyNumber] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const dataLength = data.destinations.length - 1;
      if (e.key === 'ArrowRight') {
        setDestinyNumber(pv => (pv === dataLength ? 0 : pv + 1));
      }
      if (e.key === 'ArrowLeft') {
        setDestinyNumber(pv => (pv === 0 ? dataLength : pv - 1));
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
          alt="tour destinations"
        />
      </picture>

      <Section header={['01', 'pick your destination']}>
        {[data.destinations[destinyNumber]].map(destiny => (
          <figure key={destiny.name} className="row-start-2 col-start-1">
            <img
              alt={`destination ${destiny.name}`}
              className="h-[17rem] mx-auto md:h-[30rem] ws:h-[44.5rem]"
              srcSet={`${destiny.images.webp}, ${destiny.images.png}`}
            />
          </figure>
        ))}

        <Article className="pb-20 ws:items-start">
          <div className="flex items-center justify-center gap-6">
            {data.destinations.map((destiny, idx) => (
              <button
                key={destiny.name}
                aria-pressed={destinyNumber === idx}
                title={`travel to ${destiny.name}`}
                onClick={() => setDestinyNumber(idx)}
                className="nav-link link-animated px-2 text-light_blue focus:outline-none focus-visible:bg-light_blue/10 focus-visible:outline-1 focus-visible:outline-white/50 rounded-[1px] aria-pressed:text-white aria-pressed:after:scale-100 aria-pressed:after:bg-white">
                <span>{destiny.name}</span>
              </button>
            ))}
          </div>

          {[data.destinations[destinyNumber]].map(destiny => (
            <div
              key={destiny.name}
              className="border-b-2 border-white border-opacity-10 pb-12 mx-auto md:w-[45rem] ws:text-left">
              <h2 className="h2 uppercase">{destiny.name}</h2>
              <p className="body-text">{destiny.description}</p>
            </div>
          ))}

          {[data.destinations[destinyNumber]].map(destiny => (
            <div
              key={destiny.name}
              className="flex flex-col gap-y-10 gap-x-32 justify-center items-center uppercase md:flex-row ws:text-left">
              <pre className="space-y-4">
                <p className="subHeading-2 text-light_blue">avg.distance</p>
                <p className="subHeading-1">{destiny.distance}</p>
              </pre>
              <pre className="space-y-4">
                <p className="subHeading-2 text-light_blue">est.travel time</p>
                <p className="subHeading-1">{destiny.travel}</p>
              </pre>
            </div>
          ))}
        </Article>
      </Section>
    </>
  );
};
