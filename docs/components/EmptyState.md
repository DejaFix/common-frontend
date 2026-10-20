# EmptyState
목록·검색 결과가 비었을 때의 안내 (`.empty`).

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| title | ReactNode | 필수 | `h2` |
| children | ReactNode | - | `p` 설명 (왜 비었는지, 무엇을 하면 되는지) |
| action | ReactNode | - | 다음 행동 버튼 (`.empty-action`) |

## 사용 예시
```tsx
import { EmptyState, Button } from '@dejafix/common-frontend'

<EmptyState title="항목이 없습니다" action={<Button variant="primary">새로 만들기</Button>}>
  조건을 바꾸거나 새 항목을 만들어 보세요.
</EmptyState>
```

## 의존성
React, `styles.css` (global.css)

## 원본 프로젝트
DejaFix, aiprj
