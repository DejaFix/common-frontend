# common-frontend — Claude Code 작업 규칙

세션은 먼저 [docs/DejaFix-common-guidelines.md](docs/DejaFix-common-guidelines.md)(팀 공용 지침서)를 읽고, 이 문서를 읽는다.
지침서 중 DejaFix 도메인 전용 항목(안전 규칙 번호, 도메인 설정 묶음, 외부 모니터링 연동, `contracts/` 복사 표)은 이 repo에 해당하지 않는다.

## 이 repo

- 범용 프론트엔드 템플릿: `src/styles/`(토큰·CSS), `src/components/`(React), `src/charts/`(echarts 선택), `demo/`(데모 페이지), `docs/`(문서).
- 백엔드 API·스키마에 의존하지 않는다. 그래서 `contracts/`를 두지 않는다. 계약 파일이 필요해 보이면 만들기 전에 사람에게 묻는다.
- 특정 프로젝트 전용 요소(도메인 용어, 업무 전용 컴포넌트, 브랜드 로고)를 넣지 않는다.

## 코드 규칙

- 색은 `tokens.css`·`theme.css`의 변수만 쓴다. 크기·간격은 DejaFix처럼 숫자(px)를 그대로 쓴다. 모서리는 `--radius-*` 토큰을 쓴다.
- 새 색 토큰이 필요하면 라이트·다크 두 곳(+ `data-theme='dark'` 블록)을 함께 고친다.
- CSS 쌓는 순서는 DejaFix와 같다: `tokens.css` → `global.css` → `theme.css` → `shell.css`.
- 유일한 출처는 GitHub `DejaFix/DejaFix`의 프론트엔드(`dev` 브랜치)다. 값(색·크기·간격·모서리·그림자)을 새로 해석하거나 바꾸지 않는다.
- DejaFix에 없는 것은 넣지 않는다. 예외는 사람이 승인한 것뿐이다: Modal·데모 페이지(`[신규]` 주석)와 `docs/tokens.md`의 'DejaFix 대비 예외' 표(코드에 `DejaFix 대비 예외` 주석). 새 예외가 필요하면 먼저 묻는다.
- 클래스 이름·마크업은 DejaFix 원본을 유지한다. React 컴포넌트는 클래스를 붙이는 얇은 층으로 둔다.
- 값 표시 컴포넌트는 값이 없을 때 0·빈칸으로 대신하지 않고 DejaFix처럼 '확인할 수 없음'(`.unknown`)·'확인 불가'(`.card-sub`)로 표시한다.
- 접근성: 아이콘만 있는 버튼·링크와 스위치는 이름(`label`·`ariaLabel`)을 꼭 받는다.
- 컴포넌트를 추가·변경하면 `docs/components/<이름>.md`(이름·용도·props/예시·의존성·원본 프로젝트)와 `docs/components/README.md` 표, `src/index.ts` export, `demo/App.tsx` 예시를 같이 고친다.
- 클래스·토큰·props 이름 변경은 쓰는 프로젝트를 깨뜨리므로 PR 본문에 "호환성 깨짐"으로 적는다.

## 검사 (PR 머지 조건)

```bash
npm run check   # tsc + eslint
npm run build
npx prettier --check .
```

## 비밀값

- 이 repo는 비밀값을 쓰지 않는다. `.env`를 만들거나 읽지 않는다. `.env.example`만 둔다.

## 문서

- 사용자 대화와 문서는 한국어. 컴포넌트 문서는 짧게(구현 과정·당연한 내용 제외).
- Notion에는 컴포넌트 목록·한 줄 용도·GitHub 링크만 둔다(무료 플랜 블록 한도). 상세는 이 repo에만 쓴다.
