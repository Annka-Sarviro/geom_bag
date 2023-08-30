import { request } from '@/lib/datocms';
import { Metadata } from 'next';
import { toNextMetadata } from 'react-datocms';

import pageData from '@/data/page.json';
import query from './page.graphql';

import Section from '@/components/common/Section/';
import Advantages from '@/sections/Advantages';
import Hero from '@/sections/Hero/Hero';
import NewProduct from '@/sections/NewProduct/';

import { AdvantagesProps } from '@/sections/Advantages/Advantages.props';
import { HeroProps } from '@/sections/Hero/Hero.props';
import FaviconImg from '../../public/favicon.png';

const getHomepageContent = async () => await request(query, { revalidate: 60 });

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
  const heroData: HeroProps = getFilteredContent(data?.allSections, 'hero');
  const productData = data.allProductCards;
  const advantagesData: AdvantagesProps = getFilteredContent(data?.allSections, 'advantages');

  return (
    <main className="">
      <Section variant="hero" id="hero" className="relative">
        <Hero {...heroData} />
      </Section>
      <Section variant="primary" id="new_product">
        <NewProduct data={productData} />
      </Section>
      <Section variant="colored" id="new_product" className="advantages">
        <Advantages data={advantagesData} />
      </Section>
    </main>
  );
};

export default Home;
