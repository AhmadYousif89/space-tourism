import { FC, PropsWithChildren } from 'react';

export const Section: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="h-[100svh] pt-40 flex flex-col items-center gap-[3.2rem]">
      {children}
    </section>
  );
};
