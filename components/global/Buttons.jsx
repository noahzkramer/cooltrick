import { useState } from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'

export const PrimaryButton = styled(({className, color = 'white', children}) => {
  return (
    <button className={`${className} bg-accent relative py-3.5 px-20 rounded-sm font-tiny`}>
      <span className={`color-${color}`}>
        {children}
      </span>
      <span className="icon absolute">
        <SVG src="/svg/arrow.svg" />
      </span>
    </button>
  )
})`
  .icon {
    top: 50%;
    transform: translate(20px, -50%);
  }
`