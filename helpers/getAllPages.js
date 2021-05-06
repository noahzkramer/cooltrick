import { initClient } from 'helpers'

async function getAllPages(preview) {
  const client = initClient(preview)

  const query = {
    include: 10,
    content_type: 'page',
  };

  const { items } = await client.getEntries(query);
  
  return items || null;
}

export default getAllPages
