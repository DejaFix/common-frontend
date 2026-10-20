# Tooltip (InfoTip)

(i) 아이콘에 마우스를 올리거나 Tab으로 이동하면 설명 말풍선이 뜬다. CSS만으로 동작한다.

## Props

| 이름 | 타입   | 기본값 | 설명                                                        |
| ---- | ------ | ------ | ----------------------------------------------------------- |
| text | string | 필수   | 말풍선 글 (한두 문장). `data-tip`과 `aria-label`에 들어간다 |

`span.info-tip`에 `tabIndex={0}`, `role="note"`가 붙는다.

## 사용 예시

```tsx
import { InfoTip } from '@dejafix/common-frontend'

;<span>
  확인율 <InfoTip text="최근 24시간 기준입니다." />
</span>
```

React 없이:

```html
<span class="info-tip" tabindex="0" role="note" aria-label="최근 24시간 기준입니다." data-tip="최근 24시간 기준입니다."
  >i</span
>
```

## 의존성

React, `styles.css` (global.css, theme.css)

## 원본 프로젝트

DejaFix
