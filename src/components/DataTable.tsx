import type { Key, ReactNode } from 'react'
import { cx } from '../lib/cx'

export interface Column<T> {
  key: string
  header: ReactNode
  /** 칸 내용. 없으면 row[key]를 그대로 쓴다 */
  render?: (row: T) => ReactNode
  /** 숫자 칸: 오른쪽 정렬 + 고정폭 숫자 */
  numeric?: boolean
  width?: number | string
}

export interface DataTableProps<T> {
  columns: Column<T>[]
  rows: T[]
  rowKey: (row: T) => Key
  /** 주면 행을 눌러 이동할 수 있다(키보드 Enter 포함) */
  onRowClick?: (row: T) => void
  /** 강조할 행 */
  highlight?: (row: T) => boolean
  /** 행이 없을 때 문구 */
  empty?: ReactNode
  caption?: string
}

const INTERACTIVE = 'a, button, input, select, textarea, label'

/** 표. 좁은 화면에서는 가로로 스크롤된다. */
export function DataTable<T>({
  columns,
  rows,
  rowKey,
  onRowClick,
  highlight,
  empty = '표시할 항목이 없습니다',
  caption,
}: DataTableProps<T>) {
  return (
    <div className="table-wrap">
      <table className="data">
        {caption && <caption className="visually-hidden">{caption}</caption>}
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} className={cx(c.numeric && 'num')} style={c.width ? { width: c.width } : undefined}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td className="table-empty" colSpan={columns.length}>
                {empty}
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr
                key={rowKey(row)}
                className={cx(onRowClick && 'clickable', highlight?.(row) && 'hl')}
                onClick={
                  onRowClick
                    ? (e) => {
                        // 칸 안의 버튼·링크·입력칸을 누른 것은 행 이동으로 보지 않는다
                        if (!(e.target as HTMLElement).closest(INTERACTIVE)) onRowClick(row)
                      }
                    : undefined
                }
                onKeyDown={
                  onRowClick
                    ? (e) => {
                        if (e.key === 'Enter' && e.target === e.currentTarget) onRowClick(row)
                      }
                    : undefined
                }
                tabIndex={onRowClick ? 0 : undefined}
              >
                {columns.map((c) => (
                  <td key={c.key} className={cx(c.numeric && 'num')}>
                    {c.render ? c.render(row) : ((row as Record<string, unknown>)[c.key] as ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
