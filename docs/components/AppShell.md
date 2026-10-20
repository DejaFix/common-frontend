# AppShell

어두운 사이드바(접기) + 상단바 + 본문 + 오른쪽 패널로 이루어진 화면 뼈대.

## Props

| 이름       | 타입                                                   | 기본값                     | 설명                                                                              |
| ---------- | ------------------------------------------------------ | -------------------------- | --------------------------------------------------------------------------------- |
| brand      | `{ name: string; logoSrc?: string; logo?: ReactNode }` | 필수                       | 사이드바 위쪽 이름과 로고. `logoSrc`는 32x32 이미지 주소, `logo`는 직접 그린 로고 |
| nav        | `NavItem[]`                                            | 필수                       | 메뉴. `{ href, label, icon?, active?, badge?, soon? }`                            |
| renderLink | `LinkRenderer`                                         | `defaultLink` (`<a href>`) | 라우터 링크로 바꿀 때 사용. `({ item, className, children }) => ReactNode`        |
| topbar     | ReactNode                                              | -                          | 상단바 안 요소들. 순서대로 놓인다                                                 |
| panel      | `{ open, title, sub?, onClose, children, footer? }`    | -                          | 오른쪽에서 밀고 들어오는 패널. open이면 본문이 왼쪽으로 밀린다                    |
| storageKey | string                                                 | -                          | 사이드바 접힘 상태를 기억할 localStorage 키. 비우면 기억하지 않음                 |
| banner     | ReactNode                                              | -                          | 상단바 아래 전역 안내 띠                                                          |
| children   | ReactNode                                              | 필수                       | 본문                                                                              |

- 알림(Toast)은 자동으로 놓이지 않는다. `topbar` 안 원하는 자리에 `<ToastOutlet />`을 둔다.
- 상단바에서 남는 폭을 채울 요소에는 `style={{ flex: 1, minWidth: 0 }}`를 준다.
- 900px 이하에서는 사이드바 대신 가로 메뉴(`nav.mobile-nav`)가 나온다.
- 테마는 `<html data-theme="light|dark">`로 강제한다. 속성이 없으면 OS 설정을 따른다.

## 사용 예시

```tsx
import { AppShell, ToastOutlet, SearchBox, UserMenu, IconButton, Button, type NavItem } from '@dejafix/common-frontend'

const nav: NavItem[] = [
  { href: '#/home', label: '현황', icon: 'dashboard', active: true, badge: 5 },
  { href: '#/rules', label: '알림 규칙', icon: 'bell' },
  { href: '#/soon', label: '관리', icon: 'admin', soon: true },
]

<AppShell
  brand={{ name: 'Common', logoSrc: '/logo.svg' }}
  nav={nav}
  storageKey="app.sidebar"
  topbar={
    <>
      <span style={{ flex: 1, minWidth: 0 }}>확인 10-20 13:05</span>
      <ToastOutlet />
      <SearchBox value={q} onChange={setQ} />
      <UserMenu name="홍길동" role="관리자" items={[{ label: '로그아웃', onSelect: logout }]} />
      <IconButton href="#/rules" icon="bell" label="알림" dot />
      <Button variant="dark" icon="sparkle" onClick={() => setPanel(true)}>도우미</Button>
    </>
  }
  panel={{ open: panel, title: '도우미', sub: '설명', onClose: () => setPanel(false), children: <p>내용</p> }}
>
  {page}
</AppShell>
```

## 의존성

React, Icon, `styles.css` (global.css, shell.css). `useToast`/`ToastOutlet`을 쓰려면 바깥에 ToastProvider가 필요하다.

## 원본 프로젝트

DejaFix
