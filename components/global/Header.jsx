// Dependencies
import styled from 'styled-components'
import { PrimaryNavigation, MobileNavigation } from 'components/global'
import SVG from 'react-inlinesvg'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { gsap } from "gsap"

const Header = ({className, navigationData}) => {
  const [ openMobileMenu, setOpenMobileMenu ] = useState(false)
  const mobileNavRef = useRef(null)
  const tl = useRef(null);
  
  useEffect(() => {
    const line1 = mobileNavRef.current.querySelector('span:nth-child(1)')
    const line2 = mobileNavRef.current.querySelector('span:nth-child(2)')

    tl.current = gsap.timeline({}).pause()
      .to(line1, { y: 5, duration: 0.1 })
      .to(line2, { y: -6, duration: 0.1 }, "-=0.1")
      .to(line1, { rotate: 45, duration: 0.1 })
      .to(line2, { rotate: -45, duration: 0.1 }, "-=0.1")

  }, [])

  useEffect(() => {
    openMobileMenu ? tl.current.play() : tl.current.reverse()
  }, [openMobileMenu])

  return (
    <>
      <header className={`${className} fixed z-30 w-full flex items-center pt-4 sm:pt-8 lg:pt-14 px-4 sm:px-8 lg:px-24`}>
        <div className="logo w-24 md:w-36">
          <Link href="/">
            <a>
              <SVG src="/svg/logo.svg" />
            </a>
          </Link>
        </div>
        <span className="hidden md:inline">
          <PrimaryNavigation data={navigationData} />
        </span>
        <span className="md:hidden text-white">
          <button id="test" onClick={() => setOpenMobileMenu(!openMobileMenu)} ref={mobileNavRef}>
            <span/>
            <span/>
          </button>
        </span>
      </header>
      {
        openMobileMenu && (
          <MobileNavigation data={navigationData} setOpenMobileMenu={setOpenMobileMenu} />
        )
      }
    </>
  )
}

export default styled(Header)`
  justify-content: space-between;

  svg {
    width: 100%;
  }

  & button {
    position: relative;

    &:focus {
        outline: none;
      }

    span {
      width: 28px;
      height: 1px;
      background: white;
      display: block;

      &:nth-child(1) {
        margin-bottom: 10px;
        /* transform: rotate(45deg); */
      }

      &:focus {
        outline: none;
      }
    }
  }
`