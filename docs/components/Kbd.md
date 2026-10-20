# Kbd

키보드 단축키 표시.

## Props

| 이름     | 타입      | 기본값 | 설명                   |
| -------- | --------- | ------ | ---------------------- |
| children | ReactNode | 필수   | 키 글자 (예: `Ctrl K`) |

## 사용 예시

```tsx
import { Kbd } from '@dejafix/common-frontend'

;<span>
  <Kbd>Ctrl K</Kbd> 검색칸으로 이동
</span>
```

React 없이:

```html
<span class="kbd">Ctrl K</span>
```

## 의존성

React, `styles.css` (global.css)

## 원본 프로젝트

DejaFix
