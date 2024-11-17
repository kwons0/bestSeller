import Navigation from "../components/navigation"
import '../css/global.css'

export const metadata = {
  description: 'The New York Times Best Seller Explorer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        <div className="page">{children}</div>
      </body>
    </html>
  )
}
