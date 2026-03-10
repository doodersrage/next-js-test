import UserProvider from './user-provider'
import { getUser } from './lib/user'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userPromise = getUser() // Don't await
 
  return (
    <html>
      <body>
        <UserProvider userPromise={userPromise}>{children}</UserProvider>
      </body>
    </html>
  )
}