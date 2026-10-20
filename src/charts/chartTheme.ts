import { cssVar } from '../lib/cssVar'

/** 지금 테마의 차트 공통 색. 옵션을 만들 때 부르고, useThemeVersion()을 useMemo 의존성에 넣는다. */
export function chartTheme() {
  return {
    text: cssVar('--chart-text'),
    grid: cssVar('--chart-grid'),
    series: [cssVar('--series-1'), cssVar('--series-2'), cssVar('--series-3'), cssVar('--series-4')],
    font: cssVar('--font'),
  }
}
