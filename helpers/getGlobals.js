import { initClient } from 'helpers'

async function getGlobals(search, preview) {
  const client = initClient(preview)

  const query = {
    ...search,
    include: 10,
    content_type: 'global',
  };

  const { items: [global] } = await client.getEntries(query);
  
  return global || null;
}

export default getGlobals
