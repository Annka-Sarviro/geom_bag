import { FaviconMetaTag } from '../page.props';

interface OffertPageProps {
  id: string;
  _seoMetaTags: any;
}

export interface AllSectionOffertpagesProps {
  description: string;
  buttonText: string;
  descriptionstruct: any;
  id: string;
  name: string;
  title: string;
}

export interface OfferProps {
  site: {
    favicon: FaviconMetaTag[];
  };
  offertpage: OffertPageProps;
  allSectionOffertpages: AllSectionOffertpagesProps[];
}
