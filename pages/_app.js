import '../styles/globals.css'
import Navbar from '../Components/Navbar'

function MyApp({ Component, pageProps }) {

  return(
    <>
      {/* <Navbar/> */}
      <Component {...pageProps} />
    </>
  )
  
}

export default MyApp
