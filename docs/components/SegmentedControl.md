# SegmentedControl
2~4개 중 하나를 고르는 버튼 묶음.

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| options | `{ value: T; label: string }[]` | 필수 | 선택지 |
| value | T | 필수 | 현재 값. 해당 버튼에 클래스 `on` + `aria-pressed` |
| onChange | (value: T) => void | 필수 | 변경 |
| ariaLabel | string | 필수 | 묶음 이름 (`div.seg`, role="group") |

## 사용 예시
```tsx
import { SegmentedControl } from '@dejafix/common-frontend'

<SegmentedControl
  ariaLabel="시간대"
  value={tz}
  onChange={setTz}
  options={[{ value: 'kst', label: 'KST' }, { value: 'utc', label: 'UTC' }]}
/>
```

## 의존성
React, `styles.css` (global.css, theme.css)

## 원본 프로젝트
DejaFix
