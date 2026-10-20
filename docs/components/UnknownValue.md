# UnknownValue
받지 못했거나 확인되지 않은 값을 표시한다. 0이나 빈칸으로 대신하지 않는다.

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| label | string | `'확인할 수 없음'` | 표시 글 (`span.unknown`) |

## 사용 예시
```tsx
import { UnknownValue } from '@dejafix/common-frontend'

{count ?? <UnknownValue />}
```
StatCard, ProgressBar는 값이 null이면 자동으로 이것을 쓴다.

## 의존성
React, `styles.css` (global.css)

## 원본 프로젝트
DejaFix
