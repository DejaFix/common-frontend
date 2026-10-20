# PageHeader
경로(crumb)와 페이지 제목 줄.

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| title | ReactNode | 필수 | `h1.page-title` |
| sub | ReactNode | - | `p.page-sub` |
| crumbs | `{ label: string; href?: string }[]` | - | `nav.crumb`, 항목 사이에 `' / '`. href 없는 항목(마지막)은 현재 페이지 |
| actions | ReactNode | - | 있으면 `.page-head.with-actions` 안 `.page-actions`(오른쪽) |

## 사용 예시
```tsx
import { PageHeader, Button } from '@dejafix/common-frontend'

<PageHeader
  crumbs={[{ label: '홈', href: '/' }, { label: '규칙' }]}
  title="규칙"
  sub="알림 조건을 관리합니다"
  actions={<Button variant="primary" icon="plus">새 규칙</Button>}
/>
```

## 의존성
React, `styles.css` (global.css)

## 원본 프로젝트
DejaFix, aiprj
