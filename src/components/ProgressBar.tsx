import type { ReactNode } from 'react'

export interface ProgressBarProps {
  /** 왼쪽 이름 */
  label: ReactNode
  /** null·undefined면 막대를 채우지 않고 '확인 불가' (0으로 바꾸지 않는다) */
  value: number | null | undefined
  max?: number
  /** 막대 색. CSS 색 값. 기본 var(--primary) */
  color?: string
  /** 오른쪽 글. 기본은 퍼센트 */
  valueText?: (value: number, max: number) => ReactNode
}

const pct = (v: number, max: number) => (max > 0 ? Math.round((Math.min(Math.max(v, 0), max) / max) * 100) : 0)

/** 이름 | 막대 | 값 한 줄. DejaFix 마크업: .bar-row > span + .bar-track > .bar-fill + span */
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
      <div className="bar-track">
        {known && <div className="bar-fill" style={{ width: `${pct(value, max)}%`, background: color }} />}
      </div>
      <span>{known ? valueText(value, max) : <span className="card-sub">확인 불가</span>}</span>
    </div>
  )
}
