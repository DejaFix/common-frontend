/** 불러오는 중 자리 표시 (DejaFix .skeleton). 기본 높이 120px */
export function Skeleton({ height }: { height?: number }) {
  return <div className="skeleton" aria-label="불러오는 중" style={height ? { height } : undefined} />
}
