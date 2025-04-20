'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className='flex items-center space-x-3'>
        <Image
          src="/me.jpg"
          alt="Alberto Vildosola"
          width={64}
          height={64}
          className="rounded-full"
          priority
        />
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Alberto Vildosola
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Design + Engineering
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
