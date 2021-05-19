import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types'

const Hero = ({className, fields}) => {
  const {
    subheader,
    body,
    heading,
    ctaText,
  } = fields

  return (
    <header className={`${className} pt-44`}>
      <div className="text-center container max-w-screen-md">
        <h4 className="text-accent">{subheader}</h4>
        <h1>{heading}</h1>
        { documentToReactComponents(body, {
          renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => {
              return <h2 className="text-2xl">{children}</h2>
            },
            [BLOCKS.HEADING_3]: (node, children) => {
              return <h3 className="text-grey max-w-screen-sm m-auto">{children}</h3>
            }
          }
        }) }
      </div>
    </header>
  )
}

export default styled(Hero)`
  h4 {
    margin-bottom: 1.125rem;
  }

  h2 + h3 {
    margin-top: 0.75rem;
  }
`