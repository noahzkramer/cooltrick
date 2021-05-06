import { getPage, getNavigation } from 'helpers'
import BlockRenderer from 'components/helpers/BlockRenderer'
import { Layout } from 'components/global'

export default function Home({page, preview, navigationData}) {
  // iterable components
  const blocks = page.fields.content

  return (
    <Layout preview={preview} navigationData={navigationData}>
      { blocks.map(block => 
          <BlockRenderer 
            key={block.sys.id} 
            block={block}
          />
      )}
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const params = {
    pageContentType: 'page',
    slug: 'home',
  }

  const page = await getPage(params, preview)
  const navigationData = await getNavigation({ 'fields.title': 'Main Navigation' })

  return {
    props: { preview, page, navigationData },
  }
}
