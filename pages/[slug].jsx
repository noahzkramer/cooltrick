import { getAllPages, getPage, getGlobals } from "helpers"
import BlockRenderer from 'components/helpers/BlockRenderer'
import { Layout, Seo } from 'components/global'

const Page = ({ page, preview, layoutData }) => {
  const { content, topContent, seo } = page.fields

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
      { content.map((block, i) => 
          <BlockRenderer 
            key={block.sys.id} 
            block={block}
          />
      )}
    </Layout>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  const pages = await getAllPages()
  const paths = pages.map((page) => ({
    params: { slug: page.fields.slug },
  }))

  return { paths, fallback: false }
}

// // This also gets called at build time
export async function getStaticProps({ params, preview = false }) {
  const page = await getPage({
    pageContentType: 'page',
    slug: params.slug,
  }, preview)


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

export default Page