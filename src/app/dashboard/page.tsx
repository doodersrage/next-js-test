import { verifySession } from '@/app/lib/dal'
 
export default async function DashboardPage() {
  const session = await verifySession()
 
  // Fetch user-specific data from your database or data source
  const user = await getUserData(session.userId)
 
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      {/* Dashboard content */}
    </div>
  )
}