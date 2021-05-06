import { getAllPages, getPage, getNavigation } from "helpers"
import BlockRenderer from 'components/helpers/BlockRenderer'
import { Layout } from 'components/global'

const Page = ({ page, preview, navigationData }) => {
  // iterable components
  const blocks = page.fields.content

  return (
    <Layout preview={preview} navigationData={navigationData}>
      <h1>{page.fields.title}</h1>
      { blocks.map(block => 
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

  const navigationData = await getNavigation({ 'fields.title': 'Main Navigation' })

  return { 
    props: { page, preview, navigationData } 
  }
}

export default Page