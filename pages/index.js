import { getPage, getGlobals } from 'helpers'
import BlockRenderer from 'components/helpers/BlockRenderer'
import { Layout, Seo } from 'components/global'

export default function Home({page, preview, layoutData}) {
  const { topContent, content, seo } = page.fields

  return (
    <Layout preview={preview} layoutData={layoutData}>
      <Seo data={seo} />
      <section id="top" className="bg-gradient-to-b from-dark to-light overflow-hidden">
        { topContent.map(block => 
            <BlockRenderer 
              key={block.sys.id} 
              block={block}
            />
        )}
      </section>
      { content.map(block => 
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
  const globals = await getGlobals({ 'fields.name': 'Global' })
  const navigation = globals.fields.primaryNavigation
  const footer = {
    footer: globals.fields.primaryNavigation,
    footerDisclaimer: globals.fields.footerDisclaimer
  }

  const layoutData = {
    globals,
    navigation,
    footer
  }

  return { 
    props: { page, preview, layoutData } 
  }
}
