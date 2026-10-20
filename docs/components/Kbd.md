# Kbd
키보드 단축키 표시 (`span.kbd`, DejaFix와 같음).

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| children | ReactNode | 필수 | 키 이름 (예: `Ctrl K`) |

## 사용 예시
```tsx
import { Kbd } from '@dejafix/common-frontend'

<p>검색은 <Kbd>Ctrl K</Kbd></p>
```
React 없이:
```html
<span class="kbd">Ctrl K</span>
```

## 의존성
React, `styles.css` (global.css)

## 원본 프로젝트
DejaFix
