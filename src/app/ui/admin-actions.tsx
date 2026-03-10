import { verifySession } from '@/app/lib/dal'
 
export default async function AdminActions() {
  const session = await verifySession()
  const userRole = session?.user?.role
 
  if (userRole !== 'admin') {
    return null
  }
 
  return (
    <div>
      <button>Delete User</button>
      <button>Edit Settings</button>
    </div>
  )
}