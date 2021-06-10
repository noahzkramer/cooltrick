import Image from 'next/image'
import { ContactForm } from 'components/global/'
import { BLOCKS } from '@contentful/rich-text-types'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export const ComponentContentTypes = {
  Hero: 'blockHero',
  Standard: 'blockStandard',
  ContentList: 'blockContentList',
  Split: 'blockSplit'
}

export const FormFieldTypes = {
  Text: 'Text',
  Email: 'Email',
  TextArea: 'textarea',
  Select: 'Select',
}

export const nodeOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      let contentType = node.data.target.sys.contentType?.sys.id;
      const { fields } = node.data.target

      // get common topics options
      if (contentType === "commonTopics" && fields.item === "Markdown") contentType = "markdown"

      const markdown = `${fields.markdown}`

      switch (contentType) {
        case "forms": return <ContactForm fields={ fields } />
        case "markdown": return <div><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      let { file } = node.data.target.fields
      let width = file.details.image.width
      let height = file.details.image.height
      let src = "http:" + file.url

      return (
        <div className="image-wrapper">
          <Image 
            width={width}
            height={height}
            src={src}
          />
        </div>
      )
    }
  }
}