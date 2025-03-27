import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Site Maintenance',
  description: 'Site Maintenance',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
