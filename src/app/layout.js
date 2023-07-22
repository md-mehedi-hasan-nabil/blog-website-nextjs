import './globals.css'
import { Inter } from 'next/font/google'
import "flowbite"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Web Site | Create Next App',
  description: 'Generated by next app',
  author: "Md. Mehedi Hasan Nabil"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} transition-all`}>
        {children}
      </body>
    </html>
  )
}
