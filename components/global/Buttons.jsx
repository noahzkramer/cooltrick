import { useState } from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'

export const PrimaryButton = styled(({className, color = 'white', children, type = false}) => {
  return (
    <button type={type} className={`${className} bg-accent relative py-3.5 px-14 rounded-sm font-tiny`}>
      <span className={`color-${color}`}>
        {children}
      </span>
      <span className="icon absolute">
        <SVG src="/svg/arrow.svg" />
      </span>
    </button>
  )
})`
transition: background 0.3s;

&:hover {
  background: var(--color-accent-hover);

  & .icon {
    transform: translate(25px, -50%);  
  }
}

& .icon {
  transition: transform 0.3s;
  top: 50%;
  transform: translate(20px, -50%);
}

`

export const PlayButton = styled(({className, setIsOpen}) => {
  return (
    <button className={`${className} font-black flex items-center`} onClick={() => setIsOpen(true)}>
      <span className="mr-6"><SVG src="/svg/play-button.svg" /></span>
      <span>Play Video</span>
    </button>
  )
})`
  transition: color 0.3s;

  span:first-of-type {
    transition: transform 0.3s;
  }

  &:hover {
    color: var(--color-accent);
  }

  &:hover span:first-of-type {
    transform: scale(0.9);
  }
`