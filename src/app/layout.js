import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Providers from './Providers'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'This is the IMDB Clone Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body>
        <Providers>
          {/* Header */}
          <Header/>
          {/* Navbar */}

          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
