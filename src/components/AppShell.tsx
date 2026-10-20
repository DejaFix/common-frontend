import { useContext, useState, type ReactNode } from 'react'
import { cx } from '../lib/cx'
import { Icon } from './Icon'
import { defaultLink, type LinkRenderer, type NavItem } from './nav'
import { ToastOutlet } from './Toast'
import { ToastContext } from './toastContext'

export interface Brand {
  name: string
  /** 32x32 로고 이미지 주소 */
  logoSrc?: string
  /** 이미지 대신 직접 그린 로고 */
  logo?: ReactNode
}

export interface SidePanel {
  open: boolean
  title: ReactNode
  /** 제목 아래 작은 글씨 */
  sub?: ReactNode
  onClose: () => void
  children: ReactNode
  /** 아래 고정 영역 (입력칸 등) */
  footer?: ReactNode
}

export interface AppShellProps {
  brand: Brand
  nav: NavItem[]
  /** 라우터 링크로 바꿀 때 (nav.tsx의 LinkRenderer 참고) */
  renderLink?: LinkRenderer
  /** 상단바 왼쪽 칸: 남는 폭을 차지한다 (현재 상태 한 줄, 제목 등) */
  topbarLead?: ReactNode
  /** 상단바 오른쪽 요소들 (SegmentedControl, SearchBox, UserMenu, IconButton, 버튼). 순서대로 놓인다 */
  topbar?: ReactNode
  /** 사이드바 맨 아래 글 */
  sidebarFooter?: ReactNode
  /** 오른쪽에서 밀고 들어오는 패널 (DejaFix AI 어시스턴트 패널의 틀). open이면 본문이 왼쪽으로 밀린다 */
  panel?: SidePanel
  /** 사이드바 접힘 상태를 기억할 localStorage 키. 비우면 기억하지 않는다 */
  storageKey?: string
  /** 상단바 아래 전역 안내 띠 */
  banner?: ReactNode
  children: ReactNode
}

function readCollapsed(key?: string): boolean {
  if (!key) return false
  try {
    return localStorage.getItem(key) === 'collapsed'
  } catch {
    return false
  }
}

/**
 * DejaFix 화면 뼈대: 어두운 사이드바(접기) + 상단바 + 본문 + 오른쪽 패널.
 * 900px 이하에서는 사이드바 대신 가로 메뉴가 나온다. ToastProvider 안에 있으면 상단바에 알림 자리를 둔다.
 */
export function AppShell({
  brand,
  nav,
  renderLink = defaultLink,
  topbarLead,
  topbar,
  sidebarFooter,
  panel,
  storageKey,
  banner,
  children,
}: AppShellProps) {
  const hasToast = useContext(ToastContext) !== null
  const [collapsed, setCollapsed] = useState(() => readCollapsed(storageKey))
  const toggleSidebar = () =>
    setCollapsed((v) => {
      if (storageKey) {
        try {
          localStorage.setItem(storageKey, v ? 'open' : 'collapsed')
        } catch {
          /* 저장이 막혀도 화면은 동작한다 */
        }
      }
      return !v
    })

  return (
    <div className={`shell${collapsed ? ' collapsed' : ''}`}>
      <a className="skip-link" href="#main-content">
        본문으로 건너뛰기
      </a>
      <aside className="sidebar">
        <div className="side-top">
          <button
            type="button"
            className="hamburger"
            aria-label={collapsed ? '메뉴 펼치기' : '메뉴 접기'}
            aria-expanded={!collapsed}
            onClick={toggleSidebar}
          >
            <Icon name="menu" size={20} />
          </button>
          {brand.logoSrc ? (
            <img className="brand-logo" src={brand.logoSrc} alt="" width={32} height={32} />
          ) : brand.logo ? (
            <span className="brand-logo" aria-hidden="true">
              {brand.logo}
            </span>
          ) : null}
          <span className="brand-name">{brand.name}</span>
        </div>
        <nav aria-label="주 메뉴" style={{ display: 'contents' }}>
          {nav.map((item) => (
            <span
              key={`${item.href}|${item.label}`}
              title={collapsed ? item.label : undefined}
              style={{ display: 'contents' }}
            >
              {renderLink({
                item,
                className: cx('nav-item', item.active && 'active'),
                children: (
                  <>
                    {item.icon && <Icon name={item.icon} />}
                    <span className="nav-label">{item.label}</span>
                    {item.soon ? <span className="nav-soon">준비 중</span> : null}
                    {item.badge ? <span className="nav-badge">{item.badge}</span> : null}
                  </>
                ),
              })}
            </span>
          ))}
        </nav>
        {sidebarFooter && <div className="sidebar-foot">{sidebarFooter}</div>}
      </aside>

      <div className={`main ${panel?.open ? 'panel-open' : ''}`}>
        <header className="topbar">
          <div className="topbar-lead">{topbarLead}</div>
          {hasToast && <ToastOutlet />}
          {topbar}
        </header>
        <nav className="mobile-nav" aria-label="메뉴">
          {nav.map((item) => (
            <span key={`${item.href}|${item.label}`} style={{ display: 'contents' }}>
              {renderLink({
                item,
                className: cx(item.active && 'active'),
                children: `${item.label}${item.soon ? ' (준비 중)' : ''}`,
              })}
            </span>
          ))}
        </nav>
        {banner}
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </div>

      {panel && (
        <aside
          className={`assistant ${panel.open ? 'open' : ''}`}
          aria-label={typeof panel.title === 'string' ? panel.title : undefined}
          aria-hidden={!panel.open}
        >
          <div className="assistant-head">
            <div>
              <div className="assistant-title">{panel.title}</div>
              {panel.sub && <div className="assistant-sub">{panel.sub}</div>}
            </div>
            <button type="button" className="btn small" onClick={panel.onClose} aria-label="닫기">
              <Icon name="close" size={14} />
            </button>
          </div>
          <div className="assistant-body">{panel.children}</div>
          {panel.footer && <div className="assistant-foot">{panel.footer}</div>}
        </aside>
      )}
    </div>
  )
}
