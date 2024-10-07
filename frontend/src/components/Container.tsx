import { FC, ReactNode, ElementType } from 'react';

type ContainerProps = {
    as?: ElementType;
    children?: ReactNode; 
    className?: string; 
    [key: string]: any; 
  }

export const Container: FC<ContainerProps> = ({
    as: Element = 'div',
    children,
    className,
    ...rest
  }) => {
    return (
      <Element
        {...rest}
        className={`px-5 w-full max-w-screen-md m-auto ${className}`}
      >
        {children}
      </Element>
    )
  }