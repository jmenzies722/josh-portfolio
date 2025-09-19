import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  }

  return (
    <Link
      href="/"
      className={`group flex items-center justify-center rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/25 ${sizeClasses[size]} ${className}`}
    >
      <Image
        src="/IMG_2885.jpg"
        alt="Josh Menzies"
        width={48}
        height={48}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
      />
    </Link>
  )
}
