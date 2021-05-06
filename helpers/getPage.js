import { initClient } from 'helpers'

async function getPage(params, preview) {
  const client = initClient(preview)

  const query = {
    limit: 1,
    include: 10, // references link level
    'fields.slug': params.slug, // query by slug
    content_type: 'page',
  };

  const { items: [page] } = await client.getEntries(query);
  
  return page || null;
}

export default getPage
