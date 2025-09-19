import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'accent'
}

const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
          {
            'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200': variant === 'default',
            'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200': variant === 'secondary',
            'bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200': variant === 'accent',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Tag.displayName = 'Tag'

export { Tag }
