# ProgressBar
이름 | 막대 | 값 한 줄 (`.bar-row`).

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| label | ReactNode | 필수 | 왼쪽 이름 |
| value | number \| null \| undefined | 필수 | null/undefined면 막대를 채우지 않고 UnknownValue |
| max | number | 100 | 최댓값 |
| color | string | `'var(--primary)'` | 막대 색 (CSS 색 값) |
| valueText | (value, max) => ReactNode | 퍼센트 | 오른쪽 값 표시 |

## 사용 예시
```tsx
import { ProgressBar } from '@dejafix/common-frontend'

<ProgressBar label="처리율" value={72} />
<ProgressBar label="디스크" value={45} max={100} color="var(--warning)" valueText={(v, m) => `${v}/${m}GB`} />
<ProgressBar label="수집" value={null} />
```

## 의존성
React, UnknownValue, `styles.css` (global.css의 `.bar-row`, `.bar-track`, `.bar-fill`, `.bar-value`)

## 원본 프로젝트
DejaFix, aiprj
