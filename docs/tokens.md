# 디자인 토큰

DejaFix frontend의 CSS 값을 그대로 옮겼다. 불러오는 순서도 DejaFix와 같다.

| 파일 | 내용 | 원본 |
|---|---|---|
| `src/styles/tokens.css` | 기본 토큰(라이트) + 다크 토큰 | DejaFix `tokens.css` |
| `src/styles/global.css` | 기본 요소·컴포넌트 클래스 | DejaFix `global.css` (+ aiprj 보충, 신규 Modal) |
| `src/styles/theme.css` | 인디고 팔레트 + 모서리 0 (라이트 토큰 덮어쓰기) | DejaFix `theme.css` |
| `src/styles/shell.css` | 어두운 사이드바·상단바·사용자 메뉴, TopNav | DejaFix `shell.css` (+ aiprj TopNav) |

## 실제로 쓰이는 값 (theme.css까지 적용된 결과)
| 그룹 | 토큰 | 라이트 | 다크 |
|---|---|---|---|
| 바탕 | `--bg` | #f6f6fb | #0e1312 |
| 면 | `--surface` / `--surface-2` | #ffffff / #f1f1f9 | #161c1b / #1b2322 |
| 글자 | `--text` / `--text-2` / `--text-3` | #232345 / #4a4a6e / #8a8aa8 | #edf1f0 / #b4bebb / #8a9693 |
| 선 | `--border` / `--border-strong` | #e8e8f2 / #d8d8e8 | 흰색 9% / 17% |
| 마우스 올림·막대 바탕 | `--hover` / `--track` | #eeeef8 / #ebebf5 | 흰색 6% / 10% |
| 주요색 | `--primary` / `-hover` / `-soft` | #5b5bd6 / #4545b8 / #ececfb | #3fae9c / #55c0ae / 16% |
| 주요색 위 글자 | `--on-primary-ink` | #ffffff | #ffffff |
| 강조 | `--accent` / `-soft` | #a8731a / #f6eedd | #d9a441 / 16% |
| 상태 | `--success` `--warning` `--danger` `--info` (+`-soft`) | #2e9e6b · #a87a0a · #cf3d34 · #3c6e9e | #5fc084 · #dcae45 · #f0746a · #7fb0dc |
| 사이드바 | `--side-bg` `--side-text` `--side-muted` `--side-line` | #1d1d3a · #e4e4f4 · #9a9ac4 · 흰색 10% | 같음 |
| 차트 | `--series-1~4` `--chart-text` `--chart-grid` | #5b5bd6 · #c9811f · #7fa3c7 · #b1495a | #4cc3b0 · #e0ab55 · #7fb0dc · #e0828f |
| 그림자 | `--shadow-sm` / `--shadow-md` | 인디고 옅은 2겹 / 0 8px 28px 12% | 진한 그림자 |
| 모서리 | `--radius-sm/md/lg/pill/round` | **모두 0** | 0 |

다크에서 주요색이 청록인 것은 DejaFix와 같다(theme.css는 라이트 토큰만 덮어쓴다).

## 글꼴·크기·레이아웃
| 항목 | 값 |
|---|---|
| 글꼴 | `--font` Pretendard Variable → 시스템 한글 글꼴, `--mono` ui-monospace |
| 글자 크기 | 본문 15px, 보조 13px, 작은 글씨 12px, 카드 제목 17px, 페이지 제목 28px(≤900px 24px), KPI 숫자 40px |
| 간격 | 페이지 여백 28px(현황형 `.page-wide` 32px), 카드 안쪽 20px 22px, 카드·그리드 사이 16px |
| 레이아웃 | `--sidebar-w` 248px, `--collapsed-w` 64px, `--topbar-h` 60px, `--panel-w` 400px, 본문 최대 1280px |

`--text-*`, `--space-*`는 위 숫자에 이름만 붙인 참고용 별칭이다. 컴포넌트 CSS는 원본처럼 숫자를 직접 쓴다.

