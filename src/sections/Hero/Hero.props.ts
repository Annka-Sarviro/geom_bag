interface ResponsiveImageProp {
  sizes: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  base64: string;
}

interface ImageProps {
  alt: string;
  height: number;
  id: string;
  size: number;
  url: string;
  width: number;
  responsiveImage: ResponsiveImageProp;
}

export interface HeroProps {
  description?: string;
  buttonText?: string;
  id: string;
  image: ImageProps[];
  name: string;
  subtitle?: string;
  title: string;
  _seoMetaTags: any;
}
