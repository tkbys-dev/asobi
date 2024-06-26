import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'sample-sample-sample',
  apiKey: process.env.MICROCMS_API_KEY,
});

const getAllContents = async (offset = 0, limit = 10) => {
  const data = await client.get({
    endpoint: 'service',
    queries: {
      offset,
      limit,
    },
  });

  if (data.offset + data.limit <= data.totalCount) {
    const contents = await getAllContents(data.offset + data.limit, data.limit);
    return [...data.contents, ...contents];
  }

  return data.contents;
};

export { getAllContents };
