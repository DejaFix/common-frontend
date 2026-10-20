# Field

라벨과 입력칸을 묶는 `Field`, 그리고 `Input`, `Select`, `Switch`.

## Props

Field

| 이름      | 타입                     | 기본값 | 설명                                                                   |
| --------- | ------------------------ | ------ | ---------------------------------------------------------------------- |
| label     | ReactNode                | 필수   | 라벨 글                                                                |
| error     | ReactNode                | -      | 있으면 입력칸 아래에 `p.form-error`로 표시하고 `aria-invalid`를 붙인다 |
| children  | `(control) => ReactNode` | 필수   | `{ id, aria-describedby?, aria-invalid? }`를 받아 입력칸에 펼쳐 준다   |
| className | string                   | -      | label에 붙는 추가 클래스                                               |

Input: 일반 `input`의 속성을 그대로 받는다.
Select: `select` 속성 + `options: { value, label }[]` (필수). 클래스 `select`, 높이 32px.

Switch

| 이름      | 타입                      | 기본값 | 설명                                  |
| --------- | ------------------------- | ------ | ------------------------------------- |
| checked   | boolean                   | 필수   | 켜짐 상태                             |
| onChange  | `(next: boolean) => void` | 필수   | 바뀐 값                               |
| ariaLabel | string                    | 필수   | 스크린리더용 이름 (label prop은 없다) |
| disabled  | boolean                   | false  | 비활성                                |

## 사용 예시

```tsx
import { Field, Input, Select, Switch } from '@dejafix/common-frontend'

<Field label="이름" error={short ? '2자 이상 입력하세요' : undefined}>
  {(p) => <Input {...p} value={name} onChange={(e) => setName(e.target.value)} />}
</Field>
<Select aria-label="기간" options={[{ value: '24h', label: '최근 24시간' }, { value: '7d', label: '최근 7일' }]} />
<Switch checked={on} onChange={setOn} ariaLabel="알림 받기" />
```

React 없이:

```html
<label class="field" for="name">이름<input id="name" /></label>
<p class="form-error" role="alert">2자 이상 입력하세요</p>
<select class="select">
  <option>최근 24시간</option>
</select>
<button type="button" role="switch" class="switch" aria-checked="true" aria-label="알림 받기"></button>
```

## 의존성

React, `styles.css` (global.css의 `.field`, `.form-error`, `.select`, `.switch`)

## 원본 프로젝트

DejaFix
