# UnknownValue

받지 못했거나 확인되지 않은 값을 표시한다. 0이나 빈칸으로 대신하지 않는다.

## Props

| 이름  | 타입   | 기본값             | 설명    |
| ----- | ------ | ------------------ | ------- |
| label | string | `'확인할 수 없음'` | 표시 글 |

## 사용 예시

```tsx
import { UnknownValue } from '@dejafix/common-frontend'

{
  ms === null ? <UnknownValue /> : `${ms}ms`
}
```

StatCard와 ProgressBar는 값이 없을 때 자체적으로 `확인 불가` 글을 보여준다.

## 의존성

React, `styles.css` (global.css의 `.unknown`)

## 원본 프로젝트

DejaFix
