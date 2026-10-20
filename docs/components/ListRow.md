# ListRow

CSS만으로 만드는 목록 줄 패턴. React 컴포넌트는 없다.

## 클래스

| 패턴      | 클래스                                                                                | 용도                                               |
| --------- | ------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 설정 목록 | `.list > .list-row` 안에 본문 `div`(`.list-title`, `.list-sub`) + 오른쪽 컨트롤       | 제목/설명과 Switch·버튼. `a.list-row`면 hover 배경 |
| 알림 줄   | `.alert-row` > Chip, `.alert-main`(`.alert-name`, `.alert-meta`), Chip, `.alert-time` | Collapsible 안의 한 줄 목록                        |

list-row의 본문은 `.list-main` 클래스 없이 `<div style="flex:1;min-width:0">`로 남는 폭을 채운다.

## 사용 예시

```html
<div class="list">
  <div class="list-row">
    <div style="flex:1;min-width:0">
      <div class="list-title">높음 이상 즉시 알림</div>
      <div class="list-sub">새로 들어올 때 · 받는 사람 <span class="mono">ops@example.com</span></div>
    </div>
    <button
      type="button"
      role="switch"
      class="switch"
      aria-checked="true"
      aria-label="높음 이상 즉시 알림 켜기"
    ></button>
  </div>
</div>

<a class="alert-row" href="#/home">
  <span class="chip amber">높음</span>
  <div class="alert-main">
    <div class="alert-name">결제 페이지 응답이 3초를 넘습니다</div>
    <div class="alert-meta"><span class="mono">web-01</span></div>
  </div>
  <span class="chip green">확인 완료</span>
  <span class="alert-time">10-20 12:48</span>
</a>
```

## 의존성

`styles.css` (global.css). 보통 Chip, Switch, Collapsible과 함께 쓴다.

## 원본 프로젝트

DejaFix
