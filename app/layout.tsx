import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cargo',
  description: 'Example SPA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="text-3xl font-bold text-center text-white p-4 bg-blue-700 mb-3">
          Cargo
        </header>
          <div className="my-0 mx-auto p-3 w-5/6">
            {children}
          </div>
          <footer className="text-3xl font-bold bg-blue-700 text-white text-center p-4 mt-auto">
            All rights reserved ®
          </footer>
      </body>
    </html>
  )
}
