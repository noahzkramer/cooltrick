// Dependencies
import styled from 'styled-components'
import { Navigation } from 'components/global'

const Header = ({className, navigationData}) => {
  return (
    <footer className={`${className} py-12 bg-secondary`}>
      <div className="container">
        Footer
      </div>
    </footer>
  )
}

export default styled(Header)`
  // custom styles here
`