import type { Metadata } from 'next'
import "./ui/scss/style.scss";
import { StateProvider } from './ui/redux/state';

export const metadata: Metadata = {
  title: 'Muzak: Music The Easy Way',
  description: 'Muzak is a quick and easy way to discover and listen to some of the biggest hits from artists you love.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <main>
            <StateProvider>
              {children}
            </StateProvider>
          </main>
      </body>
    </html>
  )
}
