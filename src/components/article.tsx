import { FC, PropsWithChildren } from 'react';

export const Article: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className = '',
}) => {
  return (
    <article
      className={`${className} flex flex-col gap-12 text-white text-center max-md:w-[32.7rem]`}>
      {children}
    </article>
  );
};
