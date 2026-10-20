# Card
제목 줄(제목, 보조 글, 오른쪽 버튼)이 있는 카드. onClick을 주면 카드 전체가 버튼이 된다.

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| title | ReactNode | - | `h2.card-title` |
| sub | ReactNode | - | `span.card-sub` |
| actions | ReactNode | - | `.card-actions` (제목 줄 오른쪽) |
| onClick | () => void | - | 있으면 `<button class="card">`. 이때 actions 안에 버튼을 넣지 않는다 |
| as | `'div' \| 'section' \| 'article'` | `'div'` | 태그 |
| className | string | - | 추가 클래스 |

## 사용 예시
```tsx
import { Card, Button } from '@dejafix/common-frontend'

<Card title="최근 항목" sub="10건" actions={<Button size="small">더 보기</Button>}>
  내용
</Card>
```
React 없이:
```html
<div class="card">
  <div class="card-head">
    <h2 class="card-title">최근 항목</h2>
    <span class="card-sub">10건</span>
    <div class="card-actions"><button class="btn small">더 보기</button></div>
  </div>
  내용
</div>
```

## 의존성
React, `styles.css` (global.css, theme.css)

## 원본 프로젝트
DejaFix, aiprj
