import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Desc',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav className='w-full text-xl px-2 shadow bg-lime-400'>
        about＞
      </nav>
      <div className='px-2 py-3 w-full text-center align-middle bg-sky-100'>
        {children}
      </div>
    </div>
  )
}
