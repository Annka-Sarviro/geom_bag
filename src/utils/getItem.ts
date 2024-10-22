'server-only';

import { request } from '@/lib/datocms';
import query from '../app/page.graphql';

export const getItem = async (id: string) => {
  const data = await request(query, { revalidate: 60 });
  const productData = data?.allProductCards;
  const search = productData?.filter(el => el.article.toLocaleLowerCase() === id?.toLowerCase());
  return search[0];
};
