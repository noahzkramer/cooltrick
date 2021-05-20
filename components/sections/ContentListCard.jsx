import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import SVG from 'react-inlinesvg'
import { Modal } from 'components/global'
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
    <article className={`${className} flex shadow-lg bg-light rounded-lg mb-10 last:mb-0 even:flex-row-reverse`}>
      <div className="content p-14 max-w-1/2">
        <h4>{category}</h4>
        <h3 className="mt-10 mb-8 text-xl">{name}</h3>
        {documentToReactComponents(bio)}
        <div className="mt-10 font-black">
          <button className="font-black flex items-center">
            <span className="mr-6"><SVG src="/svg/play-button.svg" /></span>
            <span onClick={() => setIsOpen(true)}>Play Video</span>
          </button>
        </div>
      </div>
      <div className="flex w-full max-w-1/2">
        <div className="relative m-4 overflow-hidden w-full rounded-lg">
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
        <Image 
          src={"https:" + file.url}
          width={file.details.image.width}
          height={file.details.image.height}
        />
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