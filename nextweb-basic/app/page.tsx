import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1 className='text-4xl'>Helo Next.js</h1>
      <div className='pt-5'>
        <ul>
          <li><Link className='text-xl text-blue-700' href="/users">Users</Link></li>
          <li><Link className='text-xl text-blue-700' href="/about">About</Link></li>
        </ul>
        <ProductCard />
      </div>
    </main>
  )
}
