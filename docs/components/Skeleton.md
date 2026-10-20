# Skeleton
불러오는 중 자리 표시. 스크린리더에는 "불러오는 중"으로 읽힌다.

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| variant | `'block' \| 'line'` | `'block'` | block은 `.skeleton`, line은 `.skeleton-lines > .skeleton-line` |
| lines | number | 3 | line일 때 줄 수 (마지막 줄은 60%) |
| height | number | CSS 기본값 | block 높이(px) |

## 사용 예시
```tsx
import { Skeleton } from '@dejafix/common-frontend'

{loading ? <Skeleton height={160} /> : <Content />}
{loading && <Skeleton variant="line" lines={4} />}
```
React 없이:
```html
<div class="skeleton" role="status" aria-label="불러오는 중"></div>
<div class="skeleton-lines" role="status" aria-label="불러오는 중">
  <span class="skeleton-line"></span><span class="skeleton-line" style="width:60%"></span>
</div>
```

## 의존성
React, `styles.css` (global.css)

## 원본 프로젝트
DejaFix
