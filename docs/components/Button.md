# Button
버튼과 아이콘 전용 버튼(IconButton).

## Props
Button (button의 모든 속성 포함)

| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| variant | `'default' \| 'primary' \| 'dark' \| 'ghost' \| 'danger'` | `'default'` | 모양 |
| size | `'md' \| 'small'` | `'md'` | small은 `.small` |
| block | boolean | false | 가로 꽉 채우기 |
| icon | IconName | - | 글자 앞 아이콘 |
| loading | boolean | false | 누를 수 없고 `aria-busy` |

IconButton (클래스 `bell`)

| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| icon | IconName | 필수 | 아이콘 |
| label | string | 필수 | 스크린리더 이름 |
| dot | boolean | false | 오른쪽 위 점 `bell-dot` |

## 사용 예시
```tsx
import { Button, IconButton } from '@dejafix/common-frontend'

<Button variant="primary" icon="plus" onClick={add}>추가</Button>
<Button variant="dark" size="small" loading={saving}>저장</Button>
<IconButton icon="bell" label="알림" dot />
```
React 없이:
```html
<button class="btn primary">추가</button>
<button class="btn danger small">삭제</button>
<button class="bell" aria-label="알림"><i class="bell-dot"></i></button>
```

## 의존성
React, `styles.css` (global.css의 `.btn`, shell.css의 `.bell`), Icon

## 원본 프로젝트
DejaFix, aiprj
