# UserMenu

상단바 오른쪽 사용자 칸. 누르면 메뉴가 열리고 바깥 클릭이나 Esc로 닫힌다.

## Props

| 이름  | 타입                                        | 기본값 | 설명                          |
| ----- | ------------------------------------------- | ------ | ----------------------------- |
| name  | string                                      | 필수   | 이름                          |
| role  | string                                      | -      | 이름 위 작은 글씨 (역할·소속) |
| items | `{ label: string; onSelect: () => void }[]` | 필수   | 펼친 메뉴의 버튼들            |

1280px 이하에서는 아바타만 보인다. 아바타는 `user` 아이콘이다.

## 사용 예시

```tsx
import { UserMenu } from '@dejafix/common-frontend'

;<UserMenu name="홍길동" role="관리자" items={[{ label: '로그아웃', onSelect: logout }]} />
```

## 의존성

React, Icon, hooks/useDismiss, `styles.css` (shell.css)

## 원본 프로젝트

DejaFix
