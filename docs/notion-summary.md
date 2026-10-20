# common-frontend 요약

## 개요

여러 프로젝트에서 반복해 쓰던 UI를 모은 프론트엔드 공용 템플릿입니다.
출처는 GitHub DejaFix/DejaFix 프론트엔드(dev 브랜치) 하나뿐이고, 디자인(인디고 팔레트, 어두운 사이드바, 각진 모양)을 그대로 옮겼습니다. DejaFix에 없는 것은 Modal과 데모 페이지뿐입니다(신규).
React 프로젝트는 `styles.css`와 컴포넌트를 불러 쓰고, React가 없는 프로젝트는 `src/styles/`의 CSS 클래스만 가져다 씁니다.
상세 사용법은 GitHub 문서에만 둡니다: https://github.com/DejaFix/common-frontend

## 디자인 토큰 요약

| 항목                                             | 값 (라이트 / 다크)                                                                             |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| 주요색 `--primary`                               | #5b5bd6 인디고 / #3fae9c 청록                                                                  |
| 바탕·면 `--bg` `--surface`                       | #f6f6fb · #ffffff / #0e1312 · #161c1b                                                          |
| 글자 `--text` `--text-2` `--text-3`              | #232345 · #4a4a6e · #8a8aa8 / #edf1f0 · #b4bebb · #8a9693                                      |
| 상태 `--success` `--warning` `--danger` `--info` | #2e9e6b · #a87a0a · #cf3d34 · #3c6e9e                                                          |
| 사이드바 `--side-bg`                             | #1d1d3a (라이트·다크 같음)                                                                     |
| 글꼴                                             | Pretendard Variable, 본문 15px · 보조 13px · 카드 제목 17px · 페이지 제목 28px · KPI 숫자 40px |
| 간격                                             | 페이지 여백 28px, 카드 안쪽 20×22px, 카드 사이 16px                                            |
| 모서리                                           | 0 (각진 모양, `--radius-*` 토큰으로 조절)                                                      |
| 레이아웃                                         | 사이드바 248px(접으면 64px), 상단바 60px, 오른쪽 패널 400px, 본문 최대 1280px                  |
| 브레이크포인트                                   | 1280px 사용자 이름 숨김 · 1100px KPI 2열 · 900px 사이드바→가로 메뉴                            |

전체 값: https://github.com/DejaFix/common-frontend/blob/main/docs/tokens.md

## 컴포넌트 목록

| 이름              | 용도                                             | 문서                                                                                                            |
| ----------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| AppShell          | 사이드바 + 상단바 + 본문 + 오른쪽 패널 화면 뼈대 | [AppShell.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/AppShell.md)                 |
| PageHeader        | 경로와 페이지 제목 줄                            | [PageHeader.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/PageHeader.md)             |
| UserMenu          | 상단바 사용자 칸과 드롭다운                      | [UserMenu.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/UserMenu.md)                 |
| SearchBox         | 상단바 검색칸 (Ctrl K)                           | [SearchBox.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/SearchBox.md)               |
| Button            | 버튼과 아이콘 버튼                               | [Button.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/Button.md)                     |
| Chip              | 상태·분류 라벨                                   | [Chip.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/Chip.md)                         |
| Card              | 제목 줄이 있는 카드                              | [Card.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/Card.md)                         |
| StatCard          | 숫자 하나를 크게 보여주는 KPI 카드               | [StatCard.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/StatCard.md)                 |
| Field             | 라벨·입력칸·오류, Input/Select/Switch            | [Field.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/Field.md)                       |
| SegmentedControl  | 2~4개 중 하나 고르기                             | [SegmentedControl.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/SegmentedControl.md) |
| Collapsible       | 펼치고 접는 구역                                 | [Collapsible.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/Collapsible.md)           |
| Icon              | 선 아이콘                                        | [Icon.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/Icon.md)                         |
| Notice            | 화면 안 안내 띠                                  | [Notice.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/Notice.md)                     |
| Toast             | 상단바의 짧은 알림                               | [Toast.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/Toast.md)                       |
| Modal             | 대화상자 (기본 dialog, 신규)                     | [Modal.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/Modal.md)                       |
| EmptyState        | 비어 있을 때 안내                                | [EmptyState.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/EmptyState.md)             |
| Skeleton          | 불러오는 중 자리 표시                            | [Skeleton.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/Skeleton.md)                 |
| UnknownValue      | 확인되지 않은 값 표시                            | [UnknownValue.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/UnknownValue.md)         |
| DataTable         | 표                                               | [DataTable.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/DataTable.md)               |
| Tooltip (InfoTip) | (i) 설명 말풍선                                  | [Tooltip.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/Tooltip.md)                   |
| Kbd               | 키보드 단축키 표시                               | [Kbd.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/Kbd.md)                           |
| ProgressBar       | 이름 / 막대 / 값 한 줄                           | [ProgressBar.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/ProgressBar.md)           |
| EChart            | ECharts 래퍼 (선택 의존성)                       | [EChart.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/EChart.md)                     |
| ListRow           | 목록 줄 CSS 패턴                                 | [ListRow.md](https://github.com/DejaFix/common-frontend/blob/main/docs/components/ListRow.md)                   |

## 시작하는 법

```bash
git clone https://github.com/DejaFix/common-frontend.git
cd common-frontend
npm install
npm run dev
```

브라우저에서 http://localhost:5173 을 열면 데모(현황·알림 규칙·컴포넌트·레이아웃 화면)가 나옵니다.
