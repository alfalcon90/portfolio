'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <Link href="/" className='flex items-center space-x-3'>
        <Image
          src="/me.jpg"
          alt="Alberto Vildosola"
          width={64}
          height={64}
          className="rounded-full"
          priority
        />
        <div className='space-y-1'>
          <div className="text-title" >
            Alberto Vildosola
          </div>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-overline"
            delay={0.5}
          >
            UX Design Engineer
          </TextEffect>
        </div>
      </Link>
    </header>
  )
}
