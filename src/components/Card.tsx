import type { ReactNode } from 'react'
import { cx } from '../lib/cx'

export interface CardProps {
  title?: ReactNode
  sub?: ReactNode
  /** 제목 줄 오른쪽 (버튼 등) */
  actions?: ReactNode
  /** 주면 카드 전체가 버튼이 된다. 이때 actions 안에 버튼을 넣지 않는다. */
  onClick?: () => void
  as?: 'div' | 'section' | 'article'
  className?: string
  children?: ReactNode
}

export function Card({ title, sub, actions, onClick, as: Tag = 'div', className, children }: CardProps) {
  const head =
    title || sub || actions ? (
      <div className="card-head">
        {title && <h2 className="card-title">{title}</h2>}
        {sub && <span className="card-sub">{sub}</span>}
        {actions && <div className="card-actions">{actions}</div>}
      </div>
    ) : null
  if (onClick) {
    return (
      <button type="button" className={cx('card', className)} onClick={onClick}>
        {head}
        {children}
      </button>
    )
  }
  return (
    <Tag className={cx('card', className)}>
      {head}
      {children}
    </Tag>
  )
}
