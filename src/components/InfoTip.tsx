import { cx } from '../lib/cx'

export interface InfoTipProps {
  /** 말풍선 글 (한두 문장) */
  text: string
  /** 화면 오른쪽 끝에 있으면 'right'로 말풍선을 왼쪽으로 편다 */
  align?: 'left' | 'right'
}

/** (i) 아이콘에 마우스를 올리거나 키보드로 가면 설명 말풍선이 뜬다. CSS만으로 동작한다. */
export function InfoTip({ text, align = 'left' }: InfoTipProps) {
  return (
    <button type="button" className={cx('info-tip', align === 'right' && 'right')} data-tip={text} aria-label={text}>
      i
    </button>
  )
}
