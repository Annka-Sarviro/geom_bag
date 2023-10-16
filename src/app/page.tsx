import { request } from '@/lib/datocms';
import { Metadata } from 'next';
import { toNextMetadata } from 'react-datocms';

import pageData from '@/data/page.json';
import query from './page.graphql';

import Section from '@/components/common/Section/';
import Advantages from '@/sections/Advantages';
import AllProducts from '@/sections/AllProducts';
import GroupMenu from '@/sections/GroupMenu';
import Hero from '@/sections/Hero/Hero';
import Materials from '@/sections/Materials/';
import NewProduct from '@/sections/NewProduct/';
import Reviewers from '@/sections/Reviewers';

import { RewiersProps } from '@/sections/Advantages/Advantages.props';
import { HeroProps } from '@/sections/Hero/Hero.props';
import FaviconImg from '../../public/favicon.png';
import { HomeQueryData, SectionProps } from './page.props';

const getHomepageContent = async () => await request(query, { revalidate: 60 });

export async function generateMetadata(): Promise<Metadata> {
  const data: HomeQueryData = (await getHomepageContent()) as HomeQueryData;

  const seo = data?.homePage?._seoMetaTags || pageData.seo;
  const favicon = data.site.favicon || FaviconImg;
  return toNextMetadata([...seo, ...favicon] || []);
}

const getFilteredContent = (data: any, name: string) => {
  const filteredData = data.filter((item: any) => item.name === name);
  return filteredData[0];
};

const Home = async () => {
  const data: HomeQueryData = (await getHomepageContent()) as HomeQueryData;
  const heroData: HeroProps = getFilteredContent(data?.allSections, 'hero');
  const productData = data.allProductCards;
  const advantagesData: SectionProps = getFilteredContent(data?.allSections, 'advantages');
  const materialsData: SectionProps = getFilteredContent(data?.allSections, 'materials');
  const reviewersData: RewiersProps[] = data?.allRewiers;
  const groupMenuData: SectionProps = getFilteredContent(data?.allSections, 'groupMenu');

  return (
    <main className="">
      <Section variant="hero" id="hero" className="relative">
        <Hero {...heroData} />
      </Section>
      <Section variant="primary" id="new_products">
        <NewProduct data={productData} />
      </Section>
      <Section variant="colored" id="advantages" className="advantages">
        <Advantages data={advantagesData} />
      </Section>
      <Section variant="primary" id="all_products" name="all_products" className="">
        <AllProducts data={productData} />
      </Section>
      <Section variant="colored" id="materials" className="!p-0">
        <Materials data={materialsData} />
      </Section>
      <Section variant="primary" id="reviewers" className="">
        <Reviewers data={reviewersData} />
      </Section>
      <Section variant="colored" id="groupMenu" className="!p-0">
        <GroupMenu data={groupMenuData} />
      </Section>
      <div id="modal" />
    </main>
  );
};

export default Home;
