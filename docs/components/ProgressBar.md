# ProgressBar

이름 / 막대 / 값을 한 줄로 보여준다.

## Props

| 이름      | 타입                          | 기본값             | 설명                                                                                                   |
| --------- | ----------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------ |
| label     | ReactNode                     | 필수               | 왼쪽 이름                                                                                              |
| value     | `number \| null \| undefined` | 필수               | null/undefined면 막대를 채우지 않고 `<span class="card-sub">확인 불가</span>` 표시 (0으로 바꾸지 않음) |
| max       | number                        | 100                | 최댓값                                                                                                 |
| color     | string                        | `'var(--primary)'` | 막대 색 (CSS 색 값)                                                                                    |
| valueText | `(value, max) => ReactNode`   | 퍼센트             | 오른쪽 글                                                                                              |

## 사용 예시

```tsx
import { ProgressBar } from '@dejafix/common-frontend'

<ProgressBar label="web-01" value={42} />
<ProgressBar label="api-02" value={87} color="var(--danger)" />
<ProgressBar label="디스크" value={30} max={50} valueText={(v, m) => `${v} / ${m}GB`} />
<ProgressBar label="batch-03" value={null} />
```

## 의존성

React, `styles.css` (global.css의 `.bar-row`, `.bar-track`, `.bar-fill`)

## 원본 프로젝트

DejaFix
