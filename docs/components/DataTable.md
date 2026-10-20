# DataTable

표. 좁은 화면에서는 가로로 스크롤된다.

## Props

DataTable (제네릭 T)

| 이름      | 타입                  | 기본값 | 설명                     |
| --------- | --------------------- | ------ | ------------------------ |
| columns   | `Column<T>[]`         | 필수   | 칸 정의                  |
| rows      | `T[]`                 | 필수   | 행 데이터                |
| rowKey    | `(row: T) => Key`     | 필수   | 행 key                   |
| highlight | `(row: T) => boolean` | -      | true인 행 강조 (`tr.hl`) |

Column

| 이름    | 타입                    | 기본값 | 설명                                             |
| ------- | ----------------------- | ------ | ------------------------------------------------ |
| key     | string                  | 필수   | 칸 key. render가 없으면 `row[key]`를 그대로 쓴다 |
| header  | ReactNode               | 필수   | 머리글                                           |
| render  | `(row: T) => ReactNode` | -      | 칸 내용                                          |
| numeric | boolean                 | false  | 오른쪽 정렬 + 고정폭 숫자 (`.num`)               |

## 사용 예시

```tsx
import { DataTable, UnknownValue, type Column } from '@dejafix/common-frontend'

const columns: Column<Log>[] = [
  { key: 'time', header: '시각' },
  { key: 'to', header: '받는 사람', render: (l) => <span className="mono">{l.to}</span> },
  { key: 'ms', header: '걸린 시간', numeric: true, render: (l) => (l.ms === null ? <UnknownValue /> : `${l.ms}ms`) },
]

<DataTable columns={columns} rows={logs} rowKey={(l) => l.id} highlight={(l) => l.failed} />
```

React 없이:

```html
<div class="table-wrap">
  <table class="data">
    <thead>
      <tr>
        <th>시각</th>
        <th class="num">걸린 시간</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hl">
        <td>10-20 12:48</td>
        <td class="num">420ms</td>
      </tr>
    </tbody>
  </table>
</div>
```

## 의존성

React, `styles.css` (global.css). 값이 없는 칸에는 UnknownValue를 함께 쓴다.

## 원본 프로젝트

DejaFix
