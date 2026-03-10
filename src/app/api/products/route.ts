import { cacheLife } from 'next/cache'
 
export async function GET() {
  const products = await getProducts()
  return Response.json(products)
}
 
async function getProducts() {
  'use cache'
  cacheLife('hours')
 
  return await db.query('SELECT * FROM products')
}