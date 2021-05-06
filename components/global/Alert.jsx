import { useState } from 'react'

const Alert = () => {
  const [ showBar, setShowBar ] = useState(true)

  return (
    showBar && (
      <div className="alert">
        This is a preview page.{' '}
        <a href="/api/exit-preview"> Click here</a>{' '}
        to exit preview mode.{' '}
        <a href="#" onClick={() => setShowBar(false)}>Hide bar</a>
      </div>
    )
  )
}

export default Alert