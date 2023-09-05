import pageData from '@/data/page.json';
import { request } from '@/lib/datocms';
import { Metadata } from 'next';
import { toNextMetadata } from 'react-datocms';

import query from './page.graphql';

import Section from '@/components/common/Section/';
import Delivery from '@/sections/Delivery/';
import Payment from '@/sections/Payment/';
import Return from '@/sections/Return/';

import FaviconImg from '../../../public/favicon.png';

const getDeliverypageContent = async () => await request(query, { revalidate: 60 });

export async function generateMetadata(): Promise<Metadata> {
  const data: any = await getDeliverypageContent();
  const seo = data?.homePage?._seoMetaTags || pageData.seo;
  const favicon = data.site.favicon || FaviconImg;
  return toNextMetadata([...seo, ...favicon] || []);
}

const getFilteredContent = (data: any, name: string) => {
  const filteredData = data.filter((item: any) => item.name === name);
  return filteredData[0];
};

const deliveryPage = async () => {
  const data: any = await getDeliverypageContent();

  const paymentData: any = getFilteredContent(data?.allSectionDeliverypages, 'payment_method');
  const deliveryData: any = getFilteredContent(data?.allSectionDeliverypages, 'delivery');
  const returnData: any = getFilteredContent(data?.allSectionDeliverypages, 'exchange_return');

  // const productData = data.allProductCards;
  // const advantagesData: AdvantagesProps = getFilteredContent(data?.allSections, 'advantages');

  return (
    <main className="">
      <Section variant="primary" id="payment" className="!pt-[220px]">
        <Payment data={paymentData} />
      </Section>
      <Section variant="primary" id="delivery" className="">
        <Delivery data={deliveryData} />
      </Section>
      <Section variant="primary" id="all_products" className="">
        <Return data={returnData} />
      </Section>
    </main>
  );
};

export default deliveryPage;
