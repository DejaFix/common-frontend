# Toast
상단바에 잠깐 뜨는 짧은 알림 (DejaFix의 작은 앰버 알약, `.toast`).

## Props
ToastProvider: `children`. 앱 맨 바깥에 한 번 둔다.
ToastOutlet: props 없음. 알림이 보일 자리. AppShell이 ToastProvider 안에 있으면 상단바에 자동으로 둔다.

useToast() 반환값

| 이름 | 타입 | 기본값 | 설명 |
|---|---|---|---|
| show | `(message: string, ms?: number) => void` | ms 3000 | 알림 표시. 새 알림은 이전 것을 대체 |

ToastProvider 밖에서 useToast를 부르면 오류가 난다.

## 사용 예시
```tsx
import { ToastProvider, AppShell, useToast, Button } from '@dejafix/common-frontend'

<ToastProvider>
  <AppShell brand={{ name: 'Common' }} nav={nav}>
    <Save />
  </AppShell>
</ToastProvider>

function Save() {
  const toast = useToast()
  return <Button onClick={() => toast.show('저장했습니다')}>저장</Button>
}
```

## 의존성
React, `styles.css` (global.css), AppShell(자동 배치)

## 원본 프로젝트
DejaFix
