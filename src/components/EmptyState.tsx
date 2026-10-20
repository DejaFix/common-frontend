import type { ReactNode } from 'react'

export interface EmptyStateProps {
  title: ReactNode
  /** 왜 비었는지, 무엇을 하면 되는지 */
  children?: ReactNode
  /** 다음 행동 버튼 */
  action?: ReactNode
}

/** 목록·검색 결과가 비었을 때 (DejaFix .empty) */
export function EmptyState({ title, children, action }: EmptyStateProps) {
  return (
    <div className="empty">
      <h2>{title}</h2>
      {children && <p>{children}</p>}
      {action && <div className="empty-action">{action}</div>}
    </div>
  )
}
