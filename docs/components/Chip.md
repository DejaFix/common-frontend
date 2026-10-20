# Chip
상태·분류를 나타내는 작은 라벨. Chips는 여러 개를 묶는다.

## Props
| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| tone | `ChipTone` = `'neutral' \| 'green' \| 'amber' \| 'red' \| 'blue'` | `'neutral'` | 색 |
| title | string | - | 마우스를 올렸을 때 설명 |
| className | string | - | 추가 클래스 |
| children | ReactNode | 필수 | 내용 |

Chips: `label`(묶음 이름, 선택), `children`.

## 사용 예시
```tsx
import { Chip, Chips } from '@dejafix/common-frontend'

<Chip tone="green">정상</Chip>
<Chips label="분류"><Chip tone="amber">주의</Chip><Chip tone="red">긴급</Chip></Chips>
```
React 없이:
```html
<span class="chip green">정상</span>
<span class="chips"><span class="chip amber">주의</span><span class="chip red">긴급</span></span>
```

## 의존성
React, `styles.css` (global.css)

## 원본 프로젝트
DejaFix, aiprj
