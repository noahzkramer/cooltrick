// Dependencies
import styled from 'styled-components'
import { Navigation } from 'components/global'
import SVG from 'react-inlinesvg'
import Link from 'next/link'

const Header = ({className, navigationData}) => {
  return (
    <header className={`${className} fixed left-0 right-0 flex items-center`}>
      <div className="logo">
        <Link href="/">
          <a>
            <SVG src="/svg/logo.svg" />
          </a>
        </Link>
      </div>
      <Navigation data={navigationData} />
    </header>
  )
}

export default styled(Header)`
  padding: 4.25rem 6.25rem;
  padding-bottom: 0;
  justify-content: space-between;
  z-index: 1040;
`