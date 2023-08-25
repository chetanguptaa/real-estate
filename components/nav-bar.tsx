import Link from 'next/link'
import Profile from './profile'

export async function NavBar() {
  return (
    <div className="shadow">
      <div className="container mx-auto flex items-center py-2 space-x-4">
        <Link href="/" className="py-1 px-2 pl-12">
          <span className="font-medium">Home</span>
        </Link>
        <span className="flex-grow" />
        <Profile />
      </div>
    </div>
  )
}