// Dependencies
import styled from 'styled-components'
import { Navigation } from 'components/global'

const Header = ({className, navigationData}) => {
  return (
    <header className={className}>
      <div className="logo">logo</div>
      <Navigation data={navigationData} />
    </header>
  )
}

export default styled(Header)`
  position: fixed;
  left: 0;
  right: 0;
  padding: 4.25rem 6.25rem;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
  z-index: 1040;
`