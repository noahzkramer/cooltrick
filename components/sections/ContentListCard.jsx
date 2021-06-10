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
    <>
    <article className={`${className} flex flex-wrap shadow-lg bg-light rounded-lg relative`}>
      <div className="flex w-full">
        <div className="relative overflow-hidden w-full rounded-lg aspect-w-16 aspect-h-11">
          <Image 
            src={"https:" + thumbnail.fields.file.url}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="content px-6 py-6 lg:p-14 md:absolute z-10 bg-dark bg-opacity-90 h-full w-full text-center flex items-center md:opacity-0 transition duration-500">
        <div className="max-w-md m-auto">
          <h3 className="mb-5 md:mb-8 text-xl">{name}</h3>
          {documentToReactComponents(bio)}
          <div className="mt-10 font-black flex justify-center">
            <PlayButton setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </article>
    
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
    </>
  ) 
}

export default styled(ContentListCard)`

`