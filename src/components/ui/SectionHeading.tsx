import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { staggerContainer, staggerItem, viewportOnce } from '@/utils/motion'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
  action?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  action,
}: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        'flex flex-col gap-4',
        centered && 'items-center text-center',
        !centered && Boolean(action) && 'md:flex-row md:items-end md:justify-between',
        className,
      )}
    >
      <div className={cn('max-w-2xl', centered && 'mx-auto')}>
        <motion.span variants={staggerItem} className="eyebrow">
          {eyebrow}
        </motion.span>
        <motion.h2
          variants={staggerItem}
          className="display mt-4 text-3xl leading-[1.1] sm:text-4xl md:text-[2.75rem]"
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p
            variants={staggerItem}
            className="mt-4 text-base leading-relaxed text-ink-muted text-pretty sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
      {action && (
        <motion.div variants={staggerItem} className="shrink-0">
          {action}
        </motion.div>
      )}
    </motion.div>
  )
}
