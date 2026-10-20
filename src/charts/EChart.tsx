import { useEffect, useRef } from 'react'
import * as echarts from 'echarts/core'
import type { EChartsCoreOption } from 'echarts/core'
import { BarChart, HeatmapChart, LineChart, PieChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TooltipComponent, VisualMapComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// 필요한 차트 종류만 등록해서 번들을 줄인다. 다른 종류가 필요하면 여기에 추가한다.
echarts.use([
  BarChart,
  HeatmapChart,
  LineChart,
  PieChart,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  VisualMapComponent,
  CanvasRenderer,
])

export interface EChartProps {
  /** 부르는 쪽에서 useMemo로 고정해서 넘긴다. 바뀔 때마다 차트를 다시 만든다 */
  option: EChartsCoreOption
  /** 360px (기본 260px) */
  tall?: boolean
  /** 스크린리더용 차트 요약 한 줄 */
  ariaLabel?: string
}

/** ECharts 래퍼. 상자 크기가 바뀌면 따라 줄고 는다. 색은 cssVar('--series-1')처럼 토큰에서 읽는다. */
export function EChart({ option, tall = false, ariaLabel }: EChartProps) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const chart = echarts.init(el)
    chart.setOption(option)
    const ro = new ResizeObserver(() => chart.resize())
    ro.observe(el)
    return () => {
      ro.disconnect()
      chart.dispose()
    }
  }, [option])
  return <div ref={ref} className={`chart${tall ? ' tall' : ''}`} role="img" aria-label={ariaLabel} />
}
