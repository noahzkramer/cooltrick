import { getPage, getNavigation } from 'helpers'
import BlockRenderer from 'components/helpers/BlockRenderer'
import { Layout } from 'components/global'

export default function Home({page, preview, layoutData}) {
  // iterable components
  const topBlocks = page.fields.topContent
  const blocks = page.fields.content

  return (
    <Layout preview={preview} layoutData={layoutData}>
      <section className="bg-gradient-to-b from-dark to-light pb-20">
        { topBlocks.map(block => 
            <BlockRenderer 
              key={block.sys.id} 
              block={block}
            />
        )}
      </section>
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
  // get global data
  const navigation = await getNavigation({ 
    'fields.name': 'Primary' 
  })

  const layoutData = {
    navigation,
    // footer
  }

  return { 
    props: { page, preview, layoutData } 
  }
}
