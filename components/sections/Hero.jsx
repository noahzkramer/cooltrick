import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types'
import Link from 'next/link'
import { PrimaryButton } from 'components/global'

const Hero = ({className, fields}) => {
  const {
    subheader,
    body,
    primary_heading,
    secondary_header,
    ctaText,
  } = fields

  return (
    <header className={`${className} pt-44`}>
      <div className="text-center container max-w-screen-md">
        <h4 className="text-accent pb-6">{subheader}</h4>
        <h1 className="pb-1">{primary_heading}</h1>
        <h2 className="text-2xl pb-3">{secondary_header}</h2>
        { documentToReactComponents(body, {
          renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => {
              return <h2 className="text-2xl">{children}</h2>
            },
            [BLOCKS.HEADING_3]: (node, children) => {
              return <h3 className="text-grey max-w-screen-sm m-auto whitespace-pre-line">{children}</h3>
            }
          }
        }) }
        {
          ctaText && (
            <div className="block mt-10">
              <Link href={'/'}>
                <a>
                  <PrimaryButton>{ctaText}</PrimaryButton>
                </a>
              </Link>
            </div>
          )
        }
      </div>
    </header>
  )
}

export default styled(Hero)`
  /* h4 {
    margin-bottom: 1.125rem;
  }

  h2 + h3 {
    margin-top: 0.75rem;
  } */
`