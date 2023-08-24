import { request } from '@/lib/datocms';
import { Metadata } from 'next';
import { toNextMetadata } from 'react-datocms';
import query from './page.graphql';

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
      <section>hero </section>
    </main>
  );
};

export default Home;
