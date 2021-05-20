import { Alert, Header, Footer, PrimaryButton } from 'components/global'
import Link from 'next/link'
import { createContext } from 'react'

export const GlobalContext = createContext({})

const Layout = ({children, preview, layoutData}) => {
  const {
    navigation = { fields: { navigationItem: [] } },
    globals,
    footer
  } = layoutData

  return (
    <GlobalContext.Provider value={globals.fields}>
      <Header navigationData={navigation}/>
      <main role="main">
        { preview && <Alert/> }
        { children }
      </main>
      <Footer footerData={footer} />
    </GlobalContext.Provider>

  )
}

export default Layout