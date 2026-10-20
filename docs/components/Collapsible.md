# Collapsible

눌러서 펼치고 접는 구역. 현황 화면의 목록 묶음에 쓴다.

## Props

| 이름        | 타입      | 기본값 | 설명                      |
| ----------- | --------- | ------ | ------------------------- |
| title       | ReactNode | 필수   | 제목                      |
| count       | number    | -      | 제목 옆 개수 (굵게)       |
| meta        | ReactNode | -      | 제목 옆 흐린 설명         |
| defaultOpen | boolean   | false  | 처음부터 펼침             |
| id          | string    | -      | 바깥 요소 id              |
| children    | ReactNode | 필수   | 펼쳤을 때만 그려지는 내용 |

개수는 DejaFix처럼 'N건'으로 표시한다. 머리 버튼에 `aria-expanded`와 `aria-controls`가 붙는다.

**DejaFix 대비 예외:** `aria-controls`(펼치는 영역과 버튼을 스크린리더에 연결). DejaFix에는 없지만 화면 모양은 같고 접근성을 위해 유지한다.

## 사용 예시

```tsx
import { Collapsible } from '@dejafix/common-frontend'

;<Collapsible title="새로 들어온 항목" count={3} meta="최근 24시간" defaultOpen>
  <a className="alert-row" href="#/home">
    ...
  </a>
</Collapsible>
```

## 의존성

React, Icon, `styles.css` (global.css). 안쪽은 보통 ListRow의 `.alert-row`를 쓴다.

## 원본 프로젝트

DejaFix
