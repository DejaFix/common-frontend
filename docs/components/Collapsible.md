# Collapsible
눌러서 펼치고 접는 구역. 열려 있을 때만 내용을 그린다.

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| title | ReactNode | 필수 | 제목 |
| count | number | - | 제목 옆 개수 (굵게) |
| countUnit | string | `''` | 개수 뒤 단위 (예: `'건'`) |
| meta | ReactNode | - | 제목 옆 흐린 설명 |
| defaultOpen | boolean | false | 처음부터 열기 |
| id | string | - | 바깥 요소 id |
| children | ReactNode | 필수 | 펼쳤을 때 내용 |

## 사용 예시
```tsx
import { Collapsible } from '@dejafix/common-frontend'

<Collapsible title="확인 필요" count={3} countUnit="건" meta="최근 24시간" defaultOpen>
  <div className="list-card">{/* .alert-row 목록 (ListRow.md) */}</div>
</Collapsible>
```

## 의존성
React, Icon, `styles.css` (global.css, theme.css)

## 원본 프로젝트
DejaFix
