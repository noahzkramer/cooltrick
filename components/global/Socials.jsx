// Dependencies
import styled from 'styled-components'
import { useContext } from 'react'
import { GlobalContext } from 'components/global/Layout'
import SVG from 'react-inlinesvg'
import Link from 'next/link'

const Socials = ({className}) => {
  const globals = useContext(GlobalContext);

  return (
    <div className={`${className}`}>
      <ul className="flex space-x-10 justify-center">
      {
        globals.socials.map((social) => {
          return (
            <a href={social.value} target="_blank">
              <li key={social.key}>
                <SVG src={`/svg/${social.key}.svg`} />
              </li>
            </a>
          )
        })
      }
      </ul>
    </div>
  )
}

export default styled(Socials)`
  
`