import styled from 'styled-components'
import Image from 'next/image'
import { ClientOnlyPortal } from 'components/global'

const Modal = ({ className, children, isOpen, setIsOpen }) => {
  return (
    isOpen && (
      <ClientOnlyPortal selector="body">
        <div className={`${className} w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-90 z-50`} role="dialog">
          <div className="top-0 right-0 absolute p-8 md:p-10 z-10">
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white close-button"
            >
              <span/>
              <span/>
            </button>
          </div>
          <div className="container flex h-screen items-center justify-center py-10">
            {children}
          </div>
        </div>
      </ClientOnlyPortal>
    )
  )
}

export default styled(Modal)`
& .close-button {
  height: 30px;
  position: relative;
  transition: transform 0.3s;
  
  &:hover {
    transform: rotate(90deg);
  }

  &:focus {
    outline: none;
  }

  span {
    width: 28px;
    height: 2px;
    background: white;
    display: block;

    &:nth-child(1) {
      transform: rotate(45deg) translateY(1px);
    }

    &:nth-child(2) {
      transform: rotate(-45deg) translateY(-1px);
    }

    &:focus {
      outline: none;
    }
  }
}
`