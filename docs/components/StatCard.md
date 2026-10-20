# StatCard
숫자 하나를 크게 보여주는 KPI 카드.

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| label | ReactNode | 필수 | `.kpi-label` |
| value | ReactNode \| null \| undefined | 필수 | `.kpi-value`. null/undefined면 UnknownValue(0으로 바꾸지 않음) |
| unit | string | - | 숫자 뒤 작은 글씨 |
| hint | ReactNode | - | `.kpi-hint` |
| dot | string | - | 라벨 앞 점 색. CSS 색 값 (예: `'var(--danger)'`) |
| onClick | () => void | - | 있으면 카드 전체가 버튼 |
| className | string | - | 추가 클래스 |

## 사용 예시
```tsx
import { StatCard } from '@dejafix/common-frontend'

<div className="grid kpi">
  <StatCard label="확인 필요" value={5} unit="건" dot="var(--danger)" hint="어제보다 2건 증가" />
  <StatCard label="처리 중" value={12} unit="건" dot="var(--warning)" />
  <StatCard label="평균 시간" value={null} />
</div>
```

## 의존성
React, UnknownValue, `styles.css` (global.css의 `.card.kpi-card`, `.grid.kpi`)

## 원본 프로젝트
DejaFix
