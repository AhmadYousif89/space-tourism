import { FC, PropsWithChildren } from 'react';

export const Article: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className = '',
}) => {
  return (
    <article
      className={`${className} flex flex-col gap-12 pb-20 w-[32.7rem] text-white text-center`}>
      {children}
    </article>
  );
};
