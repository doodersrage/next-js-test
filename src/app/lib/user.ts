import { cache } from 'react'
 
export const getUser = cache(async () => {
  const res = await fetch('http://192.168.12.10/user')
  return res.json()
})