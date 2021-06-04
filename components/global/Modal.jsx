import styled from 'styled-components'
import Image from 'next/image'

const Modal = ({ className, children, isOpen, setIsOpen }) => {
  return (
    isOpen && (
      <div className={`${className} w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-90 z-50`} role="dialog">
        <button 
          onClick={() => setIsOpen(false)}
          className="top-12 right-12 absolute p-6 z-10 text-white"
        >Close</button>
        <div className="container flex h-screen items-center justify-center">
          {children}
        </div>
      </div>
    )
  )
}

export default styled(Modal)`
  // custom styles here
`