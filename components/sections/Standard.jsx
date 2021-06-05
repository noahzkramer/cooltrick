import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types'
import Image from 'next/image'
import { PrimaryButton, Socials } from 'components/global'
import Link from 'next/link'
import { camelSentence } from 'helpers'

const Standard = ({className, fields}) => {
  const {
    heading = '',
    body,
    ctaText,
    includeSocialMediaIcons = false,
    media = false,
    backgroundColor = 'bg-dark'
  } = fields

  return (
    <section id={camelSentence(heading)} className={`${className} ss-sm md:ss-md lg:ss-lg has-bg ${backgroundColor}`}>
      <div className="text-center container max-w-screen-sm">
        {heading && <h2 className="mb-8">{heading}</h2>}
        { documentToReactComponents(body, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
              return <p className="text-lg font-black">{children}</p>
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
          <Image 
            src={"https:" + media.fields.file.url}
            width={media.fields.file.details.image.width}
            height={media.fields.file.details.image.height}
          />
        </div>
      )}
    </section>
  )
}

export default styled(Standard)`
  
`