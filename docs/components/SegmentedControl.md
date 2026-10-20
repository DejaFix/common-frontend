# SegmentedControl

2~4개 중 하나를 고르는 버튼 묶음.

## Props

| 이름      | 타입                            | 기본값 | 설명                         |
| --------- | ------------------------------- | ------ | ---------------------------- |
| options   | `{ value: T; label: string }[]` | 필수   | 선택지                       |
| value     | T                               | 필수   | 현재 값 (`T extends string`) |
| onChange  | `(value: T) => void`            | 필수   | 선택 변경                    |
| ariaLabel | string                          | 필수   | 묶음 이름 (스크린리더용)     |

선택된 버튼에 `on` 클래스와 `aria-pressed`가 붙는다.

**DejaFix 대비 예외:** `aria-pressed`(어느 버튼이 선택됐는지 스크린리더에 알림). DejaFix는 `on` 클래스만 쓰지만 화면 모양은 같고 접근성을 위해 유지한다.

## 사용 예시

```tsx
import { SegmentedControl } from '@dejafix/common-frontend'

;<SegmentedControl
  ariaLabel="테마"
  value={mode}
  onChange={setMode}
  options={[
    { value: 'light', label: '라이트' },
    { value: 'dark', label: '다크' },
  ]}
/>
```

## 의존성

React, `styles.css` (global.css, theme.css)

## 원본 프로젝트

DejaFix
