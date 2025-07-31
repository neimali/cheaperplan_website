import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CheaperPlan',
  description: 'Your smart planning assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}