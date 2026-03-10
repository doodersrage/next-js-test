export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
 
// Conflict
// `app/route.ts`
export async function POST(request: Request) {}