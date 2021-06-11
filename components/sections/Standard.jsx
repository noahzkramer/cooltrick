import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { nodeOptions } from 'lib/constants'
import { BLOCKS } from '@contentful/rich-text-types'
import Image from 'next/image'
import { PrimaryButton, Socials, Video } from 'components/global'
import Link from 'next/link'
import { camelSentence } from 'helpers'

const Standard = ({className, fields}) => {
  const {
    heading = '',
    body,
    ctaText,
    includeSocialMediaIcons = false,
    media = false,
    backgroundColor = 'bg-dark',
    classes = []
  } = fields

  return (
    <section id={camelSentence(heading)} className={`${className} ss-sm md:ss-md lg:ss-lg has-bg ${backgroundColor} ${[...classes]}`}>
      <div className="text-center container max-w-screen-sm">
        {heading && <h2 className="mb-8">{heading}</h2>}
        { documentToReactComponents(body, {
          ...nodeOptions,
          renderNode: {
            ...nodeOptions.renderNode,
            [BLOCKS.PARAGRAPH]: (node, children) => {
              return <p className="md:text-lg font-medium md:font-black">{children}</p>
            },
          }
        }) }

        { ctaText && (
          <div className="mt-11">
            <Link href={'/about'}>
              <a>
                <PrimaryButton>{ctaText}</PrimaryButton> 
              </a>
            </Link>
          </div>
        )}

        { includeSocialMediaIcons && (
          <div className="mt-11">
            <Socials />
          </div>
        )}
      </div>

      { media && (
        <div className="container max-w-screen-lg mt-16">
          <div className="m-auto flex justify-center">
          {
            media.fields.file.contentType === "video/mp4" 
              ? <Video file={media.fields.file} />
              : <Image 
                  src={"https:" + media.fields.file.url}
                  width={media.fields.file.details.image.width}
                  height={media.fields.file.details.image.height}
                />
          }
          </div>
        </div>
      )}
    </section>
  )
}

export default styled(Standard)`
  &.roadmap {
    h2 {
      margin-bottom: 3rem;
    }
  }
`