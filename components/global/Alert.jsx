import { useState } from 'react'
import styled from 'styled-components'

const Alert = ({className}) => {
  const [ showBar, setShowBar ] = useState(true)

  return (
    showBar && (
      <div className={className}>
        This is a preview page.{' '}
        <a href="/api/exit-preview"> Click here</a>{' '}
        to exit preview mode.{' '}
        <a href="#" onClick={() => setShowBar(false)}>Hide bar</a>
      </div>
    )
  )
}

export default styled(Alert)`
  font-size: 1.5rem;
  line-height: 2.8rem;
  padding: 1.6rem;
  background-color: rgba(32, 33, 35, 1);
  color: white;
  position: fixed;
  border-radius: 8px;
  font-weight: 300;
  bottom: 15px;
  right: 15px;
  z-index: 1060;

  a {
    color: white;
  }
`