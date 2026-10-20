import type { ReactNode } from 'react'
import { cx } from '../lib/cx'
import type { Brand } from './AppShell'
import { defaultLink, type LinkRenderer, type NavItem } from './nav'

export interface TopNavProps {
  brand: Brand
  /** 메뉴. NavItem 중 href·label·active만 쓴다 (icon·badge·soon은 사이드바 전용) */
  links: NavItem[]
  renderLink?: LinkRenderer
  /** 오른쪽 끝 (버튼, UserMenu) */
  end?: ReactNode
  /** '본문으로 건너뛰기' 링크의 대상 (예: '#main-content'). 본문에 그 id를 붙였을 때만 넣는다 */
  skipTo?: string
}

/**
 * [aiprj] 사이드바 없는 가로 메뉴형 헤더. 메뉴가 적은 소개·도구형 화면에 쓴다.
 * 구조는 aiprj, 모양은 DejaFix 상단바·메뉴 토큰을 따른다. 700px 이하에서 메뉴가 둘째 줄로 내려간다.
 */
export function TopNav({ brand, links, renderLink = defaultLink, end, skipTo }: TopNavProps) {
  return (
    <header className="topnav">
      {skipTo && (
        <a className="skip-link" href={skipTo}>
          본문으로 건너뛰기
        </a>
      )}
      <div className="topnav-brand">
        {brand.logoSrc ? (
          <img className="brand-logo" src={brand.logoSrc} alt="" width={32} height={32} />
        ) : brand.logo ? (
          <span className="brand-logo" aria-hidden="true">
            {brand.logo}
          </span>
        ) : null}
        <span className="brand-name">{brand.name}</span>
      </div>
      <nav className="topnav-links" aria-label="주 메뉴">
        {links.map((item) => (
          <span key={`${item.href}|${item.label}`} style={{ display: 'contents' }}>
            {renderLink({ item, className: cx(item.active && 'active'), children: item.label })}
          </span>
        ))}
      </nav>
      {end && <div className="topnav-end">{end}</div>}
    </header>
  )
}
