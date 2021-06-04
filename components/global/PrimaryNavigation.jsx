// Dependencies
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'


const PrimaryNavigation = ({data, className}) => {
  const { navigationItem } = data.fields
  const navRef = useRef([])

  const handleHash = (e, hashId) => {
    if (hashId) {
      e.preventDefault()
      // Use the hash to find the first element with that id
      const element = document.querySelector(hashId);

      if (element) {
        // Smooth scroll to that elment
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  }

  const handleMouseOver = () => {
    navRef.current.map(el => el.style.opacity = 0.6)
  }

  const handleMouseLeave = () => {
    navRef.current.map(el => el.style.opacity = 1)
  }

  const addRef = element => {
    if (!element) return
    navRef.current = [...navRef.current, element]
  }

  return (
    <nav className={className}>
      {/* FIX: hot refresh issue with refs */}
      {navRef.current = []}

      <ul className="flex items-center flex-col md:flex-row space-y-10 md:space-y-0">
        {
          navigationItem.map(navItem => {
            let id = navItem.sys.id,
                name = navItem.fields.name,
                customLink = navItem.fields.customLink,
                link = navItem.fields.page?.fields.slug,
                openInNewWindow = navItem.fields.openInNewWindow,
                hash = navItem.fields.hash || false,
                classes = navItem.fields.classes || [];

            link = link === 'home' ? '/' : link
            link = customLink || "/" + link

            return (
              <li 
                key={id} 
                className={`md:mr-11 last:mr-0 text-xl md:text-tiny ${[...classes]}`}
                ref={addRef}
                onMouseOver={handleMouseOver} 
                onMouseLeave={handleMouseLeave}
              >
                {
                  !openInNewWindow ? (
                    <Link href={`${link || ''}`}>
                      <a onClick={(e) => handleHash(e, hash)}>
                        {name}
                      </a>
                    </Link>
                  ) : (
                    <a 
                      href={link || ''} 
                      target="_blank">
                        {name}
                    </a>
                  )
                }
                
              </li>
            )
          })  
        }
      </ul>
    </nav>
  )
}

export default styled(PrimaryNavigation)`
  .styled-btn a {
    background-color: white;
    color: black;
    padding: 13px 38px;
    border-radius: 2px;
    box-shadow: 2px -2px 0px 0px #61CBDE, -2px 2px 0px 0px #FFA0E0;
    font-size: 1rem;
  }

  a {
    display: block;
  }

  li {
    transition: opacity 0.3s;
  }

  li:hover {
    opacity: 1 !important;
  }
`