# Skeleton

불러오는 중 자리 표시 (움직이는 회색 상자).

## Props

| 이름   | 타입   | 기본값 | 설명                             |
| ------ | ------ | ------ | -------------------------------- |
| height | number | 120    | 높이 px (`.skeleton` 기본 120px) |

상자 하나만 그린다.

**DejaFix 대비 예외:** `aria-label="불러오는 중"`. 빈 상자만으로는 스크린리더가 아무것도 읽지 않아 이름을 붙인다. 화면 모양은 DejaFix와 같다.

## 사용 예시

```tsx
import { Skeleton } from '@dejafix/common-frontend'

{
  loading ? <Skeleton height={60} /> : <Content />
}
```

React 없이:

```html
<div class="skeleton" aria-label="불러오는 중" style="height:60px"></div>
```

## 의존성

React, `styles.css` (global.css, 색은 theme.css의 `--skeleton-a`, `--skeleton-b`)

## 원본 프로젝트

DejaFix
