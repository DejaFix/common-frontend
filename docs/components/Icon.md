# Icon
24x24 선 아이콘. 색은 글자색(currentColor)을 따른다.

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| name | IconName | 필수 | 아래 이름 중 하나 |
| size | number | 18 | 픽셀 크기 |
| label | string | - | 의미 있는 아이콘이면 설명. 비우면 스크린리더가 건너뜀 |

IconName: dashboard, home, chart, report, checklist, bell, shield, settings, user, sparkle, search, send, plus, check, close, chevron, menu, alert, info, external, inbox

## 사용 예시
```tsx
import { Icon } from '@dejafix/common-frontend'

<Icon name="alert" size={16} />
<Icon name="check" label="완료" />
```

## 의존성
React (CSS 없음)

## 원본 프로젝트
DejaFix
