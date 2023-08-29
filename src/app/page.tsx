import { request } from '@/lib/datocms';
import { Metadata } from 'next';
import { toNextMetadata } from 'react-datocms';

import pageData from '@/data/page.json';
import FaviconImg from '../../public/favicon.png';
import query from './page.graphql';

import Section from '@/components/common/Section/Section';
import Hero from '@/sections/Hero/Hero';
import { HeroProps } from '@/sections/Hero/Hero.props';
import NewProduct from '@/sections/NewProduct/NewProduct';

const getHomepageContent = async () => await request(query);

export async function generateMetadata(): Promise<Metadata> {
  const data: any = await getHomepageContent();
  const seo = data?.homePage?._seoMetaTags || pageData.seo;
  const favicon = data.site.favicon || FaviconImg;
  return toNextMetadata([...seo, ...favicon] || []);
}

const getFilteredContent = (data: any, name: string) => {
  const filteredData = data.filter((item: any) => item.name === name);
  return filteredData[0];
};

const Home = async () => {
  const data: any = await getHomepageContent();
  console.log(data);
  const heroData: HeroProps = getFilteredContent(data?.allSections, 'hero');
  const productData = data.allProductCards;

  return (
    <main className="">
      <Section variant="hero" id="hero">
        <Hero {...heroData} />
      </Section>
      <Section variant="primary" id="new_product">
        <NewProduct {...productData} />
      </Section>
    </main>
  );
};

export default Home;
