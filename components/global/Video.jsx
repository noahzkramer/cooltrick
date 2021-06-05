// Dependencies
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Video = ({className, file}) => {
  const videoRef = useRef(null)
  
  useEffect(() => {
    // play video
    videoRef.current.play()
  }, [])

  return (
    <div className={`${className} h-full`}>
      <video controls ref={videoRef} className="h-full" loop>
        <source src={file.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default styled(Video)`

`