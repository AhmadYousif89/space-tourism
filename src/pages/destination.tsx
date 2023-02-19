import { useEffect, useState } from 'react';
import data from '../../data.json';
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
      <div className="fixed inset-0 -z-10 bg-repeat-x bg-[url(/public/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/public/assets/destination/background-destination-tablet.jpg)] ws:bg-[url(/public/assets/destination/background-destination-desktop.jpg)]">
        <div
          aria-labelledby="backdrop overlay"
          className="fixed inset-0 bg-dark_blue bg-opacity-25"
        />
      </div>

      <Section header={['01', 'pick your destination']}>
        {[data.destinations[destinyNumber]].map(destiny => (
          <figure key={destiny.name} className="row-start-2 col-start-1">
            <img
              src={destiny.images.webp}
              alt={`destination ${destiny.name}`}
              className="h-[17rem] mx-auto md:h-[30rem] ws:h-[44.5rem]"
              srcSet={`${destiny.images.webp}, ${destiny.images.png}`}
            />
          </figure>
        ))}

        <Article className="md:pb-20 ws:items-start ws:w-[44.5rem]">
          <div className="flex items-center justify-center gap-8">
            {data.destinations.map((destiny, idx) => (
              <button
                key={destiny.name}
                aria-pressed={destinyNumber === idx}
                title={`travel to ${destiny.name}`}
                onClick={() => setDestinyNumber(idx)}
                className="nav-link link-animated text-light_blue focus-visible:outline-none focus-visible:outline focus-visible:outline-white focus-visible:opacity-50 aria-pressed:text-white aria-pressed:after:scale-100 aria-pressed:after:bg-white">
                {destiny.name}
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
