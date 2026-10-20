# EChart
ECharts 래퍼. 상자 크기가 바뀌면 따라 줄고 는다. echarts가 필요해 따로 불러온다. 막대·히트맵·선·원 차트만 등록되어 있다.

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| option | EChartsCoreOption | 필수 | 부르는 쪽에서 `useMemo`로 고정해 넘긴다. 바뀌면 차트를 다시 만든다 |
| tall | boolean | false | 높이 360px (기본 260px, 클래스 `chart tall`) |
| ariaLabel | string | - | 차트 요약 한 줄 |

보조: `chartTheme()`는 `{ text, grid, series[4], font }`를 현재 테마 색으로 돌려준다. 색은 `cssVar('--series-1')`처럼 토큰에서 읽고, `useThemeVersion()`을 useMemo 의존성에 넣어 라이트/다크 전환 때 다시 읽게 한다.

## 사용 예시
```tsx
import { useMemo } from 'react'
import { useThemeVersion } from '@dejafix/common-frontend'
import { EChart, chartTheme } from '@dejafix/common-frontend/charts'

const v = useThemeVersion()
const option = useMemo(() => {
  const t = chartTheme()
  return {
    color: t.series,
    xAxis: { type: 'category', data: ['월', '화', '수'] },
    yAxis: { type: 'value' },
    series: [{ type: 'line', data: [3, 5, 2] }],
  }
}, [v])
<EChart option={option} ariaLabel="요일별 건수" />
```

## 의존성
React, echarts, useThemeVersion, cssVar, `styles.css` (global.css의 `.chart`)

## 원본 프로젝트
DejaFix
