# Notice
화면 안 안내 띠 (`.note`). warn·bad는 role="alert", 나머지는 role="status".

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| tone | `'info' \| 'warn' \| 'ok' \| 'bad'` | `'info'` | 색. info는 추가 클래스 없음 |
| icon | IconName | - | 앞 아이콘 (예: `'bell'`) |
| children | ReactNode | 필수 | 내용 (`.note-body`) |
| onClose | () => void | - | 있으면 닫기 버튼 `.note-close` |
| className | string | - | 추가 클래스 |

## 사용 예시
```tsx
import { Notice } from '@dejafix/common-frontend'

<Notice tone="warn" icon="alert" onClose={() => setShow(false)}>
  일부 데이터가 늦게 도착하고 있습니다.
</Notice>
```
React 없이:
```html
<div class="note warn" role="alert">
  <div class="note-body">일부 데이터가 늦게 도착하고 있습니다.</div>
</div>
```

## 의존성
React, Icon, `styles.css` (global.css)

## 원본 프로젝트
DejaFix, aiprj
