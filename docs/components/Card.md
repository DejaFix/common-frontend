# Card

제목 줄이 있는 카드. `onClick`을 주면 카드 전체가 버튼이 된다.

## Props

| 이름      | 타입                              | 기본값  | 설명                                |
| --------- | --------------------------------- | ------- | ----------------------------------- |
| title     | ReactNode                         | -       | 제목 (`h2.card-title`)              |
| sub       | ReactNode                         | -       | 제목 옆 작은 글씨 (`span.card-sub`) |
| onClick   | () => void                        | -       | 주면 `button.card`로 그려진다       |
| as        | `'div' \| 'section' \| 'article'` | `'div'` | 바깥 태그                           |
| className | string                            | -       | 추가 클래스                         |
| children  | ReactNode                         | -       | 본문                                |

title과 sub가 모두 없으면 제목 줄(`.card-head`)을 그리지 않는다.

## 사용 예시

```tsx
import { Card } from '@dejafix/common-frontend'

<Card title="발송 내역" sub="최근 24시간" as="section">
  본문
</Card>
<Card title="상세 보기" onClick={() => navigate('/detail')}>눌러서 이동</Card>
```

React 없이:

```html
<section class="card">
  <div class="card-head">
    <h2 class="card-title">발송 내역</h2>
    <span class="card-sub">최근 24시간</span>
  </div>
  본문
</section>
```

## 의존성

React, `styles.css` (global.css, theme.css)

## 원본 프로젝트

DejaFix
