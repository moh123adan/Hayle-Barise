import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative size-12">
        <Image
          src="/images/logo.png"
          alt="Ridgeview Middle School"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-semibold leading-none text-gray-900">Ridgeview</span>
        <span className="text-sm text-gray-600">Middle School</span>
      </div>
    </Link>
  )
}

