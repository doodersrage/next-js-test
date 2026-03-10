import { cookies } from 'next/headers'
import { Suspense } from 'react'
 
export default function Page() {
  // Page itself creates the dynamic boundary
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileContent />
    </Suspense>
  )
}
 
// Component (not cached) reads runtime data
async function ProfileContent() {
  const session = (await cookies()).get('session')?.value
 
  return <CachedContent sessionId={session} />
}
 
// Cached component/function receives data as props
async function CachedContent({ sessionId }: { sessionId: string }) {
  'use cache'
  // sessionId becomes part of cache key
  const data = await fetchUserData(sessionId)
  return <div>{data}</div>
}