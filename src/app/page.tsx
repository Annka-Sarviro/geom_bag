import { request } from '@/lib/datocms';
import { Metadata } from 'next';
import { toNextMetadata } from 'react-datocms';
import query from './page.graphql';

import Section from '@/components/common/Section/Section';
import Hero from '@/sections/Hero/Hero';
import NewProduct from '@/sections/NewProduct/NewProduct';

const getHomepageContent = async () => await request(query);

export async function generateMetadata(): Promise<Metadata> {
  const data: any = await getHomepageContent();
  const seo = data.homePage?._seoMetaTags;
  const favicon = data.site.favicon;
  return toNextMetadata([...seo, ...favicon] || []);
}

const Home = async () => {
  const data = await getHomepageContent();

  return (
    <main className="">
      <Section variant="hero" id="hero">
        <Hero />
      </Section>
      <Section variant="primary" id="new_product">
        <NewProduct />
      </Section>
    </main>
  );
};

export default Home;
