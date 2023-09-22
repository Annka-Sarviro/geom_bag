import { AnchorHTMLAttributes, DetailedHTMLProps, MouseEventHandler, ReactNode } from 'react';

export interface LinkButtonProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'simple';
  disabled?: boolean;
  href?: string;
  arrow?: boolean;
  scroll?: boolean;
  className?: string;
  offset?: number;
  onClick?: ((() => void) & MouseEventHandler<HTMLButtonElement>) | undefined;
  onKeyUp?: (event: any) => void;
}
