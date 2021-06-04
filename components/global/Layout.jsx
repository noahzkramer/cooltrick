import { Alert, Header, Footer, PrimaryButton } from 'components/global'
import Link from 'next/link'
import { createContext } from 'react'

export const GlobalContext = createContext({})

const Layout = ({children, preview, layoutData}) => {
  const { globals } = layoutData

  const {
    footerDisclaimer,
    footerNavigation,
    primaryNavigation
  } = globals.fields

  const footer = {
    footerNavigation,
    footerDisclaimer
  }

  return (
    <GlobalContext.Provider value={globals.fields}>
      <Header navigationData={primaryNavigation}/>
      <main role="main">
        { preview && <Alert/> }
        { children }
      </main>
      <Footer footerData={footer} />
    </GlobalContext.Provider>

  )
}

export default Layout