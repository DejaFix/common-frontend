# SearchBox
상단바 검색칸. Ctrl/⌘+K로 포커스, Esc로 포커스 해제.

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| value | string | 필수 | 입력값 |
| onChange | (value: string) => void | 필수 | 입력 변경 |
| onSubmit | (query: string) => void | - | Enter 시 공백을 뺀 검색어로 호출 (빈 값이면 호출 안 함, 한글 조합 중 제외) |
| placeholder | string | `'검색'` | 안내 글 |
| hotkey | boolean | true | Ctrl K 단축키와 Kbd 표시. 한 화면에 하나만 켠다 |
| ariaLabel | string | `'검색'` | 스크린리더 이름 |

## 사용 예시
```tsx
import { SearchBox } from '@dejafix/common-frontend'

<SearchBox value={q} onChange={setQ} onSubmit={(v) => navigate(`/search?q=${v}`)} placeholder="항목 찾기" />
```

## 의존성
React, Icon, Kbd, useHotkey, `styles.css` (global.css, theme.css의 `.search`)

## 원본 프로젝트
DejaFix
