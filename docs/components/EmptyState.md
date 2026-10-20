# EmptyState

비었거나 찾을 수 없을 때 보여주는 안내.

## Props

| 이름   | 타입      | 기본값 | 설명                                                          |
| ------ | --------- | ------ | ------------------------------------------------------------- |
| title  | ReactNode | 필수   | 안내 글 (`h2`)                                                |
| action | ReactNode | -      | 제목 바로 아래에 그대로 놓인다. DejaFix는 `a.btn` 링크를 쓴다 |

## 사용 예시

```tsx
import { EmptyState } from '@dejafix/common-frontend'

;<EmptyState
  title="결과가 없습니다"
  action={
    <a className="btn" href="#/home">
      현황으로 돌아가기
    </a>
  }
/>
```

## 의존성

React, `styles.css` (global.css의 `.empty`). action에는 보통 Button과 같은 `.btn` 클래스를 쓴다.

## 원본 프로젝트

DejaFix
