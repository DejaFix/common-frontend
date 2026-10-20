import { Fragment, type ReactNode } from 'react'
import { cx } from '../lib/cx'

export interface Crumb {
  label: string
  href?: string
}

export interface PageHeaderProps {
  title: ReactNode
  sub?: ReactNode
  /** 제목 위 경로. 마지막 항목은 현재 페이지 */
  crumbs?: Crumb[]
  /** 제목 오른쪽 버튼 영역 */
  actions?: ReactNode
}

/** 페이지 제목 줄 (DejaFix .crumb + .page-head > .page-title + .page-sub) */
export function PageHeader({ title, sub, crumbs, actions }: PageHeaderProps) {
  const text = (
    <div>
      <h1 className="page-title">{title}</h1>
      {sub && <p className="page-sub">{sub}</p>}
    </div>
  )
  return (
    <>
      {crumbs && crumbs.length > 0 && (
        <nav className="crumb" aria-label="경로">
          {crumbs.map((c, i) => (
            <Fragment key={`${c.label}-${i}`}>
              {i > 0 && ' / '}
              {c.href ? <a href={c.href}>{c.label}</a> : <span aria-current="page">{c.label}</span>}
            </Fragment>
          ))}
        </nav>
      )}
      <header className={cx('page-head', actions ? 'with-actions' : undefined)}>
        {actions ? (
          <>
            {text}
            <div className="page-actions">{actions}</div>
          </>
        ) : (
          <>
            <h1 className="page-title">{title}</h1>
            {sub && <p className="page-sub">{sub}</p>}
          </>
        )}
      </header>
    </>
  )
}
