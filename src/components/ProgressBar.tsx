import type { ReactNode } from 'react'
import { UnknownValue } from './UnknownValue'

export interface ProgressBarProps {
  /** 왼쪽 이름 */
  label: ReactNode
  /** null·undefined면 막대를 채우지 않고 '확인할 수 없음' */
  value: number | null | undefined
  max?: number
  /** 막대 색. CSS 색 값. 기본 var(--primary) */
  color?: string
  /** 오른쪽 숫자 표시. 기본은 퍼센트 */
  valueText?: (value: number, max: number) => ReactNode
}

const pct = (v: number, max: number) => (max > 0 ? Math.round((Math.min(Math.max(v, 0), max) / max) * 100) : 0)

/** 이름 | 막대 | 값 한 줄 (DejaFix .bar-row) */
export function ProgressBar({
  label,
  value,
  max = 100,
  color = 'var(--primary)',
  valueText = (v, m) => `${pct(v, m)}%`,
}: ProgressBarProps) {
  const known = typeof value === 'number' && Number.isFinite(value)
  return (
    <div className="bar-row">
      <span>{label}</span>
      <div
        className="bar-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={known ? Math.min(Math.max(value, 0), max) : undefined}
        aria-label={typeof label === 'string' ? label : undefined}
      >
        {known && <div className="bar-fill" style={{ width: `${pct(value, max)}%`, background: color }} />}
      </div>
      <span className="bar-value">{known ? valueText(value, max) : <UnknownValue label="" />}</span>
    </div>
  )
}
