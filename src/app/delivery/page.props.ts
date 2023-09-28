import { FaviconMetaTag } from '../page.props';

interface DeliveryPageProps {
  id: string;
  _seoMetaTags: any;
}

export interface AllSectionDeliverypagesProps {
  description: string;
  buttonText: string;
  descriptionstruct?: any;
  id: string;
  name: string;
  title: string;
}

export interface DeliveryProps {
  site: {
    favicon: FaviconMetaTag[];
  };
  deliverypage: DeliveryPageProps;
  allSectionDeliverypages: AllSectionDeliverypagesProps[];
}
