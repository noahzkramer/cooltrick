import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import SVG from 'react-inlinesvg'
import { Modal, PlayButton, Video } from 'components/global'
import { useRef, useState } from 'react'

const ContentListCard = ({data, className}) => {
  const {
    category,
    name,
    bio,
    thumbnail,
    media: { fields: { file } }
  } = data

  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <article className={`${className} flex flex-wrap shadow-lg bg-light rounded-lg mb-10 last:mb-0 md:even:flex-row-reverse`}>
      <div className="content px-6 py-6 lg:p-14 md:max-w-1/2 order-2 md:order-0">
        <h4>{category}</h4>
        <h3 className="my-5 md:mt-10 md:mb-8 text-xl">{name}</h3>
        {documentToReactComponents(bio)}
        <div className="mt-10 font-black">
          <PlayButton setIsOpen={setIsOpen} />
        </div>
      </div>
      <div className="flex w-full md:max-w-1/2">
        <div className="relative md:m-4 overflow-hidden w-full rounded-t-lg md:rounded-lg aspect-w-16 aspect-h-13">
          <Image 
            src={"https:" + thumbnail.fields.file.url}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <Modal 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
      >
        {
          file.contentType === "video/mp4" 
            ? <Video file={file} />
            : <Image 
                src={"https:" + file.url}
                width={file.details.image.width}
                height={file.details.image.height}
              />
        }
      </Modal>
    </article>
  ) 
}

export default styled(ContentListCard)`
  &:nth-child(2n+1) {
    .content {
      border-right: 1px solid var(--color-primary-dark);
    }
  }

  &:nth-child(2n) {
    .content {
      border-left: 1px solid var(--color-primary-dark);
    }
  }
`