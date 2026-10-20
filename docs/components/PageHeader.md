# PageHeader

페이지 제목 줄. 필요하면 위에 경로(crumb)를 붙인다.

## Props

| 이름   | 타입                                 | 기본값 | 설명                                                                      |
| ------ | ------------------------------------ | ------ | ------------------------------------------------------------------------- |
| title  | ReactNode                            | 필수   | 제목 (`h1.page-title`)                                                    |
| sub    | ReactNode                            | -      | 제목 아래 설명 (`p.page-sub`)                                             |
| crumbs | `{ label: string; href?: string }[]` | -      | 제목 위 경로. `div.crumb` 안에 ' / '로 이어지고 마지막 항목은 현재 페이지 |

## 사용 예시

```tsx
import { PageHeader } from '@dejafix/common-frontend'

;<PageHeader
  title="컴포넌트"
  sub="템플릿에 들어 있는 기본 요소 모음."
  crumbs={[{ label: '현황', href: '#/home' }, { label: '컴포넌트' }]}
/>
```

## 의존성

React, `styles.css` (global.css의 `.crumb`, `.page-head`)

## 원본 프로젝트

DejaFix
