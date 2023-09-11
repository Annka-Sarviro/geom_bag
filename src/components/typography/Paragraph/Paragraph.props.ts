import { ReactNode, RefObject } from 'react';

export interface ParagraphProps {
  variant?: 'dark' | 'white' | 'hero';
  variantFontSize?: 'text' | 'reviewers';
  className?: string;
  children: ReactNode;
  paragraphRef?: RefObject<HTMLParagraphElement>;
  id?: string;
  centered?: boolean;
}
