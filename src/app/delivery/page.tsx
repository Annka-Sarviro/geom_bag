import pageData from '@/data/page.json';
import { request } from '@/lib/datocms';
import { Metadata } from 'next';
import { toNextMetadata } from 'react-datocms';

import query from './page.graphql';
import { AllSectionDeliverypagesProps, DeliveryProps } from './page.props';

import Section from '@/components/common/Section/';
import Delivery from '@/sections/Delivery/';
import Payment from '@/sections/Payment/';
import Return from '@/sections/Return/';

import FaviconImg from '../../../public/favicon.png';

const getDeliverypageContent = async () => await request(query, { revalidate: 60 });

export async function generateMetadata(): Promise<Metadata> {
  const data: DeliveryProps = (await getDeliverypageContent()) as DeliveryProps;
  const seo = data?.deliverypage?._seoMetaTags || pageData.seo;
  const favicon = data.site.favicon || FaviconImg;
  return toNextMetadata([...seo, ...favicon] || []);
}

const getFilteredContent = (data: AllSectionDeliverypagesProps[], name: string) => {
  const filteredData = data.filter((item: AllSectionDeliverypagesProps) => item.name === name);
  return filteredData[0];
};

const deliveryPage = async () => {
  const data: DeliveryProps = (await getDeliverypageContent()) as DeliveryProps;

  const paymentData: AllSectionDeliverypagesProps = getFilteredContent(
    data?.allSectionDeliverypages,
    'payment_method'
  );
  const deliveryData: AllSectionDeliverypagesProps = getFilteredContent(
    data?.allSectionDeliverypages,
    'delivery'
  );
  const returnData: AllSectionDeliverypagesProps = getFilteredContent(
    data?.allSectionDeliverypages,
    'exchange_return'
  );

  return (
    <main className="">
      <Section variant="primary" id="payment" className="!pt-[120px] md:!pt-[220px]">
        <Payment data={paymentData} />
      </Section>
      <Section variant="primary" id="delivery" className="">
        <Delivery data={deliveryData} />
      </Section>
      <Section variant="primary" id="return" className="">
        <Return data={returnData} />
      </Section>
    </main>
  );
};

export default deliveryPage;
