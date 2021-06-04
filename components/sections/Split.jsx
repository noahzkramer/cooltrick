// Dependencies
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { nodeOptions } from 'lib/constants'
import { useEffect, useRef } from 'react';
import { camelSentence } from 'helpers'

// theme breakpoints
const {theme: { screens }} = require("tailwind.config.js")

// https://tailwindgrids.com/#/

const Split = ({className, fields}) => {
  const {
    name,
    column1,
    column2,
    containerWidth = 'lg',
    textAlign = 'left',
    animate = false,
  } = fields
  const sectionRef = useRef(false)

  return (
    <section id={camelSentence(name)} className={`${className} ss-sm md:ss-md lg:ss-lg`} ref={sectionRef}>
      <div className={`container flex md:space-x-8 lg:space-x-48 max-w-screen-${containerWidth} text-${textAlign} flex-wrap`}>
        <div className="md:flex-1">
          {documentToReactComponents(column1, nodeOptions)}
        </div>
        {
          column2 && (
            <div className="md:flex-1 mt-8 md:mt-0">
              {documentToReactComponents(column2, nodeOptions)}
            </div>
          )
        }
      </div>
    </section>
  )
}

// export
export default styled(Split)`
  // unique styles here
`