import cn from 'classnames';
import { FC } from 'react';

import { TitleProps } from './Title.props';

const Title: FC<TitleProps> = ({ tag = 'h2', variant = 'dark', centered, children, className }) => {
  const Tag = tag;

  return (
    <Tag
      className={cn(
        {
          ['text-center']: centered,
          ['text-dark']: variant == 'dark',
          ['text-white']: variant == 'light',
          ['font-montserrat font-semibold text-40  md:text-[60px]']: tag == 'h1',
          ['font-normal text-center text-xl md:text-40 mb-8 md:mb-10']: tag == 'h2',
          ['font-normal text-xl md:text-3xl ']: tag == 'h3',
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Title;
