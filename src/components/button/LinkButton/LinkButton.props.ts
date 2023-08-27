import { AnchorHTMLAttributes, DetailedHTMLProps, MouseEventHandler, ReactNode } from 'react';

export interface LinkButtonProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'secondary' | 'simple';
  disabled?: boolean;
  href?: string;
  arrow?: boolean;
  scroll?: boolean;
  className?: string;
  onClick?: ((() => void) & MouseEventHandler<HTMLButtonElement>) | undefined;
  onKeyUp?: (event: any) => void;
}
