import { createClient } from 'contentful'

let client

function initClient (preview) {
  client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN,
    host: preview ? 'preview.contentful.com' : 'cdn.contentful.com'
  })
  
  return client
}

export default initClient