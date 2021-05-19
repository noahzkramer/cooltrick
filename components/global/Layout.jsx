import { Alert, Header, Footer, PrimaryButton } from 'components/global'
import Link from 'next/link'

const Layout = ({children, preview, layoutData}) => {
  
  const {
    navigation = { fields: { navigationItem: [] } },
    // footer
  } = layoutData

  return (
    <>
    <Header navigationData={navigation}/>
    <main role="main">
      { preview && <Alert/> }
      {children}
    </main>
    <Footer />
    </>
  )
}

export default Layout