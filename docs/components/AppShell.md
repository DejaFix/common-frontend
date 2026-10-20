# AppShell
화면 뼈대: 어두운 사이드바(접기) + 상단바 + 본문 + 오른쪽 패널. 900px 이하에서는 사이드바 대신 가로 메뉴가 나온다. ToastProvider 안에 있으면 상단바에 알림 자리를 자동으로 둔다.

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| brand | `{ name: string; logoSrc?: string; logo?: ReactNode }` | 필수 | 로고(32x32 이미지 또는 직접 그린 노드)와 이름 |
| nav | `NavItem[]` | 필수 | `{ href, label, icon?, active?, badge?, soon? }` |
| renderLink | LinkRenderer | `defaultLink` (`<a>`) | 라우터 링크로 바꿀 때 |
| topbarLead | ReactNode | - | 상단바 왼쪽 칸 (남는 폭 차지) |
| topbar | ReactNode | - | 상단바 오른쪽 요소들 (SegmentedControl, SearchBox, UserMenu, IconButton, Button) |
| sidebarFooter | ReactNode | - | 사이드바 맨 아래 글 |
| panel | `{ open, title, sub?, onClose, children, footer? }` | - | 오른쪽 `.assistant` 패널. open이면 본문이 왼쪽으로 밀림 |
| storageKey | string | - | 사이드바 접힘을 기억할 localStorage 키. 비우면 기억 안 함 |
| banner | ReactNode | - | 상단바 아래 전역 안내 띠 (Notice 등) |
| children | ReactNode | 필수 | 본문 |

## 사용 예시
```tsx
import { Link, useLocation } from 'react-router-dom'
import { AppShell, ToastProvider, Button, IconButton, UserMenu } from '@dejafix/common-frontend'

const { pathname } = useLocation()
const [panel, setPanel] = useState(false)

<ToastProvider>
  <AppShell
    brand={{ name: 'Common', logoSrc: '/logo.svg' }}
    nav={[{ href: '/', label: '현황', icon: 'dashboard', active: pathname === '/', badge: 5 }]}
    renderLink={({ item, className, children }) => <Link to={item.href} className={className}>{children}</Link>}
    storageKey="app.sidebar"
    topbarLead={<span className="topbar-time">확인 10-20 13:05</span>}
    topbar={<>
      <UserMenu name="홍길동" role="관리자" items={[{ label: '로그아웃', onSelect: logout }]} />
      <IconButton icon="bell" label="알림" dot />
      <Button variant="dark" icon="sparkle" onClick={() => setPanel(true)}>도우미</Button>
    </>}
    panel={{ open: panel, title: '도우미', sub: '무엇이든 물어보세요', onClose: () => setPanel(false), children: <p>내용</p> }}
  >
    {page}
  </AppShell>
</ToastProvider>
```

## 의존성
React, Icon, Toast(ToastOutlet), nav 타입, `styles.css` (shell.css, global.css)

## 원본 프로젝트
DejaFix
