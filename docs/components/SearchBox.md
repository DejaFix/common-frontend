# SearchBox

상단바 검색칸. Ctrl/Cmd+K로 포커스가 온다.

## Props

| 이름        | 타입                      | 기본값   | 설명                                                         |
| ----------- | ------------------------- | -------- | ------------------------------------------------------------ |
| value       | string                    | 필수     | 입력값                                                       |
| onChange    | `(value: string) => void` | 필수     | 입력 변경                                                    |
| onSubmit    | `(query: string) => void` | -        | Enter 시 앞뒤 공백을 뺀 검색어로 호출 (빈 값이면 호출 안 함) |
| placeholder | string                    | `'검색'` | 안내 글                                                      |
| hotkey      | boolean                   | true     | Ctrl/Cmd+K 포커스와 `Kbd` 표시. 한 화면에 하나만 켠다        |
| ariaLabel   | string                    | `'검색'` | 스크린리더용 이름                                            |

**DejaFix 대비 예외:** 한글을 입력하는 중(글자 조합 중)에 누른 Enter는 글자 확정이므로 검색하지 않는다. DejaFix에서는 조합 중 Enter로 검색이 먼저 실행되는 경우가 있어 유지한다.

## 사용 예시

```tsx
import { SearchBox } from '@dejafix/common-frontend'

;<SearchBox value={q} onChange={setQ} onSubmit={(v) => search(v)} placeholder="항목 · 담당 찾기" />
```

## 의존성

React, Icon, Kbd, hooks/useHotkey, `styles.css` (global.css, theme.css, shell.css의 `.search`)

## 원본 프로젝트

DejaFix
