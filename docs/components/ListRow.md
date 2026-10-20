# ListRow
CSS만으로 만드는 목록 줄 패턴. React 컴포넌트는 없다.

## 클래스
| 패턴 | 클래스 | 용도 |
|---|---|---|
| 설정 목록 | `.list > .list-row` > `.list-main`(`.list-title`, `.list-sub`) + 오른쪽 컨트롤 | 제목/설명과 Switch·버튼. `a.list-row`면 hover 배경 |
| 알림 줄 | `.alert-row` > Chip, `.alert-main`(`.alert-name`, `.alert-meta`), Chip, `.alert-time` | Collapsible이나 `.list-card` 안의 한 줄 목록 |

## 사용 예시
```html
<div class="list">
  <div class="list-row">
    <div class="list-main">
      <div class="list-title">이메일 알림</div>
      <div class="list-sub">긴급 항목이 생기면 보냅니다</div>
    </div>
    <button type="button" role="switch" class="switch" aria-checked="true" aria-label="이메일 알림"></button>
  </div>
</div>

<div class="card list-card">
  <a class="alert-row" href="/items/1">
    <span class="chip red">긴급</span>
    <div class="alert-main">
      <div class="alert-name">디스크 사용량 초과</div>
      <div class="alert-meta"><span class="mono">서버-01</span></div>
    </div>
    <span class="chip green">확인 완료</span>
    <span class="alert-time">13:05</span>
  </a>
</div>
```

## 의존성
`styles.css` (global.css), 보통 Chip, Switch, Collapsible과 함께 쓴다

## 원본 프로젝트
DejaFix
