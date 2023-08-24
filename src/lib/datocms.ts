import 'server-only';

import { cache } from 'react';

const dedupableRequest = cache(
  async <TDocument = unknown>(payload: string, revalidate?: number | false): Promise<TDocument> => {
    const response = await fetch('https://graphql.datocms.com/', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        'X-Exclude-Invalid': 'true',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: payload,
      next: {
        revalidate,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed request ${payload}`);
    }

    const result = await response.json();

    return result.data;
  }
);

type RequestOptions = {
  revalidate?: number | false;
};

export async function request<TResult = unknown, TVariables = unknown>(
  query: string,
  variables?: TVariables,
  options?: RequestOptions
): Promise<TResult> {
  return dedupableRequest<TResult>(JSON.stringify({ query, variables }), options?.revalidate);
}
