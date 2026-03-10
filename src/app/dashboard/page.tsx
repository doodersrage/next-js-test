import { getUser } from '../lib/user'
 
export default async function DashboardPage() {
  const user = await getUser() // Cached - same request, no duplicate fetch
  return <h1>Dashboard for {user.name}</h1>
}