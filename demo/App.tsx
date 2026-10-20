// 데모 페이지 (신규). 템플릿 컴포넌트를 DejaFix 화면 구성(현황·알림 규칙)대로 배치해 보여준다.
import { useEffect, useMemo, useState } from 'react'
import {
  AppShell,
  Button,
  Card,
  Chip,
  Chips,
  Collapsible,
  DataTable,
  EmptyState,
  Field,
  IconButton,
  InfoTip,
  Input,
  Kbd,
  Modal,
  Notice,
  PageHeader,
  ProgressBar,
  SearchBox,
  SegmentedControl,
  Select,
  Skeleton,
  StatCard,
  Switch,
  ToastOutlet,
  UnknownValue,
  UserMenu,
  cssVar,
  useThemeVersion,
  useToast,
  type ChipTone,
  type Column,
  type NavItem,
} from '../src'
import { EChart } from '../src/charts'

type Page = 'home' | 'rules' | 'components'
type Mode = 'light' | 'dark'

const pages: { id: Page; label: string; icon: NavItem['icon']; badge?: number }[] = [
  { id: 'home', label: '현황', icon: 'dashboard', badge: 5 },
  { id: 'rules', label: '알림 규칙', icon: 'bell' },
  { id: 'components', label: '컴포넌트', icon: 'plan' },
]

