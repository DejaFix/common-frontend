import type { ReactNode } from 'react'
import { cx } from '../lib/cx'
import { Icon, type IconName } from './Icon'

/** info·warn은 DejaFix .note / .note.warn, ok·bad는 aiprj에서 보충 */
export type NoticeTone = 'info' | 'warn' | 'ok' | 'bad'

export interface NoticeProps {
  tone?: NoticeTone
  /** 앞 아이콘 (DejaFix 화면은 bell) */
  icon?: IconName
  children: ReactNode
  /** 주면 닫기(×) 버튼이 생긴다 */
  onClose?: () => void
  className?: string
}

/** 화면 안 안내 띠. warn·bad는 스크린리더가 바로 읽는다(role="alert"). */
export function Notice({ tone = 'info', icon, children, onClose, className }: NoticeProps) {
  const urgent = tone === 'warn' || tone === 'bad'
  return (
    <div className={cx('note', tone !== 'info' && tone, className)} role={urgent ? 'alert' : 'status'}>
      {icon && <Icon name={icon} size={16} />}
      <div className="note-body">{children}</div>
      {onClose && (
        <button type="button" className="note-close" aria-label="닫기" onClick={onClose}>
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  )
}
