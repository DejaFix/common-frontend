# Tooltip (InfoTip)
(i) 아이콘에 마우스를 올리거나 키보드로 이동하면 설명 말풍선이 뜬다. CSS만으로 동작한다.

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| text | string | 필수 | 말풍선 글 (한두 문장). `data-tip`과 `aria-label`에 들어간다 |
| align | `'left' \| 'right'` | `'left'` | 화면 오른쪽 끝이면 `right` (클래스 `info-tip right`) |

## 사용 예시
```tsx
import { InfoTip } from '@dejafix/common-frontend'

<span>확인율 <InfoTip text="최근 24시간 기준입니다." /></span>
```
React 없이:
```html
<button type="button" class="info-tip" data-tip="최근 24시간 기준입니다." aria-label="최근 24시간 기준입니다.">i</button>
```

## 의존성
React, `styles.css` (global.css, theme.css)

## 원본 프로젝트
DejaFix
