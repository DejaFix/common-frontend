# Modal

기본 `<dialog>` 기반 대화상자. 포커스 가두기·Esc·배경은 브라우저가 처리한다.

## Props

| 이름        | 타입       | 기본값 | 설명                                             |
| ----------- | ---------- | ------ | ------------------------------------------------ |
| open        | boolean    | 필수   | 열림 상태                                        |
| onClose     | () => void | 필수   | Esc, 배경 클릭, 닫기 버튼(`btn small`) 모두 호출 |
| title       | ReactNode  | 필수   | 제목                                             |
| children    | ReactNode  | 필수   | 본문 (`.modal-body`)                             |
| footer      | ReactNode  | -      | 아래 버튼 줄 (`.modal-foot`)                     |
| wide        | boolean    | false  | 넓은 모달                                        |
| dismissable | boolean    | true   | false면 배경 클릭으로 닫히지 않음                |

## 사용 예시

```tsx
import { Modal, Button } from '@dejafix/common-frontend'

;<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="변경 내용을 저장할까요?"
  footer={
    <>
      <Button onClick={() => setOpen(false)}>취소</Button>
      <Button variant="primary" onClick={save}>
        저장
      </Button>
    </>
  }
>
  저장하면 바로 반영됩니다.
</Modal>
```

## 의존성

React, Icon, `styles.css` (global.css)

## 원본 프로젝트

신규 (기본 `<dialog>` 사용)
