import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative size-16">
        <Image
          src="/images/main-logo.png"
          alt="main logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-semibold leading-none text-gray-900">HAYLE BARISE</span>
        <span className="text-sm text-gray-600">TECHNICAL DEVELOPMENT CENTER</span>
      </div>
    </Link>
  )
}

