import { cookies } from 'next/headers'
import { deleteSession } from '@/app/lib/session'
 
export async function logout() {
  await deleteSession()
  redirect('/login')
}