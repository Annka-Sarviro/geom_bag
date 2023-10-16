import pageData from '@/data/page.json';
import { request } from '@/lib/datocms';
import { Metadata } from 'next';
import { toNextMetadata } from 'react-datocms';
import { AllSectionOffertpagesProps, OfferProps } from './page.props';

import query from './page.graphql';

import Section from '@/components/common/Section/';
import Offer from '@/sections/Offer/';

import FaviconImg from '../../../public/favicon.png';

const getDeliverypageContent = async () => await request(query, { revalidate: 60 });

export async function generateMetadata(): Promise<Metadata> {
  const data: OfferProps = (await getDeliverypageContent()) as OfferProps;
  const seo = data?.offertpage?._seoMetaTags || pageData.seo;
  const favicon = data.site.favicon || FaviconImg;
  return toNextMetadata([...seo, ...favicon] || []);
}

const getFilteredContent = (data: AllSectionOffertpagesProps[], name: string) => {
  const filteredData = data.filter((item: AllSectionOffertpagesProps) => item.name === name);
  return filteredData[0];
};

const offerPage = async () => {
  const data: OfferProps = (await getDeliverypageContent()) as OfferProps;
  const offerData: AllSectionOffertpagesProps = getFilteredContent(
    data?.allSectionOffertpages,
    'offert'
  );

  return (
    <main className="">
      <Section variant="primary" id="offer" className="!pt-[120px] md:!pt-[220px]">
        <Offer data={offerData} />
      </Section>
    </main>
  );
};

export default offerPage;
