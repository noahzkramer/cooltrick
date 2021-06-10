import { initClient } from 'helpers'

async function getArtistsBySeries(series, preview) {
  const client = initClient(preview)

  const query = {
    include: 10,
    'fields.series': series, // query by slug
    content_type: 'artists',
  };

  const { items } = await client.getEntries(query);
  
  return items || null;
}

export default getArtistsBySeries
