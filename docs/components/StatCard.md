# StatCard

숫자 하나를 크게 보여주는 KPI 카드. 여러 개는 `<div className="grid kpi">`로 묶는다.

## Props

| 이름      | 타입                             | 기본값 | 설명                                                                                |
| --------- | -------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| label     | ReactNode                        | 필수   | 라벨                                                                                |
| value     | `ReactNode \| null \| undefined` | 필수   | null/undefined면 `<span class="card-sub">확인 불가</span>` 표시 (0으로 바꾸지 않음) |
| unit      | string                           | -      | 숫자 뒤 작은 글씨 (건, 개, % 등)                                                    |
| hint      | ReactNode                        | -      | 아래 작은 설명                                                                      |
| dot       | string                           | -      | 라벨 앞 점 색 (CSS 색 값, 예: `'var(--danger)'`)                                    |
| onClick   | () => void                       | -      | 주면 `button.card.kpi-card`로 그려진다                                              |
| className | string                           | -      | 추가 클래스                                                                         |

## 사용 예시

```tsx
import { StatCard } from '@dejafix/common-frontend'

;<div className="grid kpi">
  <StatCard label="열린 항목" value={5} unit="건" hint="아직 처리되지 않은 것" dot="var(--accent)" onClick={goList} />
  <StatCard label="평균 처리 시간" value={null} />
</div>
```

## 의존성

React, `styles.css` (global.css의 `.kpi-card`, `.grid.kpi`)

## 원본 프로젝트

DejaFix
