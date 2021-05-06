// Dependencies
import styled from 'styled-components'
import Link from 'next/link'

const Navigation = ({data, className}) => {
  const { navigationElements } = data.fields

  return (
    <nav className={className}>
      <ul>
        {
          navigationElements.map(navItem => {
            let id = navItem.sys.id
            let name = navItem.fields.name
            let customLink = navItem.fields.customLink
            let link = navItem.fields.page?.fields.slug
            link = link === 'home' ? '/' : link
            link = customLink || link

            return (
              <li key={id}>
                <Link href={link || ''}>
                  <a>{name}</a>
                </Link>
              </li>
            )
          })  
        }
      </ul>
    </nav>
  )
}

export default styled(Navigation)`
  ul {
    display: flex;
    color: white;
    list-style-type: none;
    padding: 0;
    justify-content: 
  }

  li {
    &:not(:last-of-type) {
      margin-right: 2rem;
    }
  }

  a {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`