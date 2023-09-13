import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

import { FilterContextProvider, GroupFilterContextProvider } from '@/app/context';
import query from '@/app/layout.graphql';
import { request } from '@/lib/datocms';

import Footer from '@/layout/Footer/Footer';
import Header from '@/layout/Header/Header';

const noto = Noto_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const getHomepageContent = async () => await request(query);

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data: any = await getHomepageContent();
  const contacts = data?.contact;
  return (
    <html lang="en">
      <body className={noto.className}>
        <GroupFilterContextProvider>
          <FilterContextProvider>
            <Header contacts={contacts} />
            {children}
            <Footer contacts={contacts} />
          </FilterContextProvider>
        </GroupFilterContextProvider>
      </body>
    </html>
  );
}
