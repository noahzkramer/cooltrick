// styles
import 'tailwindcss/tailwind.css'
import 'styles/main.css'

// Components
import { Head } from 'components/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
