# Icon

24x24 선 아이콘. 색은 글자색(`currentColor`)을 따르고 `aria-hidden`이라 의미는 옆 글자로 전달한다.

## Props

| 이름 | 타입     | 기본값 | 설명         |
| ---- | -------- | ------ | ------------ |
| name | IconName | 필수   | 아이콘 이름  |
| size | number   | 18     | 가로/세로 px |

IconName: `dashboard`, `cost`, `compare`, `report`, `plan`, `bell`, `admin`, `sparkle`, `search`, `send`, `close`, `chevron`, `logo`, `menu`, `user`. 접근성 이름(label) prop은 없다.

## 사용 예시

```tsx
import { Icon, type IconName } from '@dejafix/common-frontend'

<Icon name="bell" />
<Icon name="search" size={16} />
```

Button의 `icon`, NavItem의 `icon`, Notice의 `icon`에도 같은 이름을 쓴다.

## 의존성

React. 별도 CSS 없음.

## 원본 프로젝트

DejaFix
