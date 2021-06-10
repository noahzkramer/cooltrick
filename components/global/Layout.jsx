import { Alert, Header, Footer, PrimaryButton } from 'components/global'
import Link from 'next/link'
import { createContext } from 'react'

export const GlobalContext = createContext({})

const Layout = ({children, preview, layoutData}) => {
  const { globals, artists } = layoutData

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
    <GlobalContext.Provider value={{...globals.fields, artists}}>
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