// Dependencies
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Navigation = ({data, className}) => {
  const { navigationItem } = data.fields

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

  return (
    <nav className={className}>
      <ul className="flex items-center">
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
              <li key={id} className={`mr-11 last:mr-0 text-tiny ${[...classes]}`}>
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

export default styled(Navigation)`
  .styled-btn a {
    background-color: white;
    color: black;
    padding: 13px 38px;
    border-radius: 2px;
    box-shadow: 2px -2px 0px 0px #61CBDE, -2px 2px 0px 0px #FFA0E0;
  }
`