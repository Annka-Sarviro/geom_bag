import { RewiersProps } from '@/sections/Advantages/Advantages.props';
import { ResponsiveImageType } from 'react-datocms';

export interface FaviconMetaTag {
  attributes: {
    sizes: string;
    type: string;
    rel: string;
    href: string;
  };
  content: string;
  tag?: string;
}

interface ResponsiveImage {
  responsiveImage: {
    sizes: string;
    src: string;
    width: number;
    height: number;
    alt: string;
    title: string;
    base64: string;
  };
}

export interface ImageProp {
  alt: string;
  height: number;
  id: string;
  size: number;
  url: string;
  width: number;
  responsiveImage: ResponsiveImageType;
}

export interface SeoMetaTags {
  attributes?: {
    property?: string;
    content?: string;
    name?: string;
  };
  content?: any;
  tag?: string;
}

export interface ProductCardProp {
  id: string;
  image: ResponsiveImage[];

  material: string;
  name: string;
  peculiar: string;
  price: string;
  recommendations: string;
  _seoMetaTags: SeoMetaTags[];
  size: string;
  color: string;
  description: string;
  article: string;
  isnew: boolean;
  ispopular: boolean;
  category: string;
  availability: boolean;
}

export interface SectionProps {
  description: string;
  buttonText: string;
  id: string;
  image: ImageProp[];
  name: string;
  subtitle: string;
  title: string;
  _seoMetaTags: SeoMetaTags[];
}

interface HomePage {
  id: string;
  _seoMetaTags: any;
}

interface Contact {
  _seoMetaTags: SeoMetaTags[];
  address: string;
  email: string;
  id: string;
  instagram: string;
  tel: string;
  telegram: string;
  telegramTitle: string;
  viber: string;
  viberTitle: string;
  instagramTitle: string;
}

export interface HomeQueryData {
  site: {
    favicon: FaviconMetaTag[];
  };
  allProductCards: ProductCardProp[];
  allSections: SectionProps[];
  homePage: HomePage;
  allRewiers: RewiersProps[];
  allContacts: Contact[];
}
