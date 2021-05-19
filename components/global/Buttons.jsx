import { useState } from 'react'
import styled from 'styled-components'

export const PrimaryButton = styled(({className, color = 'white', children}) => {
  return (
    <button className={`${className} bg-accent relative py-3 px-14 rounded-sm font-tiny`}>
      <span className={`color-${color}`}>
        {children}
      </span>
      <span className="absolute">
        ->
      </span>
    </button>
  )
})`
  // unique styles here
`