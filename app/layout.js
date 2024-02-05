import { Inter } from 'next/font/google'
import './globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import muiTheme from '@/style/theme'
import { Toaster } from 'react-hot-toast'
import { LoggedUserContextProvider } from './context/LoggedUserContextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test Formentin',
  description: 'Front-end test - Formentin Luca',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider theme={muiTheme}>
          <LoggedUserContextProvider>{children}</LoggedUserContextProvider>
          <CssBaseline />
          <Toaster toastOptions={{ duration: 3000 }} />
        </ThemeProvider>
      </body>
    </html>
  )
}
