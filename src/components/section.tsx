import { FC, PropsWithChildren } from 'react';

export const Section: FC<
  PropsWithChildren<{ className?: string; header: string | string[] }>
> = ({ children, className = '', header }) => {
  const [titleNum, title] = header;

  return (
    <section
      className={`${className} h-screen grid justify-items-center grid-rows-[minmax(20px,32px)_auto_1fr] ws:grid-rows-[minmax(20px,40px)_auto] gap-y-16 pt-40 pb-20 mx-auto md:pt-[13.7rem] ws:pt-[21.3rem] ws:gap-36 ws:w-[112rem] ws:grid-cols-2 ws:pb-0`}>
      <h5 className="h5 space-x-6 row-start-1 col-span-full md:max-ws:pl-16 md:place-self-start">
        <span className="font-bold opacity-25">{titleNum}</span>
        <span>{title}</span>
      </h5>
      {children}
    </section>
  );
};
