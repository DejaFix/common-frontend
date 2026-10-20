# DataTable
표. 좁은 화면에서는 가로로 스크롤된다 (`.table-wrap > table.data`).

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| columns | `Column<T>[]` | 필수 | `{ key, header, render?, numeric?, width? }`. render가 없으면 row[key]. numeric은 오른쪽 정렬(`.num`) |
| rows | T[] | 필수 | 데이터 |
| rowKey | (row) => Key | 필수 | 행 고유 키 |
| onRowClick | (row) => void | - | 있으면 행이 `.clickable`, Enter 키도 동작 |
| highlight | (row) => boolean | - | true인 행에 `.hl` |
| empty | ReactNode | `'표시할 항목이 없습니다'` | 행이 없을 때 문구 |
| caption | string | - | 스크린리더용 캡션 |

## 사용 예시
```tsx
import { DataTable, Chip, type Column } from '@dejafix/common-frontend'

const columns: Column<Row>[] = [
  { key: 'name', header: '이름' },
  { key: 'state', header: '상태', render: (r) => <Chip tone="green">{r.state}</Chip> },
  { key: 'count', header: '건수', numeric: true },
]
<DataTable columns={columns} rows={rows} rowKey={(r) => r.id} onRowClick={open} />
```
React 없이:
```html
<div class="table-wrap">
  <table class="data">
    <thead><tr><th>이름</th><th class="num">건수</th></tr></thead>
    <tbody><tr class="clickable"><td>A</td><td class="num">3</td></tr></tbody>
  </table>
</div>
```

## 의존성
React, `styles.css` (global.css)

## 원본 프로젝트
DejaFix
