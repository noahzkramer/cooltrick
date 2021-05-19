import { getAllPages, getPage, getNavigation } from "helpers"
import BlockRenderer from 'components/helpers/BlockRenderer'
import { Layout } from 'components/global'

const Page = ({ page, preview, layoutData }) => {
  // iterable components
  const { content, topContent } = page.fields

  return (
    <Layout preview={preview} layoutData={layoutData}>
      <section className="bg-gradient-to-b from-dark to-light pb-20">
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

export default Page