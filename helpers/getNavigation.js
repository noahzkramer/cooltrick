import { initClient } from 'helpers'

async function getNavigation(search, preview) {
  const client = initClient(preview)

  const query = {
    ...search,
    include: 10,
    content_type: 'navigation',
  };

  const { items: [navigation] } = await client.getEntries(query);
  
  return navigation || null;
}

export default getNavigation
