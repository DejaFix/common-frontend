export interface SkeletonProps {
  /** block: 카드 크기 상자, line: 글줄 */
  variant?: 'block' | 'line'
  /** line일 때 줄 수 */
  lines?: number
  /** block 높이(px). 기본 120 */
  height?: number
}

/** 불러오는 중 자리 표시 (DejaFix .skeleton / .skeleton-line). 스크린리더에는 '불러오는 중'으로 읽힌다. */
export function Skeleton({ variant = 'block', lines = 3, height }: SkeletonProps) {
  if (variant === 'line') {
    return (
      <div className="skeleton-lines" role="status" aria-label="불러오는 중">
        {Array.from({ length: lines }, (_, i) => (
          <span key={i} className="skeleton-line" style={{ width: i === lines - 1 ? '60%' : undefined }} />
        ))}
      </div>
    )
  }
  return <div className="skeleton" role="status" aria-label="불러오는 중" style={height ? { height } : undefined} />
}