function usePage(): Page {
  const read = (): Page => pages.find((p) => `#/${p.id}` === location.hash)?.id ?? 'home'
  const [page, setPage] = useState<Page>(read)
  useEffect(() => {
    const on = () => setPage(read())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return page
}

export function App() {
  const page = usePage()
  const toast = useToast()
  const [query, setQuery] = useState('')
  const [panel, setPanel] = useState(false)
  const [mode, setMode] = useState<Mode>('light')
  useEffect(() => {
    // 라이트/다크 강제 전환: <html data-theme="light|dark"> (속성이 없으면 OS 설정을 따른다)
    document.documentElement.setAttribute('data-theme', mode)
  }, [mode])

  const nav: NavItem[] = pages.map((p) => ({
    href: `#/${p.id}`,
    label: p.label,
    icon: p.icon,
    active: p.id === page,
    badge: p.badge,
  }))
  nav.push({ href: '#/soon', label: '관리', icon: 'admin', soon: true })

  return (
    <AppShell
      brand={{ name: 'Common', logoSrc: '/logo-mark.svg' }}
      nav={nav}
      storageKey="common-frontend.demo.sidebar"
      topbar={
        <>
          <a
            href="#/home"
            className="topbar-time"
            style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            확인 10-20 13:05 · 지금 확인할 항목 5건
          </a>
          <SegmentedControl
            ariaLabel="테마"
            value={mode}
            onChange={setMode}
            options={[
              { value: 'light', label: '라이트' },
              { value: 'dark', label: '다크' },
            ]}
          />
          <ToastOutlet />
          <SearchBox
            value={query}
            onChange={setQuery}
            onSubmit={(q) => toast.show(`'${q}' 검색 결과가 없습니다`)}
            placeholder="항목 · 담당 찾기"
          />
          <UserMenu
            name="홍길동"
            role="관리자"
            items={[{ label: '로그아웃', onSelect: () => toast.show('로그아웃했습니다') }]}
          />
          <IconButton href="#/rules" icon="bell" label="알림" dot />
          <Button variant="dark" icon="sparkle" onClick={() => setPanel((v) => !v)}>
            도우미
          </Button>
        </>
      }
      panel={{
        open: panel,
        title: '도우미',
        sub: '오른쪽 패널 예시',
        onClose: () => setPanel(false),
        children: (
          <p style={{ color: 'var(--text-2)' }}>
            상세 보기, 필터, 도움말 등을 넣는 자리입니다. 열리면 본문이 왼쪽으로 밀립니다.
          </p>
        ),
      }}
    >
      {page === 'home' && <Home />}
      {page === 'rules' && <Rules />}
      {page === 'components' && <Components />}
    </AppShell>
  )
}

/* ---------- 현황: DejaFix 현황 화면 구성 ---------- */

interface Item {
  id: number
  tone: ChipTone
  level: string
  title: string
  owner: string
  done?: boolean
  time: string
}

const newItems: Item[] = [
  {
    id: 1,
    tone: 'amber',
    level: '높음',
    title: '결제 페이지 응답이 3초를 넘습니다',
    owner: 'web-01',
    time: '10-20 12:48',
  },
  {
    id: 2,
    tone: 'amber',
    level: '보통',
    title: '야간 배치가 예정보다 40분 늦게 끝났습니다',
    owner: 'batch-03',
    time: '10-20 12:42',
  },
  {
    id: 3,
    tone: 'neutral',
    level: '낮음',
    title: '디스크 사용률 80% 도달',
    owner: 'db-02',
    done: true,
    time: '10-20 12:23',
  },
]
const oldItems: Item[] = [
  { id: 4, tone: 'neutral', level: '정보', title: '인증서 만료 30일 전', owner: 'api-02', time: '10-15 09:00' },
  {
    id: 5,
    tone: 'amber',
    level: '보통',
    title: '로그 수집이 간헐적으로 끊깁니다',
    owner: 'log-01',
    time: '10-12 18:20',
  },
]

function ItemRows({ items }: { items: Item[] }) {
  return (
    <div>
      {items.map((it) => (
        <a key={it.id} href="#/home" className="alert-row">
          <Chip tone={it.tone}>{it.level}</Chip>
          <div className="alert-main">
            <div className="alert-name">{it.title}</div>
            <div className="alert-meta">
              <span className="mono">{it.owner}</span>
              {it.done && <span style={{ color: 'var(--accent)', fontWeight: 600 }}>해결됨</span>}
            </div>
          </div>
          <Chip tone="green">확인 완료</Chip>
          <span className="alert-time">{it.time}</span>
        </a>
      ))}
    </div>
  )
}

function Home() {
  return (
    <div className="page page-wide">
      <PageHeader title="현황" sub="지금 확인할 항목 5건 · 연결된 서비스 8개" />
      <Notice icon="bell" className="section-gap">
        이 화면은 최근 24시간 안에 들어온 항목과 오래 열려 있는 항목을 나눠서 보여 줍니다. (데모 데이터)
      </Notice>
      <div className="grid kpi section-gap">
        <StatCard
          label="열린 항목"
          value={5}
          unit="건"
          hint="아직 처리되지 않은 것"
          dot="var(--accent)"
          onClick={() => undefined}
        />
        <StatCard label="높음 이상" value={1} unit="건" hint="즉시 확인 필요" dot="var(--danger)" />
        <StatCard label="정상 서비스" value="7 / 8" unit="개" hint="확인 불가 0개" dot="var(--info)" />
        <StatCard label="평균 처리 시간" value={null} hint="값이 없으면 0 대신 '확인 불가'" dot="var(--warning)" />
      </div>
      <Card title="지금 확인할 항목" sub="누르면 상세 화면으로 이동" as="section">
        <Collapsible title="새로 들어온 항목" count={3} meta="최근 24시간 안에 시작 — 지금 생긴 문제" defaultOpen>
          <ItemRows items={newItems} />
        </Collapsible>
        <Collapsible title="오래 열린 항목" count={2} meta="24시간 넘게 열려 있음">
          <ItemRows items={oldItems} />
        </Collapsible>
      </Card>
    </div>
  )
}

/* ---------- 알림 규칙: DejaFix 알림 화면 구성 ---------- */

const ruleSeed = [
  { id: 1, name: '높음 이상 즉시 알림', cond: '높음 이상이 새로 들어올 때', to: 'ops-team@example.com', on: true },
  {
    id: 2,
    name: '디스크 고갈 임박',
    cond: '디스크가 7일 안에 가득 찰 것으로 예측될 때',
    to: 'infra@example.com',
    on: true,
  },
  {
    id: 3,
    name: '반복 알림 일일 요약',
    cond: '매일 09:00, 24시간 3회 이상 반복된 알림',
    to: 'ops-team@example.com',
    on: false,
  },
]

interface Log {
  id: number
  time: string
  rule: string
  to: string
  status: 'sent' | 'failed' | 'waiting'
  ms: number | null
}
const logs: Log[] = [
  { id: 1, time: '10-20 12:48', rule: '높음 이상 즉시 알림', to: 'ops-team@example.com', status: 'sent', ms: 420 },
  { id: 2, time: '10-20 09:00', rule: '반복 알림 일일 요약', to: 'ops-team@example.com', status: 'failed', ms: null },
  { id: 3, time: '10-20 08:12', rule: '디스크 고갈 임박', to: 'infra@example.com', status: 'waiting', ms: null },
]
const statusChip = {
  sent: { tone: 'green', label: '보냄' },
  failed: { tone: 'neutral', label: '실패' },
  waiting: { tone: 'amber', label: '대기' },
} as const

const logColumns: Column<Log>[] = [
  { key: 'time', header: '시각', render: (l) => <span className="mono">{l.time}</span> },
  { key: 'rule', header: '규칙' },
  { key: 'to', header: '받는 사람', render: (l) => <span className="mono">{l.to}</span> },
  {
    key: 'status',
    header: '결과',
    render: (l) => <Chip tone={statusChip[l.status].tone}>{statusChip[l.status].label}</Chip>,
  },
  { key: 'ms', header: '걸린 시간', numeric: true, render: (l) => (l.ms === null ? <UnknownValue /> : `${l.ms}ms`) },
]

function Rules() {
  const toast = useToast()
  const [rules, setRules] = useState(ruleSeed)
  const changed = rules.some((r, i) => r.on !== ruleSeed[i].on)
  return (
    <div className="page">
      <PageHeader title="알림 규칙" sub="누구에게 어떤 항목을 메일로 알릴지 정하고, 보낸 결과를 확인합니다." />
      <Notice icon="bell">메일은 서버가 보냅니다. 이 화면은 설정과 결과만 보여 줍니다. 수신 주소는 예시입니다.</Notice>
      <Card title="알림 규칙" sub="켜고 끄면 저장 전까지 이 화면에만 반영됩니다" as="section" className="section-gap">
        <div className="list">
          {rules.map((r) => (
            <div className="list-row" key={r.id}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="list-title">{r.name}</div>
                <div className="list-sub">
                  {r.cond} · 받는 사람 <span className="mono">{r.to}</span>
                </div>
              </div>
              <Switch
                checked={r.on}
                ariaLabel={`${r.name} 켜기`}
                onChange={(v) => setRules((prev) => prev.map((x) => (x.id === r.id ? { ...x, on: v } : x)))}
              />
            </div>
          ))}
        </div>
        <div className="save-bar">
          <Button variant="primary" disabled={!changed} onClick={() => toast.show('저장했습니다')}>
            저장
          </Button>
          <span className="card-sub">{changed ? '저장하지 않은 변경이 있습니다.' : '변경한 내용이 없습니다.'}</span>
        </div>
      </Card>
      <Card title="발송 내역" sub="보냄 1건 · 실패 1건 · 대기 1건" as="section">
        <DataTable columns={logColumns} rows={logs} rowKey={(l) => l.id} highlight={(l) => l.status === 'failed'} />
      </Card>
    </div>
  )
}

/* ---------- 컴포넌트 모음 ---------- */

function Components() {
  const toast = useToast()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const theme = useThemeVersion()
  const option = useMemo(() => {
    void theme // 라이트/다크가 바뀌면 색을 다시 읽는다
    const grid = cssVar('--chart-grid')
    return {
      color: [cssVar('--series-1'), cssVar('--series-2')],
      textStyle: { color: cssVar('--chart-text') },
      tooltip: { trigger: 'axis' },
      grid: { left: 36, right: 12, top: 16, bottom: 28 },
      xAxis: {
        type: 'category',
        data: ['월', '화', '수', '목', '금', '토', '일'],
        axisLine: { lineStyle: { color: grid } },
      },
      yAxis: { type: 'value', splitLine: { lineStyle: { color: grid } } },
      series: [
        { type: 'line', smooth: true, data: [12, 18, 15, 22, 19, 9, 7] },
        { type: 'bar', data: [5, 8, 6, 10, 7, 3, 2] },
      ],
    }
  }, [theme])

  return (
    <div className="page">
      <PageHeader
        title="컴포넌트"
        sub="템플릿에 들어 있는 기본 요소 모음."
        crumbs={[{ label: '현황', href: '#/home' }, { label: '컴포넌트' }]}
      />
      <div className="grid two">
        <Card title="Button">
          <div className="toolbar">
            <Button>기본</Button>
            <Button variant="primary">주요</Button>
            <Button variant="dark" icon="sparkle">
              강조
            </Button>
            <Button size="small">작게</Button>
            <Button disabled>비활성</Button>
          </div>
          <div className="toolbar">
            <IconButton href="#/components" icon="bell" label="알림" dot />
            <Button onClick={() => toast.show('상단바에 알림이 떴습니다')}>토스트</Button>
            <Button variant="primary" onClick={() => setOpen(true)}>
              모달 열기
            </Button>
            <span className="card-sub">
              <Kbd>Ctrl K</Kbd> 검색칸으로 이동
            </span>
          </div>
        </Card>
        <Card title="Chip · Notice">
          <Chips>
            <Chip>기본</Chip>
            <Chip tone="green">정상</Chip>
            <Chip tone="amber">대기</Chip>
          </Chips>
          <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
            <Notice icon="bell">기본 안내</Notice>
            <Notice tone="warn">연결이 느립니다. 마지막으로 받은 값을 보여줍니다.</Notice>
          </div>
        </Card>
        <Card title="Field · Select · Switch">
          <Field label="이름" error={name.length === 1 ? '2자 이상 입력하세요' : undefined}>
            {(p) => <Input {...p} value={name} onChange={(e) => setName(e.target.value)} placeholder="홍길동" />}
          </Field>
          <div className="toolbar" style={{ marginTop: 16 }}>
            <Select
              aria-label="기간"
              options={[
                { value: '24h', label: '최근 24시간' },
                { value: '7d', label: '최근 7일' },
              ]}
            />
            <SwitchDemo />
          </div>
        </Card>
        <Card
          title={
            <>
              ProgressBar <InfoTip text="값이 없으면 막대를 채우지 않고 '확인 불가'로 둡니다." />
            </>
          }
        >
          <ProgressBar label="web-01" value={42} />
          <ProgressBar label="api-02" value={87} />
          <ProgressBar label="batch-03" value={null} />
          <div style={{ marginTop: 16 }}>
            <Skeleton height={60} />
          </div>
        </Card>
        <Card title="EChart" sub="토큰 색을 따라 라이트/다크 전환">
          <EChart option={option} />
        </Card>
        <Card>
          <EmptyState
            title="결과가 없습니다"
            action={
              <a className="btn" href="#/home">
                현황으로 돌아가기
              </a>
            }
          />
        </Card>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="변경 내용을 저장할까요?"
        footer={
          <>
            <Button onClick={() => setOpen(false)}>취소</Button>
            <Button
              variant="primary"
              onClick={() => {
                setOpen(false)
                toast.show('저장했습니다')
              }}
            >
              저장
            </Button>
          </>
        }
      >
        Esc, 배경 클릭, × 버튼으로 닫힙니다. 키보드 포커스는 대화상자 안에 머뭅니다.
      </Modal>
    </div>
  )
}

function SwitchDemo() {
  const [on, setOn] = useState(true)
  return <Switch checked={on} onChange={setOn} ariaLabel="알림 받기" />
}
