import { useEffect, useState } from 'react';
import data from '../../data.json';
import { Article } from '../components/layout/article';
import { Section } from '../components/layout/section';

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
      <div className="fixed inset-0 -z-10 bg-repeat-x bg-[url(src/assets/destination/background-destination-mobile.jpg)] md:bg-[url(src/assets/destination/background-destination-tablet.jpg)] ws:bg-[url(src/assets/destination/background-destination-desktop.jpg)]">
        <div
          aria-labelledby="backdrop overlay"
          className="fixed inset-0 bg-dark_blue bg-opacity-25"
        />
      </div>

      <Section>
        <h5 className="h5 w-full text-center space-x-6">
          <span className="font-bold opacity-25">01</span>
          <span>pick your destination</span>
        </h5>

        {[data.destinations[destinyNumber]].map(destiny => (
          <figure key={destiny.name}>
            <img
              className="h-[17rem]"
              src={destiny.images.webp}
              alt={`destination ${destiny.name}`}
              srcSet={`${destiny.images.webp}, ${destiny.images.png}`}
            />
          </figure>
        ))}

        <Article className="pb-0">
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
              className="border-b-2 border-white border-opacity-10 pb-12">
              <h2 className="h2 uppercase">{destiny.name}</h2>
              <p className="body-text">{destiny.description}</p>
            </div>
          ))}
        </Article>

        {[data.destinations[destinyNumber]].map(destiny => (
          <Article key={destiny.name} className="uppercase">
            <pre>
              <p className="subHeading-2 text-light_blue">avg.distance</p>
              <p className="subHeading-1">{destiny.distance}</p>
            </pre>
            <pre>
              <p className="subHeading-2 text-light_blue">est.travel time</p>
              <p className="subHeading-1">{destiny.travel}</p>
            </pre>
          </Article>
        ))}
      </Section>
    </>
  );
};