## 테마 전환
| 방법 | 효과 |
|---|---|
| 아무것도 안 함 | OS 설정(prefers-color-scheme)을 따름 |
| `<html data-theme="light">` / `"dark"` | 강제 전환 (`setTheme('light' \| 'dark' \| 'auto')`) |

## 반응형 기준
| 폭 | 바뀌는 것 |
|---|---|
| ≤ 1500px | 오른쪽 패널이 열려 있으면 상단바 여백·단축키 표시 줄임 |
| ≤ 1280px | 사용자 메뉴 이름 숨김 |
| ≤ 1100px | `.grid.kpi` 2열, `.grid.two` 1열 |
| ≤ 900px | 사이드바 → 가로 메뉴, 검색칸 숨김, 오른쪽 패널 전체 폭, 페이지 여백 16px |
| ≤ 700px | TopNav 메뉴 둘째 줄 |

## DejaFix와 다른 점
| 항목 | DejaFix | 이 템플릿 | 이유 |
|---|---|---|---|
| 모서리 0 방식 | `* { border-radius: 0 !important }` | 토큰 `--radius-*: 0` | 화면 결과는 같고, 토큰만 바꾸면 둥글게 되돌릴 수 있음 |
| 버튼·검색·세그먼트 바탕 | `#fff` | `var(--surface)` | 라이트에서는 같은 값. 다크에서 흰 버튼이 되지 않음 |
| 폼 입력칸 바탕·글자색 | 지정 없음 | `var(--surface)` / `var(--text)` | 다크에서 읽히게 (글자 굵기는 원본처럼 600 상속) |
| 상태색 이름 | `--sev-*`, `--risk-*` | `--success/warning/danger/info` | 도메인 이름 제거. 값은 같음 |
| 말풍선 숨김 | `opacity: 0` | `display: none` | 숨은 말풍선 때문에 좁은 화면에서 가로 스크롤이 생김 |
| `.info-tip` 요소 | `<span>` | `<button>` (+ `background: transparent; padding: 0; max-width: 80vw`) | 키보드로 말풍선을 열 수 있게 |
| KPI 값 없음 | (해당 없음) | `.kpi-value .unknown` 17px | '확인할 수 없음'이 40px로 커지지 않게 |
| 건너뛰기 후 본문 | (해당 없음) | `#main-content:focus { outline: none }` | 본문 전체에 테두리가 그려지지 않게 |

## 이 템플릿에서 추가한 클래스 (DejaFix에 없음)
| 클래스 | 내용 |
|---|---|
| `.btn.ghost` `.btn.danger` `.btn.block` | 투명 버튼, 위험 버튼(`--on-danger` 글자), 가로 꽉 채우기. theme.css 끝에 둔다 |
| `.chip.red` `.chip.blue` | DejaFix `.chip.riskhigh` · `.chip.info`와 같은 색의 범용 이름 |
| `.page-head.with-actions` `.card-actions` | 제목 줄 오른쪽 버튼 영역 |
| `.topbar-lead` | 상단바 왼쪽 칸 (DejaFix의 상황 요약 줄 자리) |
| `.note-body` `.note-close`, `.field-hint`, `.switch-label`, `.bar-value`, `.list-main`, `.skeleton-lines` | 컴포넌트 안쪽 배치용 |
| `.modal*` | 신규 Modal |

## aiprj에서 보충한 것
| 항목 | 내용 |
|---|---|
| `word-break: keep-all` | 한국어 어절 단위 줄바꿈 (`overflow-wrap`은 바꾸지 않음) |
| `.skip-link`, `.visually-hidden` | 키보드·스크린리더 접근성 |
| `prefers-reduced-motion` | 움직임 줄이기 설정을 따름 |
| `.note.ok` / `.note.bad` | 성공·실패 안내 띠 |
| TopNav | 사이드바 없는 가로 메뉴형 헤더 (모양은 DejaFix 토큰) |
