# TopNav
사이드바 없는 가로 메뉴 헤더. 메뉴가 적은 소개·도구형 화면에 쓴다. 700px 이하에서 메뉴가 둘째 줄로 내려간다.

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| brand | `Brand` = `{ name: string; logoSrc?: string; logo?: ReactNode }` | 필수 | AppShell과 같은 객체. logoSrc는 32x32 이미지 |
| links | `NavItem[]` | 필수 | `href`·`label`·`active`만 쓴다 (icon·badge·soon은 사이드바 전용이라 무시) |
| renderLink | LinkRenderer | `defaultLink` (`<a>`) | 라우터 링크로 바꿀 때 |
| end | ReactNode | - | 오른쪽 끝 (버튼, UserMenu) |
| skipTo | string | - | '본문으로 건너뛰기' 대상 (예: `'#main-content'`). 본문에 그 id를 붙였을 때만 넣는다 |

## 사용 예시
```tsx
import { Link } from 'react-router-dom'
import { TopNav, UserMenu } from '@dejafix/common-frontend'

<TopNav
  brand={{ name: 'Common', logoSrc: '/logo.svg' }}
  links={[{ href: '/', label: '소개', active: true }, { href: '/tools', label: '도구' }]}
  renderLink={({ item, className, children }) => <Link to={item.href} className={className}>{children}</Link>}
  end={<UserMenu name="홍길동" items={[{ label: '로그아웃', onSelect: logout }]} />}
/>
```

## 의존성
React, Brand/NavItem 타입(AppShell, nav), `styles.css` (shell.css)

## 원본 프로젝트
aiprj
