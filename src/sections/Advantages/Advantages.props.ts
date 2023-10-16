import { ImageProp } from '@/app/page.props';

export interface AdvantagesProps {
  data: {
    description?: string;
    buttonText?: string;
    id: string;
    image?: ImageProp[];
    name: string;
    subtitle?: string;
    title: string;
    _seoMetaTags: any;
  };
}

export interface RewiersProps {
  id: string;
  link?: string;
  name: string;
  text: string;
  product: {
    name: string;
  };
}
