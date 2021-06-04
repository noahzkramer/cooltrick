// Dependencies
import styled from 'styled-components'
import Link from 'next/link'
import { GlobalContext } from 'components/global/Layout'
import { useContext } from 'react'
import { PrimaryButton } from 'components/global/Buttons'
import { PrimaryNavigation } from 'components/global'

const MobileNavigation = ({data, className, setOpenMobileMenu}) => {
  const globals = useContext(GlobalContext)

  const handleClick = () => {
    setOpenMobileMenu(false)
  }

  return (
    <div className={`${className} fixed h-full w-full left-0 p-8 pt-40 bg-dark z-10 overflow-auto`}>
      <PrimaryNavigation data={data} />
    </div>
  )
}

export default styled(MobileNavigation)`
  /* top: 100px; */
`