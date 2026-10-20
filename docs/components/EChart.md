# EChart

ECharts 래퍼. 상자 크기가 바뀌면 따라 줄고 늘며, 선·막대·히트맵만 등록되어 있다 (DejaFix와 같음).

## Props

| 이름   | 타입              | 기본값 | 설명                                                                                     |
| ------ | ----------------- | ------ | ---------------------------------------------------------------------------------------- |
| option | EChartsCoreOption | 필수   | ECharts 옵션. 호출하는 쪽에서 `useMemo`로 고정해 넘긴다 (바뀔 때마다 차트를 다시 만든다) |
| tall   | boolean           | false  | 높이 360px (`.chart.tall`). 기본은 260px                                                 |

차트 색은 토큰에서 읽는다: `cssVar('--series-1')` ~ `--series-4`, `--chart-text`, `--chart-grid`. 라이트/다크가 바뀌면 `useThemeVersion()` 값이 올라가므로 `useMemo` 의존성에 넣어 색을 다시 읽게 한다.

## 사용 예시

```tsx
import { useMemo } from 'react'
import { cssVar, useThemeVersion } from '@dejafix/common-frontend'
import { EChart } from '@dejafix/common-frontend/charts'

const theme = useThemeVersion()
const option = useMemo(() => {
  void theme
  const grid = cssVar('--chart-grid')
  return {
    color: [cssVar('--series-1'), cssVar('--series-2')],
    textStyle: { color: cssVar('--chart-text') },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: ['월', '화', '수'], axisLine: { lineStyle: { color: grid } } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: grid } } },
    series: [{ type: 'line', data: [12, 18, 15] }, { type: 'bar', data: [5, 8, 6] }],
  }
}, [theme])

<EChart option={option} />
```

## 의존성

React, echarts (`@dejafix/common-frontend/charts`로 따로 불러온다), hooks/useThemeVersion, lib/cssVar, `styles.css` (global.css의 `.chart`, tokens.css의 색 변수)

## 원본 프로젝트

DejaFix
