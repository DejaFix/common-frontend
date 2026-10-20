# Button

기본 버튼(`Button`)과 상단바용 아이콘 링크(`IconButton`).

## Props

Button (button 요소의 모든 속성도 받는다)

| 이름    | 타입                               | 기본값      | 설명                                |
| ------- | ---------------------------------- | ----------- | ----------------------------------- |
| variant | `'default' \| 'primary' \| 'dark'` | `'default'` | `.btn`, `.btn.primary`, `.btn.dark` |
| size    | `'md' \| 'small'`                  | `'md'`      | small은 `.btn.small`                |
| icon    | IconName                           | -           | 글자 앞 아이콘 (16px)               |
| type    | string                             | `'button'`  | 폼 안에서 제출하려면 `submit`       |

IconButton (a 요소의 속성도 받는다)

| 이름  | 타입     | 기본값 | 설명                                  |
| ----- | -------- | ------ | ------------------------------------- |
| href  | string   | 필수   | 이동할 주소                           |
| icon  | IconName | 필수   | 아이콘 (20px)                         |
| label | string   | 필수   | 스크린리더용 이름 (`aria-label`)      |
| dot   | boolean  | false  | 오른쪽 위 점 (`<i class="bell-dot">`) |

## 사용 예시

```tsx
import { Button, IconButton } from '@dejafix/common-frontend'

<Button>기본</Button>
<Button variant="primary">저장</Button>
<Button variant="dark" icon="sparkle">도우미</Button>
<Button size="small" disabled>작게</Button>
<IconButton href="#/rules" icon="bell" label="알림" dot />
```

React 없이:

```html
<button type="button" class="btn">기본</button>
<button type="button" class="btn primary">저장</button>
<button type="button" class="btn dark small">강조</button>
<a href="#/rules" class="bell" aria-label="알림">[svg]<i class="bell-dot"></i></a>
```

## 의존성

React, Icon, `styles.css` (`.btn`은 global.css, `.bell`은 shell.css)

## 원본 프로젝트

DejaFix
