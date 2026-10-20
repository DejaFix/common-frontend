import type { ReactNode } from 'react'
import { cx } from '../lib/cx'

/** neutral·green·amber는 DejaFix 원본 이름. red·blue는 DejaFix riskhigh·info와 같은 색의 범용 이름 */
export type ChipTone = 'neutral' | 'green' | 'amber' | 'red' | 'blue'

export interface ChipProps {
  tone?: ChipTone
  title?: string
  className?: string
  children: ReactNode
}

export function Chip({ tone = 'neutral', title, className, children }: ChipProps) {
  return (
    <span className={cx('chip', tone, className)} title={title}>
      {children}
    </span>
  )
}

/** 칩 여러 개를 줄바꿈 가능하게 묶는다 */
export function Chips({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <span className="chips" role={label ? 'group' : undefined} aria-label={label}>
      {children}
    </span>
  )
}
