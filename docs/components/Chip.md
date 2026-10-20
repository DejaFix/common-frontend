# Chip

상태나 분류를 알려주는 작은 라벨. 여러 개는 `Chips`로 묶는다.

## Props

Chip

| 이름      | 타입                              | 기본값      | 설명                    |
| --------- | --------------------------------- | ----------- | ----------------------- |
| tone      | `'neutral' \| 'green' \| 'amber'` | `'neutral'` | 색                      |
| title     | string                            | -           | 마우스를 올렸을 때 설명 |
| className | string                            | -           | 추가 클래스             |
| children  | ReactNode                         | 필수        | 라벨 글                 |

Chips: `children`만 받는다. 줄바꿈 가능하게 묶는다 (`span.chips`).

## 사용 예시

```tsx
import { Chip, Chips } from '@dejafix/common-frontend'

;<Chips>
  <Chip>기본</Chip>
  <Chip tone="green">정상</Chip>
  <Chip tone="amber" title="처리 대기 중">
    대기
  </Chip>
</Chips>
```

React 없이:

```html
<span class="chips">
  <span class="chip neutral">기본</span>
  <span class="chip green">정상</span>
  <span class="chip amber">대기</span>
</span>
```

## 의존성

React, `styles.css` (global.css)

## 원본 프로젝트

DejaFix
