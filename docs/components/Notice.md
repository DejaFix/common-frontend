# Notice

화면 안 안내 띠. 닫기 버튼은 없다.

## Props

| 이름      | 타입               | 기본값   | 설명                                   |
| --------- | ------------------ | -------- | -------------------------------------- |
| tone      | `'info' \| 'warn'` | `'info'` | warn이면 `.note.warn`에 `role="alert"` |
| icon      | IconName           | -        | 앞 아이콘 (16px)                       |
| className | string             | -        | 추가 클래스                            |
| children  | ReactNode          | 필수     | 안내 글                                |

## 사용 예시

```tsx
import { Notice } from '@dejafix/common-frontend'

<Notice icon="bell">메일은 서버가 보냅니다.</Notice>
<Notice tone="warn">연결이 느립니다. 마지막으로 받은 값을 보여줍니다.</Notice>
```

React 없이:

```html
<div class="note">[svg]<span>기본 안내</span></div>
<div class="note warn" role="alert"><span>주의 안내</span></div>
```

## 의존성

React, Icon, `styles.css` (global.css)

## 원본 프로젝트

DejaFix
