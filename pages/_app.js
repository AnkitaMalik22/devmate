import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
