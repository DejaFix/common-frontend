# ProgressBar

이름 / 막대 / 값을 한 줄로 보여준다. 막대 색은 `var(--primary)`, 오른쪽 값은 퍼센트로 고정이다.

**기본값 출처:** 막대 색(`var(--primary)`)과 퍼센트 표시는 DejaFix에 없는 값으로, 템플릿을 만들 때 Claude가 정했다. DejaFix는 화면마다 막대 색(`style.background`)과 값 글자를 직접 지정한다.
색이나 단위를 바꿔야 하면 DejaFix처럼 `.bar-row` 마크업을 직접 쓴다.

## Props

| 이름  | 타입                          | 기본값 | 설명                                                                                                   |
| ----- | ----------------------------- | ------ | ------------------------------------------------------------------------------------------------------ |
| label | ReactNode                     | 필수   | 왼쪽 이름                                                                                              |
| value | `number \| null \| undefined` | 필수   | null/undefined면 막대를 채우지 않고 `<span class="card-sub">확인 불가</span>` 표시 (0으로 바꾸지 않음) |
| max   | number                        | 100    | 최댓값                                                                                                 |

## 사용 예시

```tsx
import { ProgressBar } from '@dejafix/common-frontend'

<ProgressBar label="web-01" value={42} />
<ProgressBar label="api-02" value={87} />
<ProgressBar label="디스크" value={30} max={50} />
<ProgressBar label="batch-03" value={null} />
```

## 의존성

React, `styles.css` (global.css의 `.bar-row`, `.bar-track`, `.bar-fill`)

## 원본 프로젝트

DejaFix
