# Field
라벨 + 입력칸 + 도움말/오류. Input, Textarea, Select, Switch를 함께 제공한다.

## Props
Field

| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| label | ReactNode | 필수 | `<label>` |
| hint | ReactNode | - | 도움말 `.field-hint` |
| error | ReactNode | - | 오류 `.form-error` (role="alert"), 입력칸에 `aria-invalid` |
| children | `(control) => ReactNode` | 필수 | `id`, `aria-describedby`, `aria-invalid`를 받아 입력칸에 펼쳐 준다 |
| className | string | - | 추가 클래스 |

Input / Textarea: 일반 input·textarea 속성 그대로 (스타일은 `.field input`, `.field textarea`).
Select: `options: {value,label}[]` + select 속성. 단독 32px, Field 안 42px (size prop 없음).
Switch: `checked`, `onChange(next)`, `label`, `ariaLabel`, `disabled`.

## 사용 예시
```tsx
import { Field, Input, Select, Switch } from '@dejafix/common-frontend'

<Field label="이메일" hint="로그인에 쓰입니다" error={err}>
  {(c) => <Input type="email" value={v} onChange={(e) => setV(e.target.value)} {...c} />}
</Field>
<Select options={[{ value: 'all', label: '전체' }]} value={f} onChange={(e) => setF(e.target.value)} />
<Switch checked={on} onChange={setOn} label="알림 받기" />
```
React 없이:
```html
<div class="field">
  <label for="e">이메일</label>
  <input id="e" type="email" aria-invalid="true" />
  <span class="field-hint">로그인에 쓰입니다</span>
  <span class="form-error" role="alert">형식이 올바르지 않습니다</span>
</div>
```

## 의존성
React, `styles.css` (global.css)

## 원본 프로젝트
DejaFix, aiprj
