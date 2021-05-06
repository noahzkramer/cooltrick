import { Alert, Header } from 'components/global'

const Layout = ({children, preview, navigationData}) => {
  return (
    <>
    <Header navigationData={navigationData} />
    <main role="main">
      { preview && <Alert/> }
      {children}
    </main>
    </>
  )
}

export default Layout